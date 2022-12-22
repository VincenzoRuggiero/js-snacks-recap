const { createApp } = Vue;

createApp({
  data() {
    return {
      guests: [],
      guest: '',
      invited: false;
    };
  },
  methods: {
    checkIsInvited(guest){
      this.invited =  this.guests.includes(guest)
    }
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/name")
        .then((result) => {
          this.guest = result.data.response;
          this.guests.push(this.guest);
        });
    }
  },
}).mount("#app");

let ask = document.getElementById("#ask");
ask = prompt("Dica il suo nome").value;
let guestName = ask;
