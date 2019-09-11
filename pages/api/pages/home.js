export default (req, res) => {
  res.json({
    type: "Page",
    props: {
      head: {
        title: "Home Page",
        links: [{ rel: "shortcut icon", type: "image/x-icon", href: "/static/favicon.ico" }]
      }
    },
    children: [
      {
        type: "Header",
        props: {
          logo:
            "https://telefe-static2.akamaized.net/media/12531/logo-noticias.svg?v=20180719132831000",
          menu: [
            { text: "Política", link: "/politica" },
            { text: "Actualidad", link: "/actualidad" },
            { text: "Internacionales", link: "/internacionales" },
            { text: "Deportes", link: "/deportes" },
            { text: "Economía", link: "/economia" },
            { text: "Noticiero de la gente", link: "/noticiero-de-la-gente" },
            { text: "Espectáculos", link: "/espectaculos" },
            { text: "Curiosidades", link: "/curiosidades" },
            { text: "Redes", link: "/redes" },
            { text: "Tecno", link: "/tecno" },
            { text: "MTV news", link: "/mtv-news" }
          ],
          subHeader: {
            transmission: {
              type: "live",
              text: "Ahora en vivo",
              value: "El noticiero de la gente",
              link: "/vivo"
            },

            // transmission: {
            //   type: "nextLive",
            //   text: "Próximo en vivo",
            //   value: {
            //     time: "20:00",
            //     name: ""
            //   }
            // },
            // transmission: { value: { time: "Jueves 2, 13:00hs" } },

            search: true,
            socialLinks: [
              { type: "facebook", value: "http://facebook.com/telefenoticias" },
              { type: "twitter", value: "http://twitter.com/telefenoticias" },
              { type: "youtube", value: "http://youtube.com/telefenoticias" },
              { type: "instagram", value: "http://instagram.com/telefenoticias" },
              { type: "contact", value: "/contacto" }
            ]
          }
        }
      },
      {
        type: "SectionCard",
        props: {
          id: 1,
          name: "mainPosts",
          posts: {
            hero: [
              {
                id: 1,
                title: "Hezbollah ya es considerado grupo terrorista por Argentina",
                thumbnail:
                  "https://telefe-static2.akamaized.net/media/181241/hezbollah.jpg?v=20190717080859000&format=main&width=640&height=360&mode=crop",
                section: "Política",
                date: "2019-07-17 09:41:26",
                assets: {
                  videos: [
                    { url: "onevideo", duration: "01:40" },
                    { url: "twovideo", duration: "04:50" }
                  ],
                  images: [{ url: "onevideo" }, { url: "twovideo" }]
                },
                url: "/politica/hezbollah-es-considerado-grupo-terrorista-por-argentina/"
              }
            ],
            highlights: {
              top: [
                {
                  id: 2,
                  title: "Quieren prohibir la exhibición de animales en vidrieras",
                  thumbnail:
                    "https://telefe-static2.akamaized.net/media/181250/vidriera-venta-animales.jpg?v=20190717084709000&format=large&width=460&height=259&mode=crop",
                  section: "Actualidad",
                  date: "Hace 1 hora",
                  assets: {
                    videos: [{ url: "onevideo", duration: "04:04" }]
                  },
                  url: "/actualidad/quieren-prohibir-la-exhibicion-de-animales-en-vidrieras/"
                },
                {
                  id: 3,
                  title: "Una mujer murió al incendiarse su casa en Villa Urquiza",
                  thumbnail:
                    "https://telefe-static2.akamaized.net/media/181238/villa-urquiza.jpg?v=20190717075116000&format=large&width=460&height=259&mode=crop",
                  section: "Actualidad",
                  date: "Hace 3 horas",
                  url: "/actualidad/una-mujer-murio-al-incendiarse-su-casa-en-villa-urquiza/"
                },
                {
                  id: 4,
                  title: "Le cortaron el cuello a un colectivero para robarle",
                  thumbnail:
                    "https://telefe-static2.akamaized.net/media/181236/247.jpg?v=20190717074619000&format=large&width=460&height=259&mode=crop",
                  section: "Actualidad",
                  date: "Hace 5 horas",
                  url: "/actualidad/le-cortaron-el-cuello-a-un-colectivero-para-robarle/"
                }
              ],
              bottom: [
                {
                  id: 5,
                  title: "Molinetes liberados en la estación Rosas de la línea B",
                  thumbnail:
                    "https://telefe-static2.akamaized.net/media/181231/molienete.jpg?v=20190717072435000&format=medium&width=300&height=169&mode=crop",
                  section: "Actualidad",
                  date: "2019-07-17 08:40:55",
                  assets: {
                    videos: [{ url: "onevideo", duration: "01:44" }]
                  },
                  url:
                    "/actualidad/molinetes-liberados-en-la-estacion-rosas-de-la-linea-b-desde-las-800/"
                },
                {
                  id: 6,
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
          }
        }
      },
      {
        type: "SectionCard",
        props: {
          id: 2,
          name: "moreNews",
          sectionType: "custom",
          posts: {
            hero: [
              {
                id: 7,
                title: "Hezbollah ya es considerado grupo terrorista por Argentina",
                thumbnail:
                  "https://telefe-static2.akamaized.net/media/181241/hezbollah.jpg?v=20190717080859000&format=main&width=640&height=360&mode=crop",
                section: "Política",
                date: "2019-07-17 09:41:26",
                assets: {
                  videos: [
                    { url: "onevideo", duration: "01:40" },
                    { url: "twovideo", duration: "04:50" }
                  ],
                  images: [{ url: "onevideo" }, { url: "twovideo" }]
                },
                url: "/politica/hezbollah-es-considerado-grupo-terrorista-por-argentina/"
              },
              {
                id: 8,
                title: "Hezbollah ya es considerado grupo terrorista por Argentina",
                thumbnail:
                  "https://telefe-static2.akamaized.net/media/181241/hezbollah.jpg?v=20190717080859000&format=main&width=640&height=360&mode=crop",
                section: "Política",
                date: "2019-07-17 09:41:26",
                assets: {
                  videos: [
                    { url: "onevideo", duration: "01:40" },
                    { url: "twovideo", duration: "04:50" }
                  ],
                  images: [{ url: "onevideo" }, { url: "twovideo" }]
                },
                url: "/politica/hezbollah-es-considerado-grupo-terrorista-por-argentina/"
              }
            ],
            highlights: {
              bottom: [
                {
                  id: 9,
                  title: "Molinetes liberados en la estación Rosas de la línea B",
                  thumbnail:
                    "https://telefe-static2.akamaized.net/media/181231/molienete.jpg?v=20190717072435000&format=medium&width=300&height=169&mode=crop",
                  section: "Actualidad",
                  date: "2019-07-17 08:40:55",
                  assets: {
                    videos: [{ url: "onevideo", duration: "01:44" }]
                  },
                  url:
                    "/actualidad/molinetes-liberados-en-la-estacion-rosas-de-la-linea-b-desde-las-800/"
                },
                {
                  id: 10,
                  title: "'Yo soy muy malo': otra confesión con Mauro Szeta",
                  thumbnail:
                    "https://telefe-static2.akamaized.net/media/181214/yo.jpg?v=20190716225044000&format=medium&width=300&height=169&mode=crop",
                  section: "Informes Especiales",
                  date: "2018-12-07 15:10:30",
                  assets: {
                    videos: [{ url: "onevideo", duration: "13:45" }]
                  },
                  url: "/informes-especiales/yo-soy-muy-malo-otra-confesion-con-mauro-szeta/"
                },
                {
                  id: 11,
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
          }
        }
      },
      {
        type: "Player",
        container: {
          element: "section",
          classNames: "container"
        },
        props: {
          playlist: [
            {
              id: 1,
              title: "Item 1 - Playlist",
              sources: [
                {
                  src: "https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8",

                  type: "application/x-mpegURL"
                }
              ]
            },
            {
              id: 2,
              title: "Item 2 - Playlist",
              sources: [
                {
                  src:
                    "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
                  type: "application/x-mpegURL"
                }
              ]
            }
          ]
        }
      }
    ]
  });
};
