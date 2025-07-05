var APP_DATA = {
  "scenes": [
    {
      "id": "0-gerbang-pantai-rambang",
      "name": "gerbang pantai rambang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.2164146412511787,
        "pitch": 0.6147060488059548,
        "fov": 1.2571348557202902
      },
      "linkHotspots": [
        {
          "yaw": 0.07835055133754665,
          "pitch": 0.2017258486500868,
          "rotation": 6.283185307179586,
          "target": "1-pertigaan-belajar-nyetir"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.23087998072109528,
          "pitch": 1.1129582950467736,
          "title": "Gerbang masuk&nbsp;Titik awal perjalanan menuju Pantai Rambang",
          "text": "Gerbang utama Pantai Rambang, tanpa tiket masuk. Pengunjung hanya membayar tarif parkir kendaraan."
        },
        {
          "yaw": 0.3560333349716629,
          "pitch": 0.31244694046156596,
          "title": "Warung",
          "text": "Menyediakan aneka makanan ringan seperti snack, minuman botol, kopi sachet, dan jajanan instan."
        }
      ]
    },
    {
      "id": "1-pertigaan-belajar-nyetir",
      "name": "pertigaan belajar nyetir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2537517119773884,
          "pitch": 0.7407697936856472,
          "rotation": 0,
          "target": "2-area-belajar-nyetir"
        },
        {
          "yaw": 0.14138421678325308,
          "pitch": 0.6768681170906863,
          "rotation": 0,
          "target": "3-area-pantai-rambang"
        },
        {
          "yaw": -2.866226338943232,
          "pitch": 0.5838272567566349,
          "rotation": 0,
          "target": "0-gerbang-pantai-rambang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.86163389949761,
          "pitch": 0.33050018749187693,
          "title": "Loket belajar nyetir",
          "text": "<ul data-start=\"214\" data-end=\"359\"><li data-start=\"250\" data-end=\"359\"><p data-start=\"252\" data-end=\"359\">Tempat pembayaran retribusi bagi pengunjung yang ingin latihan motor atau mobil di area ini.</p>\n</li>\n</ul>"
        },
        {
          "yaw": 1.6034373929292771,
          "pitch": 0.04571657880396529,
          "title": "Area belajar nyetir",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "2-area-belajar-nyetir",
      "name": "area belajar nyetir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0471500761027954,
          "pitch": 0.18580577276663846,
          "rotation": 0,
          "target": "1-pertigaan-belajar-nyetir"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.04085512372210687,
          "pitch": 0.5273697978792633,
          "title": "Tempat latihan motor &amp; mobil",
          "text": "<ul data-start=\"934\" data-end=\"1080\"><li data-start=\"971\" data-end=\"1080\"><p data-start=\"973\" data-end=\"1080\">Area terbuka yang juga digunakan untuk latihan mengemudi motor dan mobil oleh pengunjung atau warga sekitar.</p>\n</li>\n</ul>"
        }
      ]
    },
    {
      "id": "3-area-pantai-rambang",
      "name": "area pantai rambang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09491460573812915,
          "pitch": 0.4667492999748948,
          "rotation": 0,
          "target": "4-pertigaan-belokan"
        },
        {
          "yaw": 2.941208963315109,
          "pitch": 0.2874702031386871,
          "rotation": 0,
          "target": "1-pertigaan-belajar-nyetir"
        },
        {
          "yaw": 1.7135415998268062,
          "pitch": 0.3253963542432672,
          "rotation": 0,
          "target": "2-area-belajar-nyetir"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7381672291548877,
          "pitch": -0.0122813633267711,
          "title": "Area belajar nyetir",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-pertigaan-belokan",
      "name": "pertigaan belokan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2347527333431696,
          "pitch": 0.3139058796205525,
          "rotation": 0.7853981633974483,
          "target": "3-area-pantai-rambang"
        },
        {
          "yaw": 0.046388947424638616,
          "pitch": 0.3783652312578063,
          "rotation": 0,
          "target": "5-jalur-percabangan"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8422594246137196,
          "pitch": 1.1563261186652802,
          "title": "Belok kiri",
          "text": "Anda harus belok kiri untuk ke pantai rambang"
        }
      ]
    },
    {
      "id": "5-jalur-percabangan",
      "name": "jalur percabangan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6822875445402374,
          "pitch": 0.29510056036669674,
          "rotation": 0.7853981633974483,
          "target": "6-area-pantai-rambang"
        },
        {
          "yaw": 2.594844081398766,
          "pitch": 0.07862101033476954,
          "rotation": 0,
          "target": "4-pertigaan-belokan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-area-pantai-rambang",
      "name": "area pantai rambang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22349223154635212,
          "pitch": 0.47246141303402567,
          "rotation": 0,
          "target": "7-pertigaan-belokan"
        },
        {
          "yaw": 3.0139039749825756,
          "pitch": 0.28505698332608276,
          "rotation": 0,
          "target": "5-jalur-percabangan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pertigaan-belokan",
      "name": "pertigaan belokan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3945763272598306,
          "pitch": 0.7153291294909252,
          "rotation": 5.497787143782138,
          "target": "8-area-pantai-rambang"
        },
        {
          "yaw": -2.1619899365495865,
          "pitch": 0.2667366403129918,
          "rotation": 6.283185307179586,
          "target": "6-area-pantai-rambang"
        },
        {
          "yaw": 0.0555419152973311,
          "pitch": 0.3185945304032707,
          "rotation": 0.7853981633974483,
          "target": "8-area-pantai-rambang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1014268211243117,
          "pitch": 1.0195546573795937,
          "title": "pertigaan belokan",
          "text": "Anda harus belok kiri untuk ke pantai rambang"
        }
      ]
    },
    {
      "id": "8-area-pantai-rambang",
      "name": "area pantai rambang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04476196817353184,
          "pitch": 0.5076431294250554,
          "rotation": 0,
          "target": "9-pertigaan-antara-area-parkir-dengan-pantai-rambang"
        },
        {
          "yaw": -2.7332737175971022,
          "pitch": 0.15268470385860233,
          "rotation": 0.7853981633974483,
          "target": "7-pertigaan-belokan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pertigaan-antara-area-parkir-dengan-pantai-rambang",
      "name": "pertigaan antara area parkir dengan pantai rambang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.029656175577219557,
          "pitch": 0.5848111883985148,
          "rotation": 0.7853981633974483,
          "target": "10-area-parkir"
        },
        {
          "yaw": -0.16785932077586452,
          "pitch": 0.5672565644662235,
          "rotation": 5.497787143782138,
          "target": "11-spot-area"
        },
        {
          "yaw": 2.5402444963296773,
          "pitch": 0.41662300548509634,
          "rotation": 0,
          "target": "8-area-pantai-rambang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.45810935477974546,
          "pitch": 0.26510510404372845,
          "title": "Area parkir",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "10-area-parkir",
      "name": "area parkir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5649896279791768,
          "pitch": 0.11388576223659364,
          "rotation": 0,
          "target": "11-spot-area"
        },
        {
          "yaw": 3.1390478596129956,
          "pitch": 0.1491959319470304,
          "rotation": 5.497787143782138,
          "target": "9-pertigaan-antara-area-parkir-dengan-pantai-rambang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.07545582762939596,
          "pitch": 0.41161645363843746,
          "title": "Area parkir",
          "text": "Area parkir terpisah untuk kendaraan roda dua dan empat, dengan tarif motor Rp2.000 dan mobil Rp5.000."
        },
        {
          "yaw": 1.449337195591676,
          "pitch": 0.601519933591911,
          "title": "Parkir motor",
          "text": "<br>"
        },
        {
          "yaw": -1.0519415587473926,
          "pitch": 0.33331222979640884,
          "title": "Area parkir mobil",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "11-spot-area",
      "name": "spot area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8684807925336813,
          "pitch": 0.08739428462514631,
          "rotation": 0,
          "target": "9-pertigaan-antara-area-parkir-dengan-pantai-rambang"
        },
        {
          "yaw": -2.6312049201982166,
          "pitch": 0.18106118201723476,
          "rotation": 0,
          "target": "12-area-camp"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.33575495594928384,
          "pitch": 0.14850613470785667,
          "title": "Area parkir mobil",
          "text": "<br>"
        },
        {
          "yaw": -1.1509453393031563,
          "pitch": 0.08879204359810622,
          "title": "<font color=\"#eef0ff\" face=\"Google Sans, Arial, sans-serif\"><span style=\"font-size: 18px; background-color: rgb(31, 31, 31);\">Kamar mandi</span></font>",
          "text": "Tersedia toilet atau tempat bilas umum untuk pengunjung, terletak tidak jauh dari area parkir dan warung."
        },
        {
          "yaw": -0.6476393753607468,
          "pitch": 0.08708996083350584,
          "title": "Mushalla",
          "text": "Fasilitas ibadah untuk memudahkan pengunjung menjalankan salat di area pantai."
        },
        {
          "yaw": -1.847052457541185,
          "pitch": 0.08000334291401145,
          "title": "Warung",
          "text": "Menyediakan aneka makanan ringan seperti snack, minuman, es sachet, kopi sachet, dan jajanan instan lainnya."
        }
      ]
    },
    {
      "id": "12-area-camp",
      "name": "area camp",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2210262631335356,
          "pitch": 0.4117686511258256,
          "rotation": 0,
          "target": "13-area-pantai"
        },
        {
          "yaw": -1.7056419366878224,
          "pitch": 0.18468530283414353,
          "rotation": 0,
          "target": "11-spot-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.701247446311724,
          "pitch": 0.7151565249110892,
          "title": "Area camp dan kegiatan",
          "text": "Lokasi terbuka yang bisa digunakan untuk camping, acara komunitas, atau rekreasi santai."
        },
        {
          "yaw": -0.7675011859933889,
          "pitch": 0.1367781434487796,
          "title": "Wisata menange rambang",
          "text": "Wisata menange rambang atau disebut wisata muara sungai yaitu<br>Titik pertemuan air sungai dan laut, sering dijadikan spot foto, perahu, dan tempat santai."
        },
        {
          "yaw": -2.4672011904206137,
          "pitch": 0.023602499720736247,
          "title": "Warung",
          "text": "<br>"
        },
        {
          "yaw": 2.219653224839149,
          "pitch": 0.06055554522083462,
          "title": "Pantai rambang",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "13-area-pantai",
      "name": "area pantai",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1397893413367557,
          "pitch": 0.14625900586112728,
          "rotation": 0,
          "target": "12-area-camp"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.42304444342715364,
          "pitch": 0.3939473949811294,
          "title": "Pantai Rambang",
          "text": "<br>"
        },
        {
          "yaw": 2.186016377669361,
          "pitch": 0.32062407103365054,
          "title": "Area camp pantai rambang",
          "text": "<br>"
        },
        {
          "yaw": -2.4674675299161937,
          "pitch": 0.037850273342737495,
          "title": "wisata menange rambang",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "vr-pantai-rambang",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
