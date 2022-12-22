const { createApp } = Vue;

createApp({
  data() {
    return {
      conversation: [],
      userA_Message: "",
      userB_Message: "",
    };
  },
  methods: {
    sendNewMessage: function () {
      let newMessage = {
        message: this.userA_Message,
        status: "sent",
      };

      this.conversation.push(newMessage);
      console.log(this.conversation);

      setTimeout(() => {
        this.answerBot();
      }, 1000);
    },

    answerBot: function () {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/sentence")
        .then((result) => {
          this.userB_Message = {
            message: result.data.response,
            status: "receveid",
          };
          this.conversation.push(this.userB_Message);
        });
    },
  },
}).mount("#app");
