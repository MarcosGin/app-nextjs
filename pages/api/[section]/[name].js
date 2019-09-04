export default (req, res) => {
  const sections = {
    politica: {
      title: "Política",
      posts: [
        {
          title: "Hezbollah ya es considerado grupo terrorista por Argentina",
          thumbnail:
            "https://telefe-static2.akamaized.net/media/181241/hezbollah.jpg?v=20190717080859000&format=main&width=640&height=360&mode=crop",
          section: "Política",
          date: "2019-07-17 09:41:26",
          url: "/politica/hezbollah-es-considerado-grupo-terrorista-por-argentina/"
        },
        {
          title:
            "Decretaron día de duelo nacional para mañana por el 25° aniversario del atentado a la AMIA",
          thumbnail:
            "https://telefe-static2.akamaized.net/media/181239/duelo.jpg?v=20190717080112000&format=medium&width=300&height=169&mode=crop",
          section: "Política",
          date: "2019-07-17 09:41:26",
          url:
            "/politica/decretaron-dia-de-duelo-nacional-para-manana-por-el-25-aniversario-del-atentado-a-la-amia/"
        },
        {
          title: "Las caras de Katopodis durante el discurso de Vidal en San Martín",
          thumbnail:
            "https://telefe-static2.akamaized.net/media/181195/katopodis.jpg?v=20190716204505000&format=medium&width=300&height=169&mode=crop",
          section: "Política",
          date: "2019-07-17 09:41:26",
          assets: {
            videos: [{ url: "onevideo", duration: "00:13" }]
          },
          url: "/politica/las-caras-de-katopodis-durante-el-discurso-de-vidal-en-san-martin/"
        },
        {
          title: "Patricia Bullrich: 'El Servicio Cívico no es una vuelta a la colimba'",
          thumbnail:
            "https://telefe-static2.akamaized.net/media/181154/bullrich.png?v=20190716171848000&format=medium&width=300&height=169&mode=crop",
          section: "Política",
          date: "2019-07-17 09:41:26",
          assets: {
            videos: [{ url: "twovideo", duration: "06:37" }]
          },
          url: "/politica/patricia-bullrich-el-servicio-civico-no-es-una-vuelta-a-la-colimba/"
        },
        {
          title:
            "Presentan un amparo contra el Senado de la Nación por no informar sobre sus asesores",
          thumbnail:
            "https://telefe-static2.akamaized.net/media/181035/senado.jpg?v=20190716121158000&format=medium&width=300&height=169&mode=crop",
          section: "Política",
          date: "2019-07-17 09:41:26",
          url:
            "/politica/presentan-un-amparo-contra-el-senado-de-la-nacion-por-no-informar-sobre-sus-asesores/"
        }
      ]
    }
  };
  const sectionSelected = sections[req.query.name];
  if (sectionSelected) {
    res.json({
      type: "Page",
      props: {
        head: {
          title: "Section Page - Load Dynamic"
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
          type: "SectionPosts",
          props: {
            ...sectionSelected
          },
          children: []
        }
      ]
    });
  } else {
    res.json({ title: "Not found section", posts: [] });
  }
};
