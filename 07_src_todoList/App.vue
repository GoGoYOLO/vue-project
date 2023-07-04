<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <List :todos="todos" :a="a"/>
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @cleraAllTodo="cleraAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from "./components/MyHeader";
import List from "./components/List";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    List,
  },
  data() {
    return {
      a:1,
      todos: [
        {
          id: "01",
          title: "aa",
          done: true,
        },
        {
          id: "02",
          title: "aa",
          done: false,
        },
      ],
    };
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },

    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },

    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
      });
    },

    deleteTodo(__, id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          this.todos = this.todos.filter((todo) => todo.id !== id);
        }
      });
    },

    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },

    cleraAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    // this.$bus.$on("deleteTodo", this.deleteTodo);
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
  },
  beforeDestroy() {
    this.$bus.$off(["checkTodo","updateTodo"]);
    // this.$bus.$off("deleteTodo");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: blue;
  margin-right: 5px;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>