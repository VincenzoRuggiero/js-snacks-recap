const { createApp } = vue;

createApp({
    date(){
        return {
            evenNum: [],
            oddsNum: [],
        }
    }
   methods: {
    getNum(){
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/int")
        .then((result) => {
          if(result % 2 === 0){
            this.evenNum.push(result)
          } else {
            this.oddsNum.push(result)
          }
        });
    }
   },
}).mount("#app")