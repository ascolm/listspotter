import { Artist, TrackItem, ArtistData, PlaylistData } from 'interfaces/spotifyObjects'
import { GenreDb } from 'interfaces/genreObjects'
import { generateGenres } from 'components/Main/helpers'

const artistData = {
  "artists" : {
    "items" : [ 
      {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/1"
      },
      "followers" : {
        "href" : null,
        "total" : 104032
      },
      "genres" : [ "deep euro house", "tropical house" ],
      "href" : "https://api.spotify.com/v1/artists/1",
      "id" : "1",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/7d60ad2505e9a6922973d98fcc958a5742d1e3fc",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/d369947205e298b4928880de4609251c74a1bd37",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/bf0e990893ac10537df9e7006b6fa530fcfd9152",
        "width" : 160
      } ],
      "name" : "Wankelmut",
      "popularity" : 62,
      "type" : "artist",
      "uri" : "spotify:artist:1"
    }, 
    {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2"
      },
      "followers" : {
        "href" : null,
        "total" : 69677
      },
      "genres" : [ "bosnian indie", "yugoslav rock" ],
      "href" : "https://api.spotify.com/v1/artists/2",
      "id" : "2",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/4d4d3364e73ae54728222ae56bbbe0d12b0e5b5c",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/26063266e6057cf23d349febddd436bf24a3c2d6",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/009eed443cdac4a909face78e92a45a9c74db7d4",
        "width" : 160
      } ],
      "name" : "Dubioza kolektiv",
      "popularity" : 48,
      "type" : "artist",
      "uri" : "spotify:artist:2"
    }, 
    {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3"
      },
      "followers" : {
        "href" : null,
        "total" : 75811
      },
      "genres" : [ "folk metal", "italian folk metal", "italian metal", "italian power metal", "melodic metal", "neo classical metal", "power metal", "tolkien metal" ],
      "href" : "https://api.spotify.com/v1/artists/3",
      "id" : "3",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/fea03b617083289dcb5d699ac4dd06795f5fa1b2",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/5efd756ab2de73c9203efd4712e96c1f60c77a4b",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/9e5fd667763f8c399e11e2898913e6217be928b6",
        "width" : 160
      } ],
      "name" : "Elvenking",
      "popularity" : 47,
      "type" : "artist",
      "uri" : "spotify:artist:3"
    }],
    "next" : "https://api.spotify.com/v1/me/following?type=artist&after=0bZCak2tcRMY1dzEIuwF42&limit=50",
    "total" : 674,
    "cursors" : {
      "after" : "0bZCak2tcRMY1dzEIuwF42"
    },
    "limit" : 50,
    "href" : "https://api.spotify.com/v1/me/following?type=artist&limit=50"
  }
}

