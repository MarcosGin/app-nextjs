export default (req, res) => {
  const data = {
    hero: [
      {
        title: "Hezbollah ya es considerado grupo terrorista por Argentina",
        thumbnail:
          "https://telefe-static2.akamaized.net/media/181241/hezbollah.jpg?v=20190717080859000&format=main&width=640&height=360&mode=crop",
        section: "Política",
        date: "2019-07-17 09:41:26",
        assets: {
          videos: [{ url: "onevideo", duration: "01:40" }, { url: "twovideo", duration: "04:50" }]
        },
        url: "/politica/hezbollah-es-considerado-grupo-terrorista-por-argentina/"
      }
    ],
    highlights: {
      top: [
        {
          title: "Quieren prohibir la exhibición de animales en vidrieras",
          thumbnail:
            "https://telefe-static2.akamaized.net/media/181250/vidriera-venta-animales.jpg?v=20190717084709000&format=large&width=460&height=259&mode=crop",
          section: "Actualidad",
          date: "2019-07-17 09:15:40",
          assets: {
            videos: [{ url: "onevideo", duration: "04:04" }]
          },
          url: "/actualidad/quieren-prohibir-la-exhibicion-de-animales-en-vidrieras/"
        },
        {
          title: "Una mujer murió al incendiarse su casa en Villa Urquiza",
          thumbnail:
            "https://telefe-static2.akamaized.net/media/181238/villa-urquiza.jpg?v=20190717075116000&format=large&width=460&height=259&mode=crop",
          section: "Actualidad",
          date: "2019-07-17 07:53:29",
          url: "/actualidad/una-mujer-murio-al-incendiarse-su-casa-en-villa-urquiza/"
        },
        {
          title: "Le cortaron el cuello a un colectivero para robarle",
          thumbnail:
            "https://telefe-static2.akamaized.net/media/181236/247.jpg?v=20190717074619000&format=large&width=460&height=259&mode=crop",
          section: "Actualidad",
          date: "2018-12-07 15:20:40",
          url: "/actualidad/le-cortaron-el-cuello-a-un-colectivero-para-robarle/"
        }
      ],
      bottom: [
        {
          title: "Molinetes liberados en la estación Rosas de la línea B",
          thumbnail:
            "https://telefe-static2.akamaized.net/media/181231/molienete.jpg?v=20190717072435000&format=medium&width=300&height=169&mode=crop",
          section: "Actualidad",
          date: "2019-07-17 08:40:55",
          assets: {
            videos: [{ url: "onevideo", duration: "01:44" }]
          },
          url: "/actualidad/molinetes-liberados-en-la-estacion-rosas-de-la-linea-b-desde-las-800/"
        },
        {
          title: "'Yo soy muy malo': otra confesión con Mauro Szeta",
          thumbnail:
            "https://telefe-static2.akamaized.net/media/181214/yo.jpg?v=20190716225044000&format=medium&width=300&height=169&mode=crop",
          section: "Informes Especiales",
          date: "2018-12-07 15:10:30",
          assets: {
            videos: [{ url: "onevideo", duration: "13:45" }]
          },
          url: "/informes-especiales/yo-soy-muy-malo-otra-confesion-con-mauro-szeta/"
        }
      ]
    }
  };

  res.json(data);
};
