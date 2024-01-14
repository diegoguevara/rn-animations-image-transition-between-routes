const theImage = (id: number) => {
  return `https://picsum.photos/id/${id + 50}/800/800`;
};

export const items = Array.from(Array(20).keys()).map((i) => ({
  id: i,
  title: `Item ${i}`,
  description: `This is the ${i} item`,
  image: theImage(i),
}));