const trackData = {
  "href" : "https://api.spotify.com/v1/me/tracks?offset=0&limit=50",
  "items" : [ 
  {
    "added_at" : "2020-12-31T17:43:13Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4LNC9g5ie0tSgZed2CHQ5A"
          },
          "href" : "https://api.spotify.com/v1/artists/4LNC9g5ie0tSgZed2CHQ5A",
          "id" : "4LNC9g5ie0tSgZed2CHQ5A",
          "name" : "Waldemar Matuška",
          "type" : "artist",
          "uri" : "spotify:artist:4LNC9g5ie0tSgZed2CHQ5A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0T0LjviltLGbSxEplfmc4r"
        },
        "href" : "https://api.spotify.com/v1/albums/0T0LjviltLGbSxEplfmc4r",
        "id" : "0T0LjviltLGbSxEplfmc4r",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273d65f92695b407bb9c9a19694",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02d65f92695b407bb9c9a19694",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851d65f92695b407bb9c9a19694",
          "width" : 64
        } ],
        "name" : "Waldemar Matuška",
        "release_date" : "1968",
        "release_date_precision" : "year",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:0T0LjviltLGbSxEplfmc4r"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4LNC9g5ie0tSgZed2CHQ5A"
        },
        "href" : "https://api.spotify.com/v1/artists/4LNC9g5ie0tSgZed2CHQ5A",
        "id" : "4LNC9g5ie0tSgZed2CHQ5A",
        "name" : "Waldemar Matuška",
        "type" : "artist",
        "uri" : "spotify:artist:4LNC9g5ie0tSgZed2CHQ5A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 220586,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "CZA166800122"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3SY5c1sMaxlqADgOKSONQR"
      },
      "href" : "https://api.spotify.com/v1/tracks/3SY5c1sMaxlqADgOKSONQR",
      "id" : "3SY5c1sMaxlqADgOKSONQR",
      "is_local" : false,
      "name" : "Slavíci Z Madridu",
      "popularity" : 41,
      "preview_url" : "https://p.scdn.co/mp3-preview/e530439dc0d102b91366bd62b84bb90081a0d458?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:3SY5c1sMaxlqADgOKSONQR"
    }
  }, 
  {
    "added_at" : "2020-12-31T17:02:26Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz"
          },
          "href" : "https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
          "id" : "7mnBLXK823vNxN3UWB7Gfz",
          "name" : "The Black Keys",
          "type" : "artist",
          "uri" : "spotify:artist:7mnBLXK823vNxN3UWB7Gfz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "ML", "MN", "MO", "MR", "MT", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6TvxpBzf9c8H1fsrAaQ8t3"
        },
        "href" : "https://api.spotify.com/v1/albums/6TvxpBzf9c8H1fsrAaQ8t3",
        "id" : "6TvxpBzf9c8H1fsrAaQ8t3",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2731af8fb0d8859055d35d2290f",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e021af8fb0d8859055d35d2290f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048511af8fb0d8859055d35d2290f",
          "width" : 64
        } ],
        "name" : "Turn Blue",
        "release_date" : "2014-05-09",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:6TvxpBzf9c8H1fsrAaQ8t3"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz"
        },
        "href" : "https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
        "id" : "7mnBLXK823vNxN3UWB7Gfz",
        "name" : "The Black Keys",
        "type" : "artist",
        "uri" : "spotify:artist:7mnBLXK823vNxN3UWB7Gfz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "ML", "MN", "MO", "MR", "MT", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 268120,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USNO11400178"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/39e1gl7VaxuCev5ga7bvNq"
      },
      "href" : "https://api.spotify.com/v1/tracks/39e1gl7VaxuCev5ga7bvNq",
      "id" : "39e1gl7VaxuCev5ga7bvNq",
      "is_local" : false,
      "name" : "In Time",
      "popularity" : 46,
      "preview_url" : "https://p.scdn.co/mp3-preview/1c48a19cd1aeb79e5c16d1d25357c01fe1228c53?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:39e1gl7VaxuCev5ga7bvNq"
    }
  },
  {
    "added_at" : "2020-12-31T17:02:26Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz"
          },
          "href" : "https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
          "id" : "7mnBLXK823vNxN3UWB7Gfz",
          "name" : "The Black Keys",
          "type" : "artist",
          "uri" : "spotify:artist:7mnBLXK823vNxN3UWB7Gfz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "ML", "MN", "MO", "MR", "MT", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6TvxpBzf9c8H1fsrAaQ8t3"
        },
        "href" : "https://api.spotify.com/v1/albums/6TvxpBzf9c8H1fsrAaQ8t3",
        "id" : "6TvxpBzf9c8H1fsrA34aQ8t3",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2731af8fb0d8859055d35d2290f",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e021af8fb0d8859055d35d2290f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048511af8fb0d8859055d35d2290f",
          "width" : 64
        } ],
        "name" : "Bamboo",
        "release_date" : "2014-05-09",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:6TvxpBzf9c8H1fsrAaQ8t3"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz"
        },
        "href" : "https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
        "id" : "7mnBLXK823vNxN3UWB7Gfz",
        "name" : "The Black Keys",
        "type" : "artist",
        "uri" : "spotify:artist:7mnBLXK823vNxN3UWB7Gfz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "ML", "MN", "MO", "MR", "MT", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 268120,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USNO11400178"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/39e1gl7VaxuCev5ga7bvNq"
      },
      "href" : "https://api.spotify.com/v1/tracks/39e1gl7VaxuCev5ga7bvNq",
      "id" : "39e21gl7VaxuCev5ga7bvNq",
      "is_local" : false,
      "name" : "Babbao",
      "popularity" : 46,
      "preview_url" : "https://p.scdn.co/mp3-preview/1c48a19cd1aeb79e5c16d1d25357c01fe1228c53?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:39e1gl7VaxuCev5ga7bvNq"
    }
  },
  {
    "added_at" : "2021-03-04T21:45:53Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
          },
          "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
          "id" : "2",
          "name" : "Dubioza Kolektiv",
          "type" : "artist",
          "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0CAXEcXpruvyGKSTjyLDNu"
        },
        "href" : "https://api.spotify.com/v1/albums/0CAXEcXpruvyGKSTjyLDNu",
        "id" : "0CAXEcXpruvyGKSTjyLDNu",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739db63254bf5a8be73bbaed21",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029db63254bf5a8be73bbaed21",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519db63254bf5a8be73bbaed21",
          "width" : 64
        } ],
        "name" : "Black Focus",
        "release_date" : "2016-11-04",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:0CAXEcXpruvyGKSTjyLDNu"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
        },
        "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
        "id" : "2",
        "name" : "Dubioza Kolektiv",
        "type" : "artist",
        "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 508773,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBMEF1600916"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2sEmZge5ZfzrFrDGFJbkyP"
      },
      "href" : "https://api.spotify.com/v1/tracks/2sEmZge5ZfzrFrDGFJbkyP",
      "id" : "2sEmZge5ZfzrFrDGFJbkyP",
      "is_local" : false,
      "name" : "Strings of Light",
      "popularity" : 42,
      "preview_url" : "https://p.scdn.co/mp3-preview/2b19dd719e857867cf4e228697a230fb5036ad71?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:2sEmZge5ZfzrFrDGFJbkyP"
    }
  },
  {
    "added_at" : "2021-02-25T12:33:03Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6RmijobcphddxSNtsBHjF0"
          },
          "href" : "https://api.spotify.com/v1/artists/6RmijobcphddxSNtsBHjF0",
          "id" : "1",
          "name" : "Wankelmut",
          "type" : "artist",
          "uri" : "spotify:artist:6RmijobcphddxSNtsBHjF0"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0m5XJwKGYyUjd3VMfcINCQ"
          },
          "href" : "https://api.spotify.com/v1/artists/0m5XJwKGYyUjd3VMfcINCQ",
          "id" : "1",
          "name" : "Wankelmut",
          "type" : "artist",
          "uri" : "spotify:artist:0m5XJwKGYyUjd3VMfcINCQ"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6CzjV9BeZvSKqxdhzfswdX"
        },
        "href" : "https://api.spotify.com/v1/albums/6CzjV9BeZvSKqxdhzfswdX",
        "id" : "6CzjV9BeZvSKqxdhzfswdX",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273d2ad1f61daaf693282c0c222",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02d2ad1f61daaf693282c0c222",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851d2ad1f61daaf693282c0c222",
          "width" : 64
        } ],
        "name" : "Flux & Contemplation - Portrait of an Artist in Isolation",
        "release_date" : "2020-07-03",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6CzjV9BeZvSKqxdhzfswdX"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0m5XJwKGYyUjd3VMfcINCQ"
        },
        "href" : "https://api.spotify.com/v1/artists/0m5XJwKGYyUjd3VMfcINCQ",
        "id" : "1",
        "name" : "Wankelmut",
        "type" : "artist",
        "uri" : "spotify:artist:0m5XJwKGYyUjd3VMfcINCQ"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 641093,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBBMP1200635"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0UBLvMN7Y1pPr22zYAjhRd"
      },
      "href" : "https://api.spotify.com/v1/tracks/0UBLvMN7Y1pPr22zYAjhRd",
      "id" : "0UBLvMN7Y1pPr22zYAjhRd",
      "is_local" : false,
      "name" : "The New Normal",
      "popularity" : 22,
      "preview_url" : "https://p.scdn.co/mp3-preview/a22736f725e9cc2756c2e296397247ce5f66864c?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:0UBLvMN7Y1pPr22zYAjhRd"
    }
  },
  {
    "added_at" : "2021-02-21T16:15:55Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3ZOZaEFRuEhjsQ7QAPkpoB"
          },
          "href" : "https://api.spotify.com/v1/artists/3ZOZaEFRuEhjsQ7QAPkpoB",
          "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
          "name" : "Elvenking",
          "type" : "artist",
          "uri" : "spotify:artist:3ZOZaEFRuEhjsQ7QAPkpoB"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4dhUo35WO3cGcFbxJ7ZIe3"
        },
        "href" : "https://api.spotify.com/v1/albums/4dhUo35WO3cGcFbxJ7ZIe3",
        "id" : "4dhUo35WO3cGcFbxJ7ZIe3",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27302350a49e50d1ce419b07614",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0202350a49e50d1ce419b07614",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485102350a49e50d1ce419b07614",
          "width" : 64
        } ],
        "name" : "Immortal",
        "release_date" : "2014-03-25",
        "release_date_precision" : "day",
        "total_tracks" : 8,
        "type" : "album",
        "uri" : "spotify:album:4dhUo35WO3cGcFbxJ7ZIe3"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3ZOZaEFRuEhjsQ7QAPkpoB"
        },
        "href" : "https://api.spotify.com/v1/artists/3ZOZaEFRuEhjsQ7QAPkpoB",
        "id" : "3",
        "name" : "Elvenking",
        "type" : "artist",
        "uri" : "spotify:artist:3ZOZaEFRuEhjsQ7QAPkpoB"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 214737,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USERN1008694"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3Yb3WCtJI3t0FCKzroKAv1"
      },
      "href" : "https://api.spotify.com/v1/tracks/3Yb3WCtJI3t0FCKzroKAv1",
      "id" : "3Yb3WCtJI3t0FCKzroKAv1",
      "is_local" : false,
      "name" : "Ancient's Retribution",
      "popularity" : 14,
      "preview_url" : "https://p.scdn.co/mp3-preview/83b935148dcdb322ec0920be776a7ca8aecacdd6?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:3Yb3WCtJI3t0FCKzroKAv1"
    }
  } 
],
  "limit" : 50,
  "next" : "https://api.spotify.com/v1/me/tracks?offset=50&limit=50",
  "offset" : 0,
  "previous" : null,
  "total" : 4031
}

