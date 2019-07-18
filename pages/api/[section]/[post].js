export default (req, res) => {
  const post = {
    title: "This is a fake tittle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    thumbnail:
      "https://telefe-static2.akamaized.net/media/181241/hezbollah.jpg?v=20190717080859000&format=main&width=640&height=360&mode=crop",
    section: "Política",
    date: "2019-07-17 09:41:26",
    url: "/politica/hezbollah-es-considerado-grupo-terrorista-por-argentina/"
  };

  res.json({
    post,
    scrollablePost: [
      { slug: "hezbollah-es-considerado-grupo-terrorista-por-argentina" },
      { slug: "te-digo-que-sos-el-siguiente" },
      { slug: "no-lo-puedo creer que funcione" }
    ]
  });
};
