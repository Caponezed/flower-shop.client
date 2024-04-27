// Kinda fetched data from da backend

export const fetchedData = [
  // Розы
  {
    id: 1,
    name: 'Роза красная',
    description:
      'Красная роза — это символ любви и страсти, она привлекает внимание своей красотой и яркостью. Её лепестки, словно огонь, горят в лучах солнца, создавая неповторимое зрелище',
    price: 250,
    imgUrl: '../../../assets/images/red-rose.jpg',
    totalQuantity: 100,
    category: { id: 1, name: 'Розы', description: 'Просто розы' },
  },
  {
    id: 2,
    name: 'Роза чёрная',
    description:
      'Чёрная роза — это символ элегантности и загадочности. Её глубокий тёмно-красный цвет, почти чёрный, создаёт впечатление мистической красоты. Бархатистые лепестки придают розе особую нежность и изысканность. Чёрная роза идеально подходит для создания романтической атмосферы и украшения торжественных мероприятий.',
    price: 300,
    imgUrl: '../../../assets/images/black-rose.jpg',
    totalQuantity: 100,
    category: { id: 1, name: 'Розы', description: 'Просто розы' },
  },

  // Букеты
  {
    id: 3,
    name: 'Букет 1',
    description: 'Описание Букет 1',
    price: 900,
    imgUrl: '../../../assets/images/bouqet-1.jpg',
    totalQuantity: 30,
    category: { id: 1, name: 'Букеты', description: 'Просто букеты' },
  },
  {
    id: 4,
    name: 'Букет 2',
    description: 'Описание Букет 2',
    price: 1200,
    imgUrl: '../../../assets/images/bouqet-2.jpg',
    totalQuantity: 30,
    category: { id: 2, name: 'Букеты', description: 'Просто букеты' },
  },

  // Композиции
  {
    id: 5,
    name: 'Композиция 1',
    description: 'Описание Композиция 1',
    price: 1400,
    imgUrl: '../../assets/images/composition-1.jpg',
    totalQuantity: 30,
    category: { id: 3, name: 'Композиции', description: 'Просто композиции' },
  },
  {
    id: 6,
    name: 'Композиция 2',
    description: 'Описание Композиция 2',
    price: 1400,
    imgUrl: '../../assets/images/composition-2.jpg',
    totalQuantity: 30,
    category: { id: 3, name: 'Композиции', description: 'Просто композиции' },
  },
  // Горшечные растения
  {
    id: 7,
    name: 'Горшечные растения 1',
    description: 'Описание горшечные растения1',
    price: 2400,
    imgUrl: '../../assets/images/plants-1.jpeg',
    totalQuantity: 30,
    category: {
      id: 4,
      name: 'Горшечные растения',
      description: 'Просто горшечные растения',
    },
  },
  {
    id: 8,
    name: 'Подарки 2',
    description: 'Описание подарки 1',
    price: 3400,
    imgUrl: '../../assets/images/plants-2.jpeg',
    totalQuantity: 30,
    category: {
      id: 4,
      name: 'Горшечные растения',
      description: 'Просто горшечные растения',
    },
  },
  // Подарки
  {
    id: 9,
    name: 'Подарки 1',
    description: 'Описание подарки 1',
    price: 3400,
    imgUrl: '../../assets/images/gifts-1.jpg',
    totalQuantity: 30,
    category: {
      id: 5,
      name: 'Подарки',
      description: 'Просто gодарки',
    },
  },
  {
    id: 10,
    name: 'Подарки 2',
    description: 'Описание подарки 1',
    price: 3400,
    imgUrl: '../../assets/images/gifts-2.jpg',
    totalQuantity: 30,
    category: {
      id: 5,
      name: 'Подарки',
      description: 'Просто gодарки',
    },
  },
];