export const playlistData = {
  data: {
    "collaborative": false,
    "description": null,
    "external_urls": {
        "spotify": "https://open.spotify.com/playlist/4dOnMwNcYPJqIG4z4bZlTf"
    },
    "followers": {
        "href": null,
        "total": 0
    },
    "href": "https://api.spotify.com/v1/playlists/4dOnMwNcYPJqIG4z4bZlTf",
    "id": "7d2D2S200NyUE5KYs80PwO",
    "images": [],
    "name": "My New Playlist",
    "owner": {
        "external_urls": {
            "spotify": "http://open.spotify.com/user/thelinmichael"
        },
        "href": "https://api.spotify.com/v1/users/thelinmichael",
        "id": "thelinmichael",
        "type": "user",
        "uri": "spotify:user:thelinmichael"
    },
    "cover":
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b2739db63254bf5a8be73bbaed21",
        "width": 640
      }
    ,
    "public": false,
    "snapshot_id": "s0o3TSuYnRLl2jch+oA4OEbKwq/fNxhGBkSPnvhZdmWjNV0q3uCAWuGIhEx8SHIx",
    "tracks": {
        "href": "https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO/tracks",
        "items": [],
        "limit": 100,
        "next": null,
        "offset": 0,
        "previous": null,
        "total": 0
    },
    "type": "playlist",
    "uri": "spotify:playlist:4dOnMwNcYPJqIG4z4bZlTf"
  }
}

