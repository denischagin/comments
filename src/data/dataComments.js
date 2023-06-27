export const dataComments = [
  {
      id: 1,
      username: "Денис",
      text: "Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! Всем привет! ",
      inFavorites: false,
      time: Date.now(),
      likes: 3,
      commentsReply: [
          {
              id: 2,
              username: "Андрей",
              text: "И тебе привет",
              inFavorites: true,
              time: Date.now(),
              likes: 4,
          },
          {
              id: 3,
              username: "Евгений",
              text: "И тебе привет",
              inFavorites: false,
              time: Date.now(),
              likes: 4,
          },
      ]
  },
  {
      id: 4,
      username: "Тихон",
      text: "Всем привет!",
      inFavorites: false,
      time: Date.now(),
      likes: 5,
      commentsReply: [
          {
              id: 5,
              username: "Андрей",
              text: "И тебе привет",
              inFavorites: false,
              time: Date.now(),
              likes: 4,
          }
      ]
  },
]
