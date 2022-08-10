// document.getElementById("musicform").addEventListener("submit", handleForm);

const handleForm = (e: any) => {
  e.preventDefault();

  const textarea = document.getElementById("musiclist") as HTMLInputElement;

  if (textarea !== null) {
    console.log(textarea.value);

    // Email.send({
    //   Host: "smtp.elasticemail.com",
    //   Username: "jakob@letsfly.dk",
    //   Password: "ACED25EB7248FD9CBF896B24AA975BC5A150",
    //   To: "jakob@letsfly.dk",
    //   From: "jakob@letsfly.dk",
    //   Subject: "Nyt ønske om musik",
    //   Body: textarea.value
    // }).then(function (message) {
    //   console.log(message);

    //   alert("Tak, den er modtaget!");
    //   textarea.value = "";
    // });
  }
};

const apikey =
  "80B092B520E5CD71144DA98B07E400C254AF57470D53F54651D6D51C4B401AE155BAEC188F5D0D0347EC30781535D656";