function addSelectedProperty (data: ArtistData) {
  return data.artists.items.map((artist) => {
    return {...artist, selected: false}
  });
}

export const specifiedArtists = {
  "artists": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/4LNC9g5ie0tSgZed2CHQ5A"
      },
      "followers": {
        "href": null,
        "total": 21232
      },
      "genres": [
        "classic czech pop",
        "czech country",
        "czech folk",
        "czech rock"
      ],
      "href": "https://api.spotify.com/v1/artists/4LNC9g5ie0tSgZed2CHQ5A",
      "id": "4LNC9g5ie0tSgZed2CHQ5A",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d65f92695b407bb9c9a19694",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d65f92695b407bb9c9a19694",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d65f92695b407bb9c9a19694",
          "width": 64
        }
      ],
      "name": "Waldemar Matuška",
      "popularity": 42,
      "type": "artist",
      "uri": "spotify:artist:4LNC9g5ie0tSgZed2CHQ5A"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz"
      },
      "followers": {
        "href": null,
        "total": 3553851
      },
      "genres": [
        "alternative rock",
        "blues rock",
        "garage rock",
        "modern blues rock",
        "modern rock",
        "punk blues",
        "rock",
        "folk metal"
      ],
      "href": "https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
      "id": "7mnBLXK823vNxN3UWB7Gfz",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebda012e44f73353016e419282",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174da012e44f73353016e419282",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178da012e44f73353016e419282",
          "width": 160
        }
      ],
      "name": "The Black Keys",
      "popularity": 73,
      "type": "artist",
      "uri": "spotify:artist:7mnBLXK823vNxN3UWB7Gfz"
    }
  ]
}

export const artistsMock: Artist[] = addSelectedProperty(artistData);
export const tracksMock: TrackItem[] = trackData.items;
export const playlistMock: PlaylistData = playlistData.data;
export const genresMock: GenreDb = generateGenres(artistsMock);