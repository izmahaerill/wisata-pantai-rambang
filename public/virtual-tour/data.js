var APP_DATA = {
  "scenes": [
    {
      "id": "0-gerbang-pantai-rambang",
      "name": "Gerbang Pantai Rambang",
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
          "yaw": 0.08379998825023094,
          "pitch": 0.1929120469762502,
          "rotation": 0,
          "target": "1-pertigaan-belajar-berkendara"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.09819389887914554,
          "pitch": 1.0748489611596863,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">Gerbang masuk&nbsp;Titik awal perjalanan menuju Pantai Rambang</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Gerbang utama Pantai Rambang, tanpa tiket masuk. Pengunjung hanya membayar tarif parkir kendaraan.</span>"
        },
        {
          "yaw": 0.4269114100058147,
          "pitch": 0.2863247963973876,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">Warung</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Menyediakan aneka makanan ringan seperti snack, minuman botol, kopi sachet, dan jajanan instan.</span>"
        }
      ]
    },
    {
      "id": "1-pertigaan-belajar-berkendara",
      "name": "Pertigaan Belajar Berkendara",
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
          "yaw": 0.22221354191879783,
          "pitch": 0.4713213946770658,
          "rotation": 0,
          "target": "3-area-pantai-rambang-1"
        },
        {
          "yaw": 2.1987964244536427,
          "pitch": 0.6527757768187854,
          "rotation": 0,
          "target": "2-area-belajar-berkendara"
        },
        {
          "yaw": -2.8852032014977897,
          "pitch": 0.5465578592520561,
          "rotation": 0,
          "target": "0-gerbang-pantai-rambang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6092964424326954,
          "pitch": 0.13756318067565232,
          "title": "Area belajar berkendara",
          "text": "<br>"
        },
        {
          "yaw": 2.8786765768595544,
          "pitch": 0.46048257222747857,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">Loket belajar nyetir</span>",
          "text": "Tempat pembayaran retribusi bagi pengunjung yang ingin belajar berkendara"
        }
      ]
    },
    {
      "id": "2-area-belajar-berkendara",
      "name": "Area Belajar Berkendara",
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
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 0.010695500378821166,
          "pitch": 0.558458893106204,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">Tempat latihan motor &amp; mobil</span>",
          "text": "Area terbuka yang digunakan untuk belajar berkendara motor dan mobil bagi pengunjung atau warga sekitar"
        }
      ]
    },
    {
      "id": "3-area-pantai-rambang-1",
      "name": "Area Pantai Rambang 1",
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
          "yaw": -0.02996467507415801,
          "pitch": 0.3475472179851433,
          "rotation": 0,
          "target": "4-pertigaan-belokan-1"
        },
        {
          "yaw": 1.648154232162498,
          "pitch": 0.2819210350222967,
          "rotation": 0,
          "target": "2-area-belajar-berkendara"
        },
        {
          "yaw": 2.4736499298105414,
          "pitch": 0.18006530862435,
          "rotation": 0,
          "target": "2-area-belajar-berkendara"
        },
        {
          "yaw": 3.0011420812476715,
          "pitch": 0.1181788813259157,
          "rotation": 0,
          "target": "1-pertigaan-belajar-berkendara"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pertigaan-belokan-1",
      "name": "Pertigaan Belokan 1",
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
          "yaw": -2.191867165026668,
          "pitch": 0.32261205192902587,
          "rotation": 0.7853981633974483,
          "target": "3-area-pantai-rambang-1"
        },
        {
          "yaw": 0.05433586693380121,
          "pitch": 0.41039171157477483,
          "rotation": 0,
          "target": "5-jalur-percabangan"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9581015468864873,
          "pitch": 0.6278539210917344,
          "title": "Belok kiri",
          "text": "Anda harus belok kiri untuk ke pantai rambang"
        }
      ]
    },
    {
      "id": "5-jalur-percabangan",
      "name": "Jalur Percabangan",
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
          "yaw": 0.053044052490450966,
          "pitch": 0.316413671984046,
          "rotation": 0,
          "target": "6-area-pantai-rambang-2"
        },
        {
          "yaw": -0.8165244953081405,
          "pitch": 0.32751973132177703,
          "rotation": 0.7853981633974483,
          "target": "6-area-pantai-rambang-2"
        },
        {
          "yaw": 0.41890056754633775,
          "pitch": 0.1657429635618044,
          "rotation": 5.497787143782138,
          "target": "6-area-pantai-rambang-2"
        },
        {
          "yaw": 2.607258973364937,
          "pitch": 0.1194578811907121,
          "rotation": 0.7853981633974483,
          "target": "4-pertigaan-belokan-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-area-pantai-rambang-2",
      "name": "Area Pantai Rambang 2",
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
          "yaw": 3.03500872443154,
          "pitch": 0.2245532906937875,
          "rotation": 0,
          "target": "5-jalur-percabangan"
        },
        {
          "yaw": 0.2696114835991441,
          "pitch": 0.4003456549269586,
          "rotation": 0,
          "target": "7-pertigaan-belokan-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pertigaan-belokan-2",
      "name": "Pertigaan Belokan 2",
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
          "yaw": 0.15901170013140664,
          "pitch": 0.1939989845156802,
          "rotation": 5.497787143782138,
          "target": "8-area-pantai-rambang-3"
        },
        {
          "yaw": 1.8221741694333833,
          "pitch": 0.405076162676826,
          "rotation": 10.995574287564278,
          "target": "8-area-pantai-rambang-3"
        },
        {
          "yaw": -2.139363839089569,
          "pitch": 0.2373901671146772,
          "rotation": 0,
          "target": "6-area-pantai-rambang-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7936375400538012,
          "pitch": 0.9497396184249887,
          "title": "Pertigaan belokan",
          "text": "Anda harus belok kiri untuk ke pantai rambang"
        }
      ]
    },
    {
      "id": "8-area-pantai-rambang-3",
      "name": "Area Pantai Rambang 3",
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
          "yaw": 0.02149361869867583,
          "pitch": 0.31814641826159473,
          "rotation": 0,
          "target": "9-pertigaan-area-parkir"
        },
        {
          "yaw": -2.7046407798049614,
          "pitch": 0.11908502309640312,
          "rotation": 0.7853981633974483,
          "target": "7-pertigaan-belokan-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pertigaan-area-parkir",
      "name": "Pertigaan Area Parkir",
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
          "yaw": 0.11068416953061089,
          "pitch": 0.47011116381855267,
          "rotation": 0.7853981633974483,
          "target": "10-area-parkir"
        },
        {
          "yaw": -0.14656063003551978,
          "pitch": 0.4319953735189639,
          "rotation": 5.497787143782138,
          "target": "11-spot-area"
        },
        {
          "yaw": 2.5590901688568506,
          "pitch": 0.28401865808239357,
          "rotation": 0,
          "target": "8-area-pantai-rambang-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4952064849794695,
          "pitch": 0.2300469988471434,
          "title": "Area Parkir",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "10-area-parkir",
      "name": "Area Parkir",
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
          "yaw": -1.487391720059863,
          "pitch": 0.2504589238549997,
          "rotation": 0,
          "target": "11-spot-area"
        },
        {
          "yaw": 3.0728329956552747,
          "pitch": 0.10065277785817983,
          "rotation": 5.497787143782138,
          "target": "9-pertigaan-area-parkir"
        },
        {
          "yaw": -0.4796206148583444,
          "pitch": 0.17422400455413367,
          "rotation": 5.497787143782138,
          "target": "12-area-kamar-mandi--bilas"
        },
        {
          "yaw": -0.2613768256024258,
          "pitch": 0.15839680727892969,
          "rotation": 0.7853981633974483,
          "target": "13-area-mushalla"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.06592943319071409,
          "pitch": 0.63432783347195,
          "title": "Area Parkir",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Area parkir terpisah untuk kendaraan roda dua dan empat, dengan tarif motor Rp2.000 dan mobil Rp5.000.</span>"
        },
        {
          "yaw": 1.465933557212951,
          "pitch": 0.5312111307047225,
          "title": "Area Parkir Motor",
          "text": "<br>"
        },
        {
          "yaw": -1.370371112168538,
          "pitch": 0.6505829798347449,
          "title": "Area Parkir Mobil",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "11-spot-area",
      "name": "Spot Area",
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
          "yaw": 0.8913306000659382,
          "pitch": 0.08139661438824142,
          "rotation": 0,
          "target": "9-pertigaan-area-parkir"
        },
        {
          "yaw": -2.611115234329313,
          "pitch": 0.1142717777223563,
          "rotation": 0,
          "target": "15-area-camp"
        },
        {
          "yaw": -0.4820348207401679,
          "pitch": 0.1907204838079153,
          "rotation": 5.497787143782138,
          "target": "12-area-kamar-mandi--bilas"
        },
        {
          "yaw": -0.2753747552148038,
          "pitch": 0.1522645724203695,
          "rotation": 5.497787143782138,
          "target": "13-area-mushalla"
        },
        {
          "yaw": -2.1235798844780067,
          "pitch": 0.12783015438358447,
          "rotation": 7.0685834705770345,
          "target": "14-area-warung"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.31249095249630976,
          "pitch": 0.138832838947053,
          "title": "Area Parkir",
          "text": "<br>"
        },
        {
          "yaw": -0.3774464971204825,
          "pitch": 0.07811746170794365,
          "title": "Mushalla",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Fasilitas ibadah untuk memudahkan pengunjung menjalankan salat di area pantai.</span>"
        },
        {
          "yaw": -0.6513454926083391,
          "pitch": 0.12530112862076237,
          "title": "Kamar Mandi &amp; Bilas",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Tersedia toilet atau tempat bilas umum untuk pengunjung, terletak tidak jauh dari area parkir dan warung.</span>"
        },
        {
          "yaw": -1.7864654151383697,
          "pitch": 0.07231855972881718,
          "title": "Area Warung",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Menyediakan aneka makanan ringan seperti snack, minuman, es sachet, kopi sachet, dan jajanan instan lainnya.</span>"
        }
      ]
    },
    {
      "id": "12-area-kamar-mandi--bilas",
      "name": "Area Kamar Mandi & Bilas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8257995950760808,
          "pitch": 0.06400050842859706,
          "rotation": 0,
          "target": "10-area-parkir"
        },
        {
          "yaw": -1.1191733246638513,
          "pitch": 0.08627367233055061,
          "rotation": 0.7853981633974483,
          "target": "11-spot-area"
        },
        {
          "yaw": 1.6927123928644665,
          "pitch": 0.2507516962701981,
          "rotation": 0.7853981633974483,
          "target": "13-area-mushalla"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.08199172937520771,
          "pitch": 0.1638794635327443,
          "title": "Area Kamar Mandi &amp; Bilas",
          "text": "<br>"
        },
        {
          "yaw": 2.3698976016486437,
          "pitch": 0.1543900357030381,
          "title": "Mushalla",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "13-area-mushalla",
      "name": "Area Mushalla",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5788150213391656,
          "pitch": 0.11015789305008816,
          "rotation": 0,
          "target": "14-area-warung"
        },
        {
          "yaw": 0.7743988397678407,
          "pitch": 0.3402541584913905,
          "rotation": 5.497787143782138,
          "target": "10-area-parkir"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10945432424987267,
          "pitch": 0.30545768911892957,
          "title": "Mushalla",
          "text": "<br>"
        },
        {
          "yaw": 0.9546079276774009,
          "pitch": 0.0726499584182001,
          "title": "Kamar Mandi &amp; Bilas",
          "text": "Text"
        }
      ]
    },
    {
      "id": "14-area-warung",
      "name": "Area Warung",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06292730483287556,
          "pitch": 0.049082370646527096,
          "rotation": 0,
          "target": "12-area-kamar-mandi--bilas"
        },
        {
          "yaw": -2.494603636773302,
          "pitch": 0.08435236650180045,
          "rotation": 0.7853981633974483,
          "target": "16-area-pantai"
        },
        {
          "yaw": 2.2848098397180063,
          "pitch": 0.1502193804010279,
          "rotation": 0,
          "target": "15-area-camp"
        },
        {
          "yaw": 0.4361985565294759,
          "pitch": 0.0802496683296745,
          "rotation": 1.5707963267948966,
          "target": "11-spot-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1798767449736296,
          "pitch": 0.12213155541525289,
          "title": "Area Warung",
          "text": "<br>"
        },
        {
          "yaw": -0.6032847251087023,
          "pitch": 0.11601948530440254,
          "title": "Gazebo",
          "text": "<br>"
        },
        {
          "yaw": 2.4510392610486935,
          "pitch": -0.13675685180894703,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "15-area-camp",
      "name": "Area Camp",
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
          "yaw": -2.031710594881458,
          "pitch": 0.16123604216408438,
          "rotation": 0,
          "target": "11-spot-area"
        },
        {
          "yaw": -2.5491324435085083,
          "pitch": 0.14101463348978527,
          "rotation": 5.497787143782138,
          "target": "14-area-warung"
        },
        {
          "yaw": 2.1186923970597373,
          "pitch": 0.3493141824562187,
          "rotation": 0,
          "target": "16-area-pantai"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6706985133664727,
          "pitch": 0.3385404799363396,
          "title": "Wisata Menange Rambang",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Wisata menange rambang atau disebut wisata muara sungai yaitu</span><span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Titik pertemuan air sungai dan laut, sering dijadikan spot foto, perahu, dan tempat santai.</span>"
        },
        {
          "yaw": -2.7950197786263153,
          "pitch": 0.8047860436751808,
          "title": "Area Camp &amp; Kegiatan",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Lokasi terbuka yang bisa digunakan untuk camping, acara komunitas, atau rekreasi santai.</span>"
        },
        {
          "yaw": 2.248594029868584,
          "pitch": 0.07327410355206254,
          "title": "Area Pantai Rambang",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "16-area-pantai",
      "name": "Area Pantai",
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
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "vr-wisata pantai rambang",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
