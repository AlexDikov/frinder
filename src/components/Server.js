let server = createServer();
server.get("/api/users", {
  users: [
    {
      id: 1,
      name: "Alex",
      birth: "13.06.1990",
      gender: "male",
      photo: "https://cloud.mail.ru/public/fXNY/GdcFwPtSE",
      about: "i like beer",
    },
    {
      id: 2,
      name: "Brad",
      birth: "18.12.1963",
      gender: "male",
      photo:
        "https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/03/04/12/Brad-Pitt-sa-soiree-avec-ses-six-enfants.jpg?VersionId=CmBrWNUI8Rs__FO8cEgtTFvz4Dgk8EFy",
      about: "i like myself",
    },
    {
      id: 3,
      name: "Monica",
      birth: "30.09.1964",
      gender: "female",
      photo: "https://i.pinimg.com/736x/ff/46/7f/ff467f569bb4ff94884ff2b5387e97ad.jpg",
      about: "i like Sanya",
    },
    {
      id: 4,
      name: "Woody",
      birth: "23.07.1961",
      gender: "male",
      photo: "https://pbs.twimg.com/media/EBL_GmEX4AADIz6.jpg",
      about: "i like dress",
    },
    {
      id: 5,
      name: "Greg",
      birth: "02.01.1900",
      gender: "female",
      photo: "https://static.tvmaze.com/uploads/images/original_untouched/231/578843.jpg",
      about: "i like Baileys",
    },
  ],
});
