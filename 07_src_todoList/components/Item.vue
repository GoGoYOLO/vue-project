<template>
  <transition name="todo" appear>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @click="handleCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          v-show="todo.isEdit"
          type="text"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button
        v-show="!todo.isEdit"
        class="btn btn-edit"
        @click="handleEdit(todo)"
        ref="inputTitle"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "Item",
  props: ["todo",'a'],
  methods: {
    handleCheck(id) {
      this.$bus.$emit("checkTodo", id);
    },
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        // this.$bus.$emit("deleteTodo", id);
        pubsub.publish("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      if (!todo.hasOwnProperty("isEdit")) {
        //动态添加属性
        this.$set(todo, "isEdit", true);
      } else {
        todo.isEdit = true;
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>


<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

.todo-enter,
.todo-leave-to {
  transform: translateX(100%);
}
.todo-enter-active,
.todo-leave-active {
  transition: 0.5s linear;
}
/* 进入的终点、离开的起点 */
.todo-enter-to,
.todo-leave {
  transform: translateX(0);
}
</style>