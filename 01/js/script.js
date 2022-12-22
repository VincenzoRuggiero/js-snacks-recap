const { createApp } = vue;

createApp({
  date() {
    return {
      evenNum: [],
      oddsNum: [],
    };
  },
  methods: {
    getNum() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/int")
        .then((result) => {
          const number = result.data.response;
          if (number % 2 === 0) {
            this.evenNum.push(number);
          } else {
            this.oddsNum.push(number);
          }
        });
    },
  },
}).mount("#app");
