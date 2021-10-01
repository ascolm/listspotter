import { Artist, TrackItem, ArtistData, PlaylistData } from '../interfaces/spotifyObjects'
import { GenreDb } from '../interfaces/genreObjects'
import { generateGenres } from '../components/Main/main-helpers'

const artistData = {
  "artists" : {
    "items" : [ {
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
    }, {
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
    }, {
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
  "items" : [ {
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
  }, {
    "added_at" : "2021-03-04T21:40:32Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2i1CPudyCUjL50Wqjv8AMI"
          },
          "href" : "https://api.spotify.com/v1/artists/2i1CPudyCUjL50Wqjv8AMI",
          "id" : "2i1CPudyCUjL50Wqjv8AMI",
          "name" : "Alfa Mist",
          "type" : "artist",
          "uri" : "spotify:artist:2i1CPudyCUjL50Wqjv8AMI"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/38XUFMsLLAttgWdD40CTaL"
        },
        "href" : "https://api.spotify.com/v1/albums/38XUFMsLLAttgWdD40CTaL",
        "id" : "38XUFMsLLAttgWdD40CTaL",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2733979878917bb0159fa35b0ac",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e023979878917bb0159fa35b0ac",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048513979878917bb0159fa35b0ac",
          "width" : 64
        } ],
        "name" : "Structuralism",
        "release_date" : "2019-04-26",
        "release_date_precision" : "day",
        "total_tracks" : 8,
        "type" : "album",
        "uri" : "spotify:album:38XUFMsLLAttgWdD40CTaL"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2i1CPudyCUjL50Wqjv8AMI"
        },
        "href" : "https://api.spotify.com/v1/artists/2i1CPudyCUjL50Wqjv8AMI",
        "id" : "2i1CPudyCUjL50Wqjv8AMI",
        "name" : "Alfa Mist",
        "type" : "artist",
        "uri" : "spotify:artist:2i1CPudyCUjL50Wqjv8AMI"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/24icoQNJSEWNu3XvqKBR68"
        },
        "href" : "https://api.spotify.com/v1/artists/24icoQNJSEWNu3XvqKBR68",
        "id" : "24icoQNJSEWNu3XvqKBR68",
        "name" : "Jordan Rakei",
        "type" : "artist",
        "uri" : "spotify:artist:24icoQNJSEWNu3XvqKBR68"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 247760,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "FR10S1947881"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5IOLaZLFnrBIjZImSS1E1u"
      },
      "href" : "https://api.spotify.com/v1/tracks/5IOLaZLFnrBIjZImSS1E1u",
      "id" : "5IOLaZLFnrBIjZImSS1E1u",
      "is_local" : false,
      "name" : "Door",
      "popularity" : 46,
      "preview_url" : "https://p.scdn.co/mp3-preview/3c946c3053abaaf1f678a14eb874ec13ec71dcdf?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:5IOLaZLFnrBIjZImSS1E1u"
    }
  }, {
    "added_at" : "2021-03-04T21:38:46Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2i1CPudyCUjL50Wqjv8AMI"
          },
          "href" : "https://api.spotify.com/v1/artists/2i1CPudyCUjL50Wqjv8AMI",
          "id" : "2i1CPudyCUjL50Wqjv8AMI",
          "name" : "Alfa Mist",
          "type" : "artist",
          "uri" : "spotify:artist:2i1CPudyCUjL50Wqjv8AMI"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3joOXpEsCgg8oS1Tba7neT"
        },
        "href" : "https://api.spotify.com/v1/albums/3joOXpEsCgg8oS1Tba7neT",
        "id" : "3joOXpEsCgg8oS1Tba7neT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2735d46b069ef33382b235b296a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e025d46b069ef33382b235b296a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048515d46b069ef33382b235b296a",
          "width" : 64
        } ],
        "name" : "Antiphon",
        "release_date" : "2017-03-03",
        "release_date_precision" : "day",
        "total_tracks" : 8,
        "type" : "album",
        "uri" : "spotify:album:3joOXpEsCgg8oS1Tba7neT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2i1CPudyCUjL50Wqjv8AMI"
        },
        "href" : "https://api.spotify.com/v1/artists/2i1CPudyCUjL50Wqjv8AMI",
        "id" : "2i1CPudyCUjL50Wqjv8AMI",
        "name" : "Alfa Mist",
        "type" : "artist",
        "uri" : "spotify:artist:2i1CPudyCUjL50Wqjv8AMI"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/12WK0pR6DK71O5uqTHWzyE"
        },
        "href" : "https://api.spotify.com/v1/artists/12WK0pR6DK71O5uqTHWzyE",
        "id" : "12WK0pR6DK71O5uqTHWzyE",
        "name" : "Kaya Thomas-Dyke",
        "type" : "artist",
        "uri" : "spotify:artist:12WK0pR6DK71O5uqTHWzyE"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 447000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USCGH1770627"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6nGNzqlHTKugpRWkXrZkPC"
      },
      "href" : "https://api.spotify.com/v1/tracks/6nGNzqlHTKugpRWkXrZkPC",
      "id" : "6nGNzqlHTKugpRWkXrZkPC",
      "is_local" : false,
      "name" : "Breathe",
      "popularity" : 48,
      "preview_url" : "https://p.scdn.co/mp3-preview/a9ef0a470e447546df7cbb6fe0b042a7c1f2a14e?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:6nGNzqlHTKugpRWkXrZkPC"
    }
  }, {
    "added_at" : "2021-03-04T21:34:16Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
          },
          "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
          "id" : "710FHFQeXKC6dZGCxt7kQh",
          "name" : "Yussef Kamaal",
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
        "id" : "710FHFQeXKC6dZGCxt7kQh",
        "name" : "Yussef Kamaal",
        "type" : "artist",
        "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 46920,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBMEF1600928"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5EqkuCTZTSMhZm2sLhA7JN"
      },
      "href" : "https://api.spotify.com/v1/tracks/5EqkuCTZTSMhZm2sLhA7JN",
      "id" : "5EqkuCTZTSMhZm2sLhA7JN",
      "is_local" : false,
      "name" : "O.G.",
      "popularity" : 28,
      "preview_url" : "https://p.scdn.co/mp3-preview/5a6fd9533dd0100396588ed6c213b8073239d246?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:5EqkuCTZTSMhZm2sLhA7JN"
    }
  }, {
    "added_at" : "2021-03-04T18:31:40Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
          },
          "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
          "id" : "710FHFQeXKC6dZGCxt7kQh",
          "name" : "Yussef Kamaal",
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
        "id" : "710FHFQeXKC6dZGCxt7kQh",
        "name" : "Yussef Kamaal",
        "type" : "artist",
        "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 239480,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBMEF1600918"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4doeILSOpBXjzWsiJiSS8a"
      },
      "href" : "https://api.spotify.com/v1/tracks/4doeILSOpBXjzWsiJiSS8a",
      "id" : "4doeILSOpBXjzWsiJiSS8a",
      "is_local" : false,
      "name" : "Yo Chavez",
      "popularity" : 32,
      "preview_url" : "https://p.scdn.co/mp3-preview/abb79b375f7ac02161f3a56e9cc7684e658f1918?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:4doeILSOpBXjzWsiJiSS8a"
    }
  }, {
    "added_at" : "2021-03-04T18:04:50Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
          },
          "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
          "id" : "710FHFQeXKC6dZGCxt7kQh",
          "name" : "Yussef Kamaal",
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
        "id" : "710FHFQeXKC6dZGCxt7kQh",
        "name" : "Yussef Kamaal",
        "type" : "artist",
        "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 268466,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBMEF1600919"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7gHdjudTKmgDcWSKPpJk9h"
      },
      "href" : "https://api.spotify.com/v1/tracks/7gHdjudTKmgDcWSKPpJk9h",
      "id" : "7gHdjudTKmgDcWSKPpJk9h",
      "is_local" : false,
      "name" : "Lowrider",
      "popularity" : 39,
      "preview_url" : "https://p.scdn.co/mp3-preview/fec1d7bc1913443a53ea83fa15db17d10816ea65?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:7gHdjudTKmgDcWSKPpJk9h"
    }
  }, {
    "added_at" : "2021-03-04T17:40:14Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
          },
          "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
          "id" : "710FHFQeXKC6dZGCxt7kQh",
          "name" : "Yussef Kamaal",
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
        "id" : "710FHFQeXKC6dZGCxt7kQh",
        "name" : "Yussef Kamaal",
        "type" : "artist",
        "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 540546,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBMEF1600917"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1k7B553lUeQY3cyltjRWCH"
      },
      "href" : "https://api.spotify.com/v1/tracks/1k7B553lUeQY3cyltjRWCH",
      "id" : "1k7B553lUeQY3cyltjRWCH",
      "is_local" : false,
      "name" : "Remembrance",
      "popularity" : 38,
      "preview_url" : "https://p.scdn.co/mp3-preview/8a46cf5b255fa559f261d9450bd273da0e4f99fe?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:1k7B553lUeQY3cyltjRWCH"
    }
  }, {
    "added_at" : "2021-02-28T18:59:00Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
          },
          "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
          "id" : "5TUa95aB5Vu2CzwCnZd6t0",
          "name" : "TTNG",
          "type" : "artist",
          "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6utXOCDpTDavsVbjQgPxpe"
        },
        "href" : "https://api.spotify.com/v1/albums/6utXOCDpTDavsVbjQgPxpe",
        "id" : "6utXOCDpTDavsVbjQgPxpe",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2734f163ad393b69f372da63e7c",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e024f163ad393b69f372da63e7c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048514f163ad393b69f372da63e7c",
          "width" : 64
        } ],
        "name" : "Disappointment Island",
        "release_date" : "2016-07-08",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6utXOCDpTDavsVbjQgPxpe"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
        },
        "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
        "id" : "5TUa95aB5Vu2CzwCnZd6t0",
        "name" : "TTNG",
        "type" : "artist",
        "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 256186,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QMLD61404135"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6a76vVSWwjhLHCh2uV8XK3"
      },
      "href" : "https://api.spotify.com/v1/tracks/6a76vVSWwjhLHCh2uV8XK3",
      "id" : "6a76vVSWwjhLHCh2uV8XK3",
      "is_local" : false,
      "name" : "In Praise of Idleness",
      "popularity" : 24,
      "preview_url" : "https://p.scdn.co/mp3-preview/a3e646f8850d8ddc346e184af120255fb1cfa41b?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:6a76vVSWwjhLHCh2uV8XK3"
    }
  }, {
    "added_at" : "2021-02-28T18:54:05Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
          },
          "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
          "id" : "5TUa95aB5Vu2CzwCnZd6t0",
          "name" : "TTNG",
          "type" : "artist",
          "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6utXOCDpTDavsVbjQgPxpe"
        },
        "href" : "https://api.spotify.com/v1/albums/6utXOCDpTDavsVbjQgPxpe",
        "id" : "6utXOCDpTDavsVbjQgPxpe",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2734f163ad393b69f372da63e7c",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e024f163ad393b69f372da63e7c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048514f163ad393b69f372da63e7c",
          "width" : 64
        } ],
        "name" : "Disappointment Island",
        "release_date" : "2016-07-08",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6utXOCDpTDavsVbjQgPxpe"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
        },
        "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
        "id" : "5TUa95aB5Vu2CzwCnZd6t0",
        "name" : "TTNG",
        "type" : "artist",
        "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 174680,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QMLD61404133"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0Xr8oHXgHJj6wIoYKsl5qK"
      },
      "href" : "https://api.spotify.com/v1/tracks/0Xr8oHXgHJj6wIoYKsl5qK",
      "id" : "0Xr8oHXgHJj6wIoYKsl5qK",
      "is_local" : false,
      "name" : "A Chase of Sorts",
      "popularity" : 23,
      "preview_url" : "https://p.scdn.co/mp3-preview/19a2e3986ee540265fe93ed156ba906fd64e3b4d?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:0Xr8oHXgHJj6wIoYKsl5qK"
    }
  }, {
    "added_at" : "2021-02-28T18:42:37Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
          },
          "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
          "id" : "5TUa95aB5Vu2CzwCnZd6t0",
          "name" : "TTNG",
          "type" : "artist",
          "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6utXOCDpTDavsVbjQgPxpe"
        },
        "href" : "https://api.spotify.com/v1/albums/6utXOCDpTDavsVbjQgPxpe",
        "id" : "6utXOCDpTDavsVbjQgPxpe",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2734f163ad393b69f372da63e7c",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e024f163ad393b69f372da63e7c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048514f163ad393b69f372da63e7c",
          "width" : 64
        } ],
        "name" : "Disappointment Island",
        "release_date" : "2016-07-08",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6utXOCDpTDavsVbjQgPxpe"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
        },
        "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
        "id" : "5TUa95aB5Vu2CzwCnZd6t0",
        "name" : "TTNG",
        "type" : "artist",
        "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 337146,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QMLD61404136"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3iV0hDpxooBMmwPEKOukJf"
      },
      "href" : "https://api.spotify.com/v1/tracks/3iV0hDpxooBMmwPEKOukJf",
      "id" : "3iV0hDpxooBMmwPEKOukJf",
      "is_local" : false,
      "name" : "Whatever, Whenever",
      "popularity" : 38,
      "preview_url" : "https://p.scdn.co/mp3-preview/da9296c558b8e193f61cab35e9916fc76685bd70?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:3iV0hDpxooBMmwPEKOukJf"
    }
  }, {
    "added_at" : "2021-02-28T00:03:29Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
          },
          "href" : "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
          "id" : "0k17h0D3J5VfsdmQ1iZtE9",
          "name" : "Pink Floyd",
          "type" : "artist",
          "uri" : "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
        } ],
        "available_markets" : [ "AD", "AL", "AM", "AT", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "ES", "FI", "FR", "GB", "GE", "GR", "HR", "HU", "IE", "IS", "IT", "KG", "KZ", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SK", "TR", "UA", "UZ", "XK" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6uvBKDGlJAYLH5Vy6RQVsc"
        },
        "href" : "https://api.spotify.com/v1/albums/6uvBKDGlJAYLH5Vy6RQVsc",
        "id" : "6uvBKDGlJAYLH5Vy6RQVsc",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2735aa1262c4123fedc2e4b8c44",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e025aa1262c4123fedc2e4b8c44",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048515aa1262c4123fedc2e4b8c44",
          "width" : 64
        } ],
        "name" : "Wish You Were Here [Remastered] (Remastered Version)",
        "release_date" : "1975-09-12",
        "release_date_precision" : "day",
        "total_tracks" : 5,
        "type" : "album",
        "uri" : "spotify:album:6uvBKDGlJAYLH5Vy6RQVsc"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
        },
        "href" : "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
        "id" : "0k17h0D3J5VfsdmQ1iZtE9",
        "name" : "Pink Floyd",
        "type" : "artist",
        "uri" : "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
      } ],
      "available_markets" : [ "AD", "AL", "AM", "AT", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "ES", "FI", "FR", "GB", "GE", "GR", "HR", "HU", "IE", "IS", "IT", "KG", "KZ", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SK", "TR", "UA", "UZ", "XK" ],
      "disc_number" : 1,
      "duration_ms" : 334743,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBN9Y1100088"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7aE5WXu5sFeNRh3Z05wwu4"
      },
      "href" : "https://api.spotify.com/v1/tracks/7aE5WXu5sFeNRh3Z05wwu4",
      "id" : "7aE5WXu5sFeNRh3Z05wwu4",
      "is_local" : false,
      "name" : "Wish You Were Here - 2011 Remastered Version",
      "popularity" : 70,
      "preview_url" : "https://p.scdn.co/mp3-preview/7ce0d4e5f0ffcf8fe1a312c9c2f9331c8d2bf994?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:7aE5WXu5sFeNRh3Z05wwu4"
    }
  }, {
    "added_at" : "2021-02-27T23:58:07Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/22WZ7M8sxp5THdruNY3gXt"
          },
          "href" : "https://api.spotify.com/v1/artists/22WZ7M8sxp5THdruNY3gXt",
          "id" : "22WZ7M8sxp5THdruNY3gXt",
          "name" : "The Doors",
          "type" : "artist",
          "uri" : "spotify:artist:22WZ7M8sxp5THdruNY3gXt"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6AFLOkpJjFF652jevcSOZX"
        },
        "href" : "https://api.spotify.com/v1/albums/6AFLOkpJjFF652jevcSOZX",
        "id" : "6AFLOkpJjFF652jevcSOZX",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f12a8a7e0b2cbe16d2bef4dc",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f12a8a7e0b2cbe16d2bef4dc",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f12a8a7e0b2cbe16d2bef4dc",
          "width" : 64
        } ],
        "name" : "Morrison Hotel",
        "release_date" : "1970-02-09",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:6AFLOkpJjFF652jevcSOZX"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/22WZ7M8sxp5THdruNY3gXt"
        },
        "href" : "https://api.spotify.com/v1/artists/22WZ7M8sxp5THdruNY3gXt",
        "id" : "22WZ7M8sxp5THdruNY3gXt",
        "name" : "The Doors",
        "type" : "artist",
        "uri" : "spotify:artist:22WZ7M8sxp5THdruNY3gXt"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 243826,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USEE19900375"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1Q5kgpp4pmyGqPwNBzkSrw"
      },
      "href" : "https://api.spotify.com/v1/tracks/1Q5kgpp4pmyGqPwNBzkSrw",
      "id" : "1Q5kgpp4pmyGqPwNBzkSrw",
      "is_local" : false,
      "name" : "Roadhouse Blues",
      "popularity" : 70,
      "preview_url" : "https://p.scdn.co/mp3-preview/a0e4d25d759b8433f99d99bbaf31e153e0b1914e?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:1Q5kgpp4pmyGqPwNBzkSrw"
    }
  }, {
    "added_at" : "2021-02-27T13:00:06Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
          },
          "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
          "id" : "2DlKh1IzbG3EwAMaTF2p4A",
          "name" : "Inferi",
          "type" : "artist",
          "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/621sN6b7GCpWpzaSidA5Ir"
        },
        "href" : "https://api.spotify.com/v1/albums/621sN6b7GCpWpzaSidA5Ir",
        "id" : "621sN6b7GCpWpzaSidA5Ir",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f5e1ee8deb0e691a68d29045",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f5e1ee8deb0e691a68d29045",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f5e1ee8deb0e691a68d29045",
          "width" : 64
        } ],
        "name" : "The Path of Apotheosis",
        "release_date" : "2014-01-26",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:621sN6b7GCpWpzaSidA5Ir"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
        "id" : "2DlKh1IzbG3EwAMaTF2p4A",
        "name" : "Inferi",
        "type" : "artist",
        "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 394320,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABS1379689"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6FX7C7yaMvqtV0E2OjYIhA"
      },
      "href" : "https://api.spotify.com/v1/tracks/6FX7C7yaMvqtV0E2OjYIhA",
      "id" : "6FX7C7yaMvqtV0E2OjYIhA",
      "is_local" : false,
      "name" : "The Path of Apotheosis",
      "popularity" : 19,
      "preview_url" : "https://p.scdn.co/mp3-preview/28cda4b2e4818ad7830290e7c7d22f4ca3df6b28?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:6FX7C7yaMvqtV0E2OjYIhA"
    }
  }, {
    "added_at" : "2021-02-25T12:33:03Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6RmijobcphddxSNtsBHjF0"
          },
          "href" : "https://api.spotify.com/v1/artists/6RmijobcphddxSNtsBHjF0",
          "id" : "6RmijobcphddxSNtsBHjF0",
          "name" : "Simon Posford",
          "type" : "artist",
          "uri" : "spotify:artist:6RmijobcphddxSNtsBHjF0"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0m5XJwKGYyUjd3VMfcINCQ"
          },
          "href" : "https://api.spotify.com/v1/artists/0m5XJwKGYyUjd3VMfcINCQ",
          "id" : "0m5XJwKGYyUjd3VMfcINCQ",
          "name" : "Shpongle",
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
          "spotify" : "https://open.spotify.com/artist/6RmijobcphddxSNtsBHjF0"
        },
        "href" : "https://api.spotify.com/v1/artists/6RmijobcphddxSNtsBHjF0",
        "id" : "1",
        "name" : "Simon Posford",
        "type" : "artist",
        "uri" : "spotify:artist:6RmijobcphddxSNtsBHjF0"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0m5XJwKGYyUjd3VMfcINCQ"
        },
        "href" : "https://api.spotify.com/v1/artists/0m5XJwKGYyUjd3VMfcINCQ",
        "id" : "0m5XJwKGYyUjd3VMfcINCQ",
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
  }, {
    "added_at" : "2021-02-25T12:32:48Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6RmijobcphddxSNtsBHjF0"
          },
          "href" : "https://api.spotify.com/v1/artists/6RmijobcphddxSNtsBHjF0",
          "id" : "6RmijobcphddxSNtsBHjF0",
          "name" : "Simon Posford",
          "type" : "artist",
          "uri" : "spotify:artist:6RmijobcphddxSNtsBHjF0"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0m5XJwKGYyUjd3VMfcINCQ"
          },
          "href" : "https://api.spotify.com/v1/artists/0m5XJwKGYyUjd3VMfcINCQ",
          "id" : "0m5XJwKGYyUjd3VMfcINCQ",
          "name" : "Shpongle",
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
          "spotify" : "https://open.spotify.com/artist/6RmijobcphddxSNtsBHjF0"
        },
        "href" : "https://api.spotify.com/v1/artists/6RmijobcphddxSNtsBHjF0",
        "id" : "6RmijobcphddxSNtsBHjF0",
        "name" : "Simon Posford",
        "type" : "artist",
        "uri" : "spotify:artist:6RmijobcphddxSNtsBHjF0"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0m5XJwKGYyUjd3VMfcINCQ"
        },
        "href" : "https://api.spotify.com/v1/artists/0m5XJwKGYyUjd3VMfcINCQ",
        "id" : "0m5XJwKGYyUjd3VMfcINCQ",
        "name" : "Shpongle",
        "type" : "artist",
        "uri" : "spotify:artist:0m5XJwKGYyUjd3VMfcINCQ"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 328840,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBBMP1200632"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0bW1ctrbUrg1E3bC4lu0SO"
      },
      "href" : "https://api.spotify.com/v1/tracks/0bW1ctrbUrg1E3bC4lu0SO",
      "id" : "0bW1ctrbUrg1E3bC4lu0SO",
      "is_local" : false,
      "name" : "Wish You Weren’t Here",
      "popularity" : 24,
      "preview_url" : "https://p.scdn.co/mp3-preview/5285f5475414491f8ded4788e25df325b38e9bf4?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:0bW1ctrbUrg1E3bC4lu0SO"
    }
  }, {
    "added_at" : "2021-02-23T13:06:12Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1Yox196W7bzVNZI7RBaPnf"
          },
          "href" : "https://api.spotify.com/v1/artists/1Yox196W7bzVNZI7RBaPnf",
          "id" : "1Yox196W7bzVNZI7RBaPnf",
          "name" : "Megadeth",
          "type" : "artist",
          "uri" : "spotify:artist:1Yox196W7bzVNZI7RBaPnf"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5YFrdrFUHGgAvK8iXFxULa"
        },
        "href" : "https://api.spotify.com/v1/albums/5YFrdrFUHGgAvK8iXFxULa",
        "id" : "5YFrdrFUHGgAvK8iXFxULa",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2735545e351774a756c377ea0ee",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e025545e351774a756c377ea0ee",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048515545e351774a756c377ea0ee",
          "width" : 64
        } ],
        "name" : "The World Needs a Hero",
        "release_date" : "2001-05-14",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:5YFrdrFUHGgAvK8iXFxULa"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1Yox196W7bzVNZI7RBaPnf"
        },
        "href" : "https://api.spotify.com/v1/artists/1Yox196W7bzVNZI7RBaPnf",
        "id" : "1Yox196W7bzVNZI7RBaPnf",
        "name" : "Megadeth",
        "type" : "artist",
        "uri" : "spotify:artist:1Yox196W7bzVNZI7RBaPnf"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 265133,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAJE0100024"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4Bfxp472zIwiSYjZsK76EN"
      },
      "href" : "https://api.spotify.com/v1/tracks/4Bfxp472zIwiSYjZsK76EN",
      "id" : "4Bfxp472zIwiSYjZsK76EN",
      "is_local" : false,
      "name" : "Dread and the Fugitive Mind",
      "popularity" : 44,
      "preview_url" : "https://p.scdn.co/mp3-preview/6614ac4f3149fdd7559bfd7fdceea386fcc353cc?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:4Bfxp472zIwiSYjZsK76EN"
    }
  }, {
    "added_at" : "2021-02-23T11:45:14Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
          },
          "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
          "id" : "2DlKh1IzbG3EwAMaTF2p4A",
          "name" : "Inferi",
          "type" : "artist",
          "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/621sN6b7GCpWpzaSidA5Ir"
        },
        "href" : "https://api.spotify.com/v1/albums/621sN6b7GCpWpzaSidA5Ir",
        "id" : "621sN6b7GCpWpzaSidA5Ir",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f5e1ee8deb0e691a68d29045",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f5e1ee8deb0e691a68d29045",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f5e1ee8deb0e691a68d29045",
          "width" : 64
        } ],
        "name" : "The Path of Apotheosis",
        "release_date" : "2014-01-26",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:621sN6b7GCpWpzaSidA5Ir"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
        "id" : "2DlKh1IzbG3EwAMaTF2p4A",
        "name" : "Inferi",
        "type" : "artist",
        "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 354640,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABS1379688"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1lEnjsEH1zxGUkatGwMzSZ"
      },
      "href" : "https://api.spotify.com/v1/tracks/1lEnjsEH1zxGUkatGwMzSZ",
      "id" : "1lEnjsEH1zxGUkatGwMzSZ",
      "is_local" : false,
      "name" : "The Ancients of Shattered Thrones",
      "popularity" : 19,
      "preview_url" : "https://p.scdn.co/mp3-preview/bf7dde3c14e9deb854771d9ba8e0a1992f2f1257?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:1lEnjsEH1zxGUkatGwMzSZ"
    }
  }, {
    "added_at" : "2021-02-23T11:31:03Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1EzRkEPmjf1ZEjTnWVXiQ2"
          },
          "href" : "https://api.spotify.com/v1/artists/1EzRkEPmjf1ZEjTnWVXiQ2",
          "id" : "1EzRkEPmjf1ZEjTnWVXiQ2",
          "name" : "Mekong Delta",
          "type" : "artist",
          "uri" : "spotify:artist:1EzRkEPmjf1ZEjTnWVXiQ2"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6ajZAcA75EojcJaVGQuvCw"
        },
        "href" : "https://api.spotify.com/v1/albums/6ajZAcA75EojcJaVGQuvCw",
        "id" : "6ajZAcA75EojcJaVGQuvCw",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2732927156af0eef58c76fff96b",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e022927156af0eef58c76fff96b",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048512927156af0eef58c76fff96b",
          "width" : 64
        } ],
        "name" : "The Principle of Doubt",
        "release_date" : "1989-02-25",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6ajZAcA75EojcJaVGQuvCw"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1EzRkEPmjf1ZEjTnWVXiQ2"
        },
        "href" : "https://api.spotify.com/v1/artists/1EzRkEPmjf1ZEjTnWVXiQ2",
        "id" : "1EzRkEPmjf1ZEjTnWVXiQ2",
        "name" : "Mekong Delta",
        "type" : "artist",
        "uri" : "spotify:artist:1EzRkEPmjf1ZEjTnWVXiQ2"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 293386,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "DEA451302050"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6J1slcIFHByPeRPIl6pFch"
      },
      "href" : "https://api.spotify.com/v1/tracks/6J1slcIFHByPeRPIl6pFch",
      "id" : "6J1slcIFHByPeRPIl6pFch",
      "is_local" : false,
      "name" : "The Principle of Doubt - Chapter 3 Taken From 'The Chronicle of Doubt'",
      "popularity" : 3,
      "preview_url" : "https://p.scdn.co/mp3-preview/32ebe5c7f3c69e0271ef9fc413f7dab36a9e532f?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:6J1slcIFHByPeRPIl6pFch"
    }
  }, {
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
  }, {
    "added_at" : "2021-02-21T16:10:28Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3ZOZaEFRuEhjsQ7QAPkpoB"
          },
          "href" : "https://api.spotify.com/v1/artists/3ZOZaEFRuEhjsQ7QAPkpoB",
          "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
          "name" : "Alterbeast",
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
        "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
        "name" : "Alterbeast",
        "type" : "artist",
        "uri" : "spotify:artist:3ZOZaEFRuEhjsQ7QAPkpoB"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 306291,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USERN1008693"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0tAumAapgzzIiddYAwKKk2"
      },
      "href" : "https://api.spotify.com/v1/tracks/0tAumAapgzzIiddYAwKKk2",
      "id" : "0tAumAapgzzIiddYAwKKk2",
      "is_local" : false,
      "name" : "Vile Remnants",
      "popularity" : 15,
      "preview_url" : "https://p.scdn.co/mp3-preview/c4e4cd95d76ae2f6cd8e5362884465b253f0de82?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:0tAumAapgzzIiddYAwKKk2"
    }
  }, {
    "added_at" : "2021-02-21T16:01:37Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3ZOZaEFRuEhjsQ7QAPkpoB"
          },
          "href" : "https://api.spotify.com/v1/artists/3ZOZaEFRuEhjsQ7QAPkpoB",
          "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
          "name" : "Alterbeast",
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
        "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
        "name" : "Alterbeast",
        "type" : "artist",
        "uri" : "spotify:artist:3ZOZaEFRuEhjsQ7QAPkpoB"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 156037,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USERN1008692"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1q5lWOlLTs37JpEuFPJ5fZ"
      },
      "href" : "https://api.spotify.com/v1/tracks/1q5lWOlLTs37JpEuFPJ5fZ",
      "id" : "1q5lWOlLTs37JpEuFPJ5fZ",
      "is_local" : false,
      "name" : "Of Decimus Divine",
      "popularity" : 15,
      "preview_url" : "https://p.scdn.co/mp3-preview/144b5550b29619e92e85a58456be171e1b113a48?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:1q5lWOlLTs37JpEuFPJ5fZ"
    }
  }, {
    "added_at" : "2021-02-21T15:49:51Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
          },
          "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
          "id" : "2DlKh1IzbG3EwAMaTF2p4A",
          "name" : "Inferi",
          "type" : "artist",
          "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/621sN6b7GCpWpzaSidA5Ir"
        },
        "href" : "https://api.spotify.com/v1/albums/621sN6b7GCpWpzaSidA5Ir",
        "id" : "621sN6b7GCpWpzaSidA5Ir",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f5e1ee8deb0e691a68d29045",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f5e1ee8deb0e691a68d29045",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f5e1ee8deb0e691a68d29045",
          "width" : 64
        } ],
        "name" : "The Path of Apotheosis",
        "release_date" : "2014-01-26",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:621sN6b7GCpWpzaSidA5Ir"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
        "id" : "2DlKh1IzbG3EwAMaTF2p4A",
        "name" : "Inferi",
        "type" : "artist",
        "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 359640,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABS1379687"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6S41USppfhF2c9xuNx97AN"
      },
      "href" : "https://api.spotify.com/v1/tracks/6S41USppfhF2c9xuNx97AN",
      "id" : "6S41USppfhF2c9xuNx97AN",
      "is_local" : false,
      "name" : "Marching Through the Flames of Tyranny",
      "popularity" : 19,
      "preview_url" : "https://p.scdn.co/mp3-preview/494f23683345af46e8cf3a7a224d42207d866588?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:6S41USppfhF2c9xuNx97AN"
    }
  }, {
    "added_at" : "2021-02-20T15:41:36Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3ZWab2LEVkNKiBPIClTwof"
          },
          "href" : "https://api.spotify.com/v1/artists/3ZWab2LEVkNKiBPIClTwof",
          "id" : "3ZWab2LEVkNKiBPIClTwof",
          "name" : "Townes Van Zandt",
          "type" : "artist",
          "uri" : "spotify:artist:3ZWab2LEVkNKiBPIClTwof"
        } ],
        "available_markets" : [ "AD", "AE", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BT", "BW", "BY", "CH", "CL", "CM", "CO", "CV", "CW", "CY", "CZ", "DE", "DK", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GE", "GH", "GM", "GN", "GQ", "GR", "GW", "GY", "HK", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MY", "NA", "NE", "NG", "NL", "NO", "NP", "NR", "NZ", "OM", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/08ADmkImC4Z1iMsaPr3NC0"
        },
        "href" : "https://api.spotify.com/v1/albums/08ADmkImC4Z1iMsaPr3NC0",
        "id" : "08ADmkImC4Z1iMsaPr3NC0",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273afcab75f7114347fc33cd3b0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02afcab75f7114347fc33cd3b0",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851afcab75f7114347fc33cd3b0",
          "width" : 64
        } ],
        "name" : "Delta Momma Blues",
        "release_date" : "1971",
        "release_date_precision" : "year",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:08ADmkImC4Z1iMsaPr3NC0"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3ZWab2LEVkNKiBPIClTwof"
        },
        "href" : "https://api.spotify.com/v1/artists/3ZWab2LEVkNKiBPIClTwof",
        "id" : "3ZWab2LEVkNKiBPIClTwof",
        "name" : "Townes Van Zandt",
        "type" : "artist",
        "uri" : "spotify:artist:3ZWab2LEVkNKiBPIClTwof"
      } ],
      "available_markets" : [ "AD", "AE", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BT", "BW", "BY", "CH", "CL", "CM", "CO", "CV", "CW", "CY", "CZ", "DE", "DK", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GE", "GH", "GM", "GN", "GQ", "GR", "GW", "GY", "HK", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MY", "NA", "NE", "NG", "NL", "NO", "NP", "NR", "NZ", "OM", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 170533,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCEL0900069"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0CieC8w6QH3SlIZeUZ8LoS"
      },
      "href" : "https://api.spotify.com/v1/tracks/0CieC8w6QH3SlIZeUZ8LoS",
      "id" : "0CieC8w6QH3SlIZeUZ8LoS",
      "is_local" : false,
      "name" : "Where I Lead Me",
      "popularity" : 10,
      "preview_url" : "https://p.scdn.co/mp3-preview/4fc116ac66e2bf540d73228372afa26fe41059ac?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:0CieC8w6QH3SlIZeUZ8LoS"
    }
  }, {
    "added_at" : "2021-02-18T16:29:40Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3Gaqw2nGyE7yM3rcRSzE3U"
          },
          "href" : "https://api.spotify.com/v1/artists/3Gaqw2nGyE7yM3rcRSzE3U",
          "id" : "3Gaqw2nGyE7yM3rcRSzE3U",
          "name" : "Yppah",
          "type" : "artist",
          "uri" : "spotify:artist:3Gaqw2nGyE7yM3rcRSzE3U"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5La9Xx2vJ84n8yngUVJri2"
        },
        "href" : "https://api.spotify.com/v1/albums/5La9Xx2vJ84n8yngUVJri2",
        "id" : "5La9Xx2vJ84n8yngUVJri2",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739d0fd14571e635b96ba52112",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029d0fd14571e635b96ba52112",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519d0fd14571e635b96ba52112",
          "width" : 64
        } ],
        "name" : "Tiny Pause",
        "release_date" : "2015-10-16",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:5La9Xx2vJ84n8yngUVJri2"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3Gaqw2nGyE7yM3rcRSzE3U"
        },
        "href" : "https://api.spotify.com/v1/artists/3Gaqw2nGyE7yM3rcRSzE3U",
        "id" : "3Gaqw2nGyE7yM3rcRSzE3U",
        "name" : "Yppah",
        "type" : "artist",
        "uri" : "spotify:artist:3Gaqw2nGyE7yM3rcRSzE3U"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 336400,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCFB1503904"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/68W36X31D3o8XfXrWhBnZE"
      },
      "href" : "https://api.spotify.com/v1/tracks/68W36X31D3o8XfXrWhBnZE",
      "id" : "68W36X31D3o8XfXrWhBnZE",
      "is_local" : false,
      "name" : "Owl Beach II",
      "popularity" : 35,
      "preview_url" : "https://p.scdn.co/mp3-preview/8ae8327ecc180bafc6a0f3da5d9ac6321beb81ac?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:68W36X31D3o8XfXrWhBnZE"
    }
  }, {
    "added_at" : "2021-02-18T15:59:46Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3Gaqw2nGyE7yM3rcRSzE3U"
          },
          "href" : "https://api.spotify.com/v1/artists/3Gaqw2nGyE7yM3rcRSzE3U",
          "id" : "3Gaqw2nGyE7yM3rcRSzE3U",
          "name" : "Yppah",
          "type" : "artist",
          "uri" : "spotify:artist:3Gaqw2nGyE7yM3rcRSzE3U"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5La9Xx2vJ84n8yngUVJri2"
        },
        "href" : "https://api.spotify.com/v1/albums/5La9Xx2vJ84n8yngUVJri2",
        "id" : "5La9Xx2vJ84n8yngUVJri2",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739d0fd14571e635b96ba52112",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029d0fd14571e635b96ba52112",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519d0fd14571e635b96ba52112",
          "width" : 64
        } ],
        "name" : "Tiny Pause",
        "release_date" : "2015-10-16",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:5La9Xx2vJ84n8yngUVJri2"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3Gaqw2nGyE7yM3rcRSzE3U"
        },
        "href" : "https://api.spotify.com/v1/artists/3Gaqw2nGyE7yM3rcRSzE3U",
        "id" : "3Gaqw2nGyE7yM3rcRSzE3U",
        "name" : "Yppah",
        "type" : "artist",
        "uri" : "spotify:artist:3Gaqw2nGyE7yM3rcRSzE3U"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 265586,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCFB1503906"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5cjBttolslxyUQSSabanA8"
      },
      "href" : "https://api.spotify.com/v1/tracks/5cjBttolslxyUQSSabanA8",
      "id" : "5cjBttolslxyUQSSabanA8",
      "is_local" : false,
      "name" : "Bushmills",
      "popularity" : 39,
      "preview_url" : "https://p.scdn.co/mp3-preview/d361baef69a29a74b95942f0ce9ec03caeedb48e?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:5cjBttolslxyUQSSabanA8"
    }
  }, {
    "added_at" : "2021-02-17T17:17:36Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id" : "0LyfQWJT6nXafLPZqxe9Of",
          "name" : "Various Artists",
          "type" : "artist",
          "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/61bYJTYERgYGSgFUamgTCa"
        },
        "href" : "https://api.spotify.com/v1/albums/61bYJTYERgYGSgFUamgTCa",
        "id" : "61bYJTYERgYGSgFUamgTCa",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27348e2a667de482192fddfeae0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0248e2a667de482192fddfeae0",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485148e2a667de482192fddfeae0",
          "width" : 64
        } ],
        "name" : "Ninja Tune XX (Volume 2)",
        "release_date" : "2010-09-20",
        "release_date_precision" : "day",
        "total_tracks" : 33,
        "type" : "album",
        "uri" : "spotify:album:61bYJTYERgYGSgFUamgTCa"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3Gaqw2nGyE7yM3rcRSzE3U"
        },
        "href" : "https://api.spotify.com/v1/artists/3Gaqw2nGyE7yM3rcRSzE3U",
        "id" : "3Gaqw2nGyE7yM3rcRSzE3U",
        "name" : "Yppah",
        "type" : "artist",
        "uri" : "spotify:artist:3Gaqw2nGyE7yM3rcRSzE3U"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 196000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCFB1002229"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1sotD6Cn8aOtUsL0bd5HTJ"
      },
      "href" : "https://api.spotify.com/v1/tracks/1sotD6Cn8aOtUsL0bd5HTJ",
      "id" : "1sotD6Cn8aOtUsL0bd5HTJ",
      "is_local" : false,
      "name" : "Never Mess With Sunday",
      "popularity" : 47,
      "preview_url" : "https://p.scdn.co/mp3-preview/8665b599fb5f17d3f3807c8e7d02a1bafeb5cea8?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:1sotD6Cn8aOtUsL0bd5HTJ"
    }
  }, {
    "added_at" : "2021-02-16T17:19:48Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0cmWgDlu9CwTgxPhf403hb"
          },
          "href" : "https://api.spotify.com/v1/artists/0cmWgDlu9CwTgxPhf403hb",
          "id" : "0cmWgDlu9CwTgxPhf403hb",
          "name" : "Bonobo",
          "type" : "artist",
          "uri" : "spotify:artist:0cmWgDlu9CwTgxPhf403hb"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6tEOuMrJ6gsmZ2vB2P1NV7"
        },
        "href" : "https://api.spotify.com/v1/albums/6tEOuMrJ6gsmZ2vB2P1NV7",
        "id" : "6tEOuMrJ6gsmZ2vB2P1NV7",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273c46ca7a942d8795a06774df9",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02c46ca7a942d8795a06774df9",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851c46ca7a942d8795a06774df9",
          "width" : 64
        } ],
        "name" : "The North Borders Tour. — Live.",
        "release_date" : "2014-10-06",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:6tEOuMrJ6gsmZ2vB2P1NV7"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0cmWgDlu9CwTgxPhf403hb"
        },
        "href" : "https://api.spotify.com/v1/artists/0cmWgDlu9CwTgxPhf403hb",
        "id" : "0cmWgDlu9CwTgxPhf403hb",
        "name" : "Bonobo",
        "type" : "artist",
        "uri" : "spotify:artist:0cmWgDlu9CwTgxPhf403hb"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 488144,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCFB1404616"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0PHSbSNolQJPl0NWpiDb3U"
      },
      "href" : "https://api.spotify.com/v1/tracks/0PHSbSNolQJPl0NWpiDb3U",
      "id" : "0PHSbSNolQJPl0NWpiDb3U",
      "is_local" : false,
      "name" : "Kong/Ketto - Live",
      "popularity" : 29,
      "preview_url" : "https://p.scdn.co/mp3-preview/fa3625e4e97dec2ffdc107c7600957ee72d4b2d0?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:0PHSbSNolQJPl0NWpiDb3U"
    }
  }, {
    "added_at" : "2021-02-14T18:08:37Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yxi31szvlbwvKq9dYOmFI"
          },
          "href" : "https://api.spotify.com/v1/artists/7yxi31szvlbwvKq9dYOmFI",
          "id" : "7yxi31szvlbwvKq9dYOmFI",
          "name" : "Jon Hopkins",
          "type" : "artist",
          "uri" : "spotify:artist:7yxi31szvlbwvKq9dYOmFI"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1nvzBC1M3dlCMIxfUCBhlO"
        },
        "href" : "https://api.spotify.com/v1/albums/1nvzBC1M3dlCMIxfUCBhlO",
        "id" : "1nvzBC1M3dlCMIxfUCBhlO",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739d9126ec04bb005c687291a5",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029d9126ec04bb005c687291a5",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519d9126ec04bb005c687291a5",
          "width" : 64
        } ],
        "name" : "Singularity",
        "release_date" : "2018-05-04",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:1nvzBC1M3dlCMIxfUCBhlO"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yxi31szvlbwvKq9dYOmFI"
        },
        "href" : "https://api.spotify.com/v1/artists/7yxi31szvlbwvKq9dYOmFI",
        "id" : "7yxi31szvlbwvKq9dYOmFI",
        "name" : "Jon Hopkins",
        "type" : "artist",
        "uri" : "spotify:artist:7yxi31szvlbwvKq9dYOmFI"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 428440,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCEL1700696"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4Hg9jafzzKavElQMAINzeP"
      },
      "href" : "https://api.spotify.com/v1/tracks/4Hg9jafzzKavElQMAINzeP",
      "id" : "4Hg9jafzzKavElQMAINzeP",
      "is_local" : false,
      "name" : "C O S M",
      "popularity" : 40,
      "preview_url" : "https://p.scdn.co/mp3-preview/48e0ddc28b1f196056c966612ea5dd6a590f2c1f?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:4Hg9jafzzKavElQMAINzeP"
    }
  }, {
    "added_at" : "2021-02-14T17:37:48Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yxi31szvlbwvKq9dYOmFI"
          },
          "href" : "https://api.spotify.com/v1/artists/7yxi31szvlbwvKq9dYOmFI",
          "id" : "7yxi31szvlbwvKq9dYOmFI",
          "name" : "Jon Hopkins",
          "type" : "artist",
          "uri" : "spotify:artist:7yxi31szvlbwvKq9dYOmFI"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1nvzBC1M3dlCMIxfUCBhlO"
        },
        "href" : "https://api.spotify.com/v1/albums/1nvzBC1M3dlCMIxfUCBhlO",
        "id" : "1nvzBC1M3dlCMIxfUCBhlO",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739d9126ec04bb005c687291a5",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029d9126ec04bb005c687291a5",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519d9126ec04bb005c687291a5",
          "width" : 64
        } ],
        "name" : "Singularity",
        "release_date" : "2018-05-04",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:1nvzBC1M3dlCMIxfUCBhlO"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yxi31szvlbwvKq9dYOmFI"
        },
        "href" : "https://api.spotify.com/v1/artists/7yxi31szvlbwvKq9dYOmFI",
        "id" : "7yxi31szvlbwvKq9dYOmFI",
        "name" : "Jon Hopkins",
        "type" : "artist",
        "uri" : "spotify:artist:7yxi31szvlbwvKq9dYOmFI"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 630240,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCEL1700694"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3oWBMOzkjjkCmV6abncBUd"
      },
      "href" : "https://api.spotify.com/v1/tracks/3oWBMOzkjjkCmV6abncBUd",
      "id" : "3oWBMOzkjjkCmV6abncBUd",
      "is_local" : false,
      "name" : "Everything Connected",
      "popularity" : 40,
      "preview_url" : "https://p.scdn.co/mp3-preview/b143e3cc635e7a528908aa6be4c51f20fc934eb2?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:3oWBMOzkjjkCmV6abncBUd"
    }
  }, {
    "added_at" : "2021-02-14T16:54:39Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/592TFYwu9Qb0RC1hKDbX2w"
          },
          "href" : "https://api.spotify.com/v1/artists/592TFYwu9Qb0RC1hKDbX2w",
          "id" : "592TFYwu9Qb0RC1hKDbX2w",
          "name" : "Helios",
          "type" : "artist",
          "uri" : "spotify:artist:592TFYwu9Qb0RC1hKDbX2w"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1OF3AnbSDa1ZSEFE7lukTb"
        },
        "href" : "https://api.spotify.com/v1/albums/1OF3AnbSDa1ZSEFE7lukTb",
        "id" : "1OF3AnbSDa1ZSEFE7lukTb",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2738fc59fb3af5be43e27fe4ce1",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e028fc59fb3af5be43e27fe4ce1",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048518fc59fb3af5be43e27fe4ce1",
          "width" : 64
        } ],
        "name" : "Eingya",
        "release_date" : "2009-01-16",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:1OF3AnbSDa1ZSEFE7lukTb"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/592TFYwu9Qb0RC1hKDbX2w"
        },
        "href" : "https://api.spotify.com/v1/artists/592TFYwu9Qb0RC1hKDbX2w",
        "id" : "592TFYwu9Qb0RC1hKDbX2w",
        "name" : "Helios",
        "type" : "artist",
        "uri" : "spotify:artist:592TFYwu9Qb0RC1hKDbX2w"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 361880,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBJSN0600009"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6knzYloG0x3MroAhnLVLGe"
      },
      "href" : "https://api.spotify.com/v1/tracks/6knzYloG0x3MroAhnLVLGe",
      "id" : "6knzYloG0x3MroAhnLVLGe",
      "is_local" : false,
      "name" : "Bless This Morning Year",
      "popularity" : 40,
      "preview_url" : "https://p.scdn.co/mp3-preview/c1ad776d9cd26552d99576d9474c8f1c6c8e27fe?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:6knzYloG0x3MroAhnLVLGe"
    }
  }, {
    "added_at" : "2021-02-12T11:30:08Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/592TFYwu9Qb0RC1hKDbX2w"
          },
          "href" : "https://api.spotify.com/v1/artists/592TFYwu9Qb0RC1hKDbX2w",
          "id" : "592TFYwu9Qb0RC1hKDbX2w",
          "name" : "Helios",
          "type" : "artist",
          "uri" : "spotify:artist:592TFYwu9Qb0RC1hKDbX2w"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/34CpMn9yU8iDcXDaSkrqXu"
        },
        "href" : "https://api.spotify.com/v1/albums/34CpMn9yU8iDcXDaSkrqXu",
        "id" : "34CpMn9yU8iDcXDaSkrqXu",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f2e49606713803f0def17afb",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f2e49606713803f0def17afb",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f2e49606713803f0def17afb",
          "width" : 64
        } ],
        "name" : "Yume",
        "release_date" : "2015-09-11",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:34CpMn9yU8iDcXDaSkrqXu"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/592TFYwu9Qb0RC1hKDbX2w"
        },
        "href" : "https://api.spotify.com/v1/artists/592TFYwu9Qb0RC1hKDbX2w",
        "id" : "592TFYwu9Qb0RC1hKDbX2w",
        "name" : "Helios",
        "type" : "artist",
        "uri" : "spotify:artist:592TFYwu9Qb0RC1hKDbX2w"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 354642,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "DEX261500338"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3EfocVFnZdmxbNb8ALyC0X"
      },
      "href" : "https://api.spotify.com/v1/tracks/3EfocVFnZdmxbNb8ALyC0X",
      "id" : "3EfocVFnZdmxbNb8ALyC0X",
      "is_local" : false,
      "name" : "Yume",
      "popularity" : 21,
      "preview_url" : "https://p.scdn.co/mp3-preview/b6a5cc38391ceac77396ed6af7ee01263ca678ce?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:3EfocVFnZdmxbNb8ALyC0X"
    }
  }, {
    "added_at" : "2021-02-10T18:04:58Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rj2COYs5hQsw8rYIxSviz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rj2COYs5hQsw8rYIxSviz",
          "id" : "4Rj2COYs5hQsw8rYIxSviz",
          "name" : "Hidden Orchestra",
          "type" : "artist",
          "uri" : "spotify:artist:4Rj2COYs5hQsw8rYIxSviz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0nrfkNR7u975aqMt0R1E7n"
        },
        "href" : "https://api.spotify.com/v1/albums/0nrfkNR7u975aqMt0R1E7n",
        "id" : "0nrfkNR7u975aqMt0R1E7n",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2731df785bc2b00a1be5d803e6f",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e021df785bc2b00a1be5d803e6f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048511df785bc2b00a1be5d803e6f",
          "width" : 64
        } ],
        "name" : "Dawn Chorus",
        "release_date" : "2017-06-16",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:0nrfkNR7u975aqMt0R1E7n"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rj2COYs5hQsw8rYIxSviz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rj2COYs5hQsw8rYIxSviz",
        "id" : "4Rj2COYs5hQsw8rYIxSviz",
        "name" : "Hidden Orchestra",
        "type" : "artist",
        "uri" : "spotify:artist:4Rj2COYs5hQsw8rYIxSviz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 351920,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBEUE1700004"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2jSZLKZFC5LclPiao0W1zz"
      },
      "href" : "https://api.spotify.com/v1/tracks/2jSZLKZFC5LclPiao0W1zz",
      "id" : "2jSZLKZFC5LclPiao0W1zz",
      "is_local" : false,
      "name" : "The Lizard",
      "popularity" : 14,
      "preview_url" : "https://p.scdn.co/mp3-preview/0e1519e015cdb9237a6eba0428dc3ef7179f6bc7?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:2jSZLKZFC5LclPiao0W1zz"
    }
  }, {
    "added_at" : "2021-02-10T12:57:29Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0cmWgDlu9CwTgxPhf403hb"
          },
          "href" : "https://api.spotify.com/v1/artists/0cmWgDlu9CwTgxPhf403hb",
          "id" : "0cmWgDlu9CwTgxPhf403hb",
          "name" : "Bonobo",
          "type" : "artist",
          "uri" : "spotify:artist:0cmWgDlu9CwTgxPhf403hb"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6tEOuMrJ6gsmZ2vB2P1NV7"
        },
        "href" : "https://api.spotify.com/v1/albums/6tEOuMrJ6gsmZ2vB2P1NV7",
        "id" : "6tEOuMrJ6gsmZ2vB2P1NV7",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273c46ca7a942d8795a06774df9",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02c46ca7a942d8795a06774df9",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851c46ca7a942d8795a06774df9",
          "width" : 64
        } ],
        "name" : "The North Borders Tour. — Live.",
        "release_date" : "2014-10-06",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:6tEOuMrJ6gsmZ2vB2P1NV7"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0cmWgDlu9CwTgxPhf403hb"
        },
        "href" : "https://api.spotify.com/v1/artists/0cmWgDlu9CwTgxPhf403hb",
        "id" : "0cmWgDlu9CwTgxPhf403hb",
        "name" : "Bonobo",
        "type" : "artist",
        "uri" : "spotify:artist:0cmWgDlu9CwTgxPhf403hb"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 489763,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCFB1404615"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5lcTh4kYshToQMHnlNsxaj"
      },
      "href" : "https://api.spotify.com/v1/tracks/5lcTh4kYshToQMHnlNsxaj",
      "id" : "5lcTh4kYshToQMHnlNsxaj",
      "is_local" : false,
      "name" : "Prelude/Kiara/Ten Tigers - Live",
      "popularity" : 33,
      "preview_url" : "https://p.scdn.co/mp3-preview/51f13199a68b793b87cfc30a78e9df560264bd21?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:5lcTh4kYshToQMHnlNsxaj"
    }
  }, {
    "added_at" : "2021-02-09T15:57:33Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2p2uE4i92Dn4DkThfoKIB9"
          },
          "href" : "https://api.spotify.com/v1/artists/2p2uE4i92Dn4DkThfoKIB9",
          "id" : "2p2uE4i92Dn4DkThfoKIB9",
          "name" : "Igorrr",
          "type" : "artist",
          "uri" : "spotify:artist:2p2uE4i92Dn4DkThfoKIB9"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4hl7ryP7L1SvblrcPRAkpQ"
        },
        "href" : "https://api.spotify.com/v1/albums/4hl7ryP7L1SvblrcPRAkpQ",
        "id" : "4hl7ryP7L1SvblrcPRAkpQ",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273bee3918143b9d6e5571239b4",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02bee3918143b9d6e5571239b4",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851bee3918143b9d6e5571239b4",
          "width" : 64
        } ],
        "name" : "Spirituality and Distortion",
        "release_date" : "2020-03-27",
        "release_date_precision" : "day",
        "total_tracks" : 14,
        "type" : "album",
        "uri" : "spotify:album:4hl7ryP7L1SvblrcPRAkpQ"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2p2uE4i92Dn4DkThfoKIB9"
        },
        "href" : "https://api.spotify.com/v1/artists/2p2uE4i92Dn4DkThfoKIB9",
        "id" : "2p2uE4i92Dn4DkThfoKIB9",
        "name" : "Igorrr",
        "type" : "artist",
        "uri" : "spotify:artist:2p2uE4i92Dn4DkThfoKIB9"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 203186,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USMBR1913984"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0GOytj5zpFRpjGN04FLmHT"
      },
      "href" : "https://api.spotify.com/v1/tracks/0GOytj5zpFRpjGN04FLmHT",
      "id" : "0GOytj5zpFRpjGN04FLmHT",
      "is_local" : false,
      "name" : "Nervous Waltz",
      "popularity" : 38,
      "preview_url" : "https://p.scdn.co/mp3-preview/af61b3d905038e7db4dfad071d0568f13175132e?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:0GOytj5zpFRpjGN04FLmHT"
    }
  }, {
    "added_at" : "2021-01-31T12:23:58Z",
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0iT2o4MNsBKSLy7bllgdo0"
          },
          "href" : "https://api.spotify.com/v1/artists/0iT2o4MNsBKSLy7bllgdo0",
          "id" : "0iT2o4MNsBKSLy7bllgdo0",
          "name" : "Jus Now",
          "type" : "artist",
          "uri" : "spotify:artist:0iT2o4MNsBKSLy7bllgdo0"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6s7bgHlLfKpbb3YT01gfLH"
        },
        "href" : "https://api.spotify.com/v1/albums/6s7bgHlLfKpbb3YT01gfLH",
        "id" : "6s7bgHlLfKpbb3YT01gfLH",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273c66a1f51ed84b8117ae00c76",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02c66a1f51ed84b8117ae00c76",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851c66a1f51ed84b8117ae00c76",
          "width" : 64
        } ],
        "name" : "Cyah Help It",
        "release_date" : "2015-10-16",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:6s7bgHlLfKpbb3YT01gfLH"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0iT2o4MNsBKSLy7bllgdo0"
        },
        "href" : "https://api.spotify.com/v1/artists/0iT2o4MNsBKSLy7bllgdo0",
        "id" : "0iT2o4MNsBKSLy7bllgdo0",
        "name" : "Jus Now",
        "type" : "artist",
        "uri" : "spotify:artist:0iT2o4MNsBKSLy7bllgdo0"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/42qLC3FgtazA9AvaIoiP62"
        },
        "href" : "https://api.spotify.com/v1/artists/42qLC3FgtazA9AvaIoiP62",
        "id" : "42qLC3FgtazA9AvaIoiP62",
        "name" : "Ms. Dynamite",
        "type" : "artist",
        "uri" : "spotify:artist:42qLC3FgtazA9AvaIoiP62"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6nPHDCN7qmxO86eN1grP54"
        },
        "href" : "https://api.spotify.com/v1/artists/6nPHDCN7qmxO86eN1grP54",
        "id" : "6nPHDCN7qmxO86eN1grP54",
        "name" : "Bunji Garlin",
        "type" : "artist",
        "uri" : "spotify:artist:6nPHDCN7qmxO86eN1grP54"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 188442,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GB9TP1500480"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7M5GI36F8By0vFycdQ4pke"
      },
      "href" : "https://api.spotify.com/v1/tracks/7M5GI36F8By0vFycdQ4pke",
      "id" : "7M5GI36F8By0vFycdQ4pke",
      "is_local" : false,
      "name" : "Cyah Help It",
      "popularity" : 5,
      "preview_url" : "https://p.scdn.co/mp3-preview/fdbe06d7d3dadab133161dd9edc16a45bdb40588?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:7M5GI36F8By0vFycdQ4pke"
    }
  }, {
    "added_at" : "2021-01-30T18:38:52Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/57dN52uHvrHOxijzpIgu3E"
          },
          "href" : "https://api.spotify.com/v1/artists/57dN52uHvrHOxijzpIgu3E",
          "id" : "57dN52uHvrHOxijzpIgu3E",
          "name" : "Ratatat",
          "type" : "artist",
          "uri" : "spotify:artist:57dN52uHvrHOxijzpIgu3E"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/7nqSnoxmIdcfxAJBxl9AIh"
        },
        "href" : "https://api.spotify.com/v1/albums/7nqSnoxmIdcfxAJBxl9AIh",
        "id" : "7nqSnoxmIdcfxAJBxl9AIh",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2731e86a07cda05a74debfd1ac2",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e021e86a07cda05a74debfd1ac2",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048511e86a07cda05a74debfd1ac2",
          "width" : 64
        } ],
        "name" : "Ratatat",
        "release_date" : "2004-04-19",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:7nqSnoxmIdcfxAJBxl9AIh"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/57dN52uHvrHOxijzpIgu3E"
        },
        "href" : "https://api.spotify.com/v1/artists/57dN52uHvrHOxijzpIgu3E",
        "id" : "57dN52uHvrHOxijzpIgu3E",
        "name" : "Ratatat",
        "type" : "artist",
        "uri" : "spotify:artist:57dN52uHvrHOxijzpIgu3E"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 338333,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBBKS0300144"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6zgCycfVETCfk2TNY7Othq"
      },
      "href" : "https://api.spotify.com/v1/tracks/6zgCycfVETCfk2TNY7Othq",
      "id" : "6zgCycfVETCfk2TNY7Othq",
      "is_local" : false,
      "name" : "Cherry",
      "popularity" : 43,
      "preview_url" : "https://p.scdn.co/mp3-preview/41d5c31eb71c5058cef3252efed3f0c09f0f37d4?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:6zgCycfVETCfk2TNY7Othq"
    }
  }, {
    "added_at" : "2021-01-27T18:49:55Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/31DXlldabwPHwu6dYevuzK"
          },
          "href" : "https://api.spotify.com/v1/artists/31DXlldabwPHwu6dYevuzK",
          "id" : "31DXlldabwPHwu6dYevuzK",
          "name" : "Simian Mobile Disco",
          "type" : "artist",
          "uri" : "spotify:artist:31DXlldabwPHwu6dYevuzK"
        } ],
        "available_markets" : [ "AD", "AG", "AL", "AR", "AT", "AU", "BA", "BB", "BE", "BF", "BG", "BI", "BO", "BR", "BS", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "IE", "IS", "IT", "JM", "KE", "KI", "KM", "KN", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MR", "MT", "MW", "MX", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "PA", "PE", "PG", "PL", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TN", "TO", "TT", "TV", "TZ", "UA", "UG", "US", "UY", "VC", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3k0xfQP6xY8DinupXsBohl"
        },
        "href" : "https://api.spotify.com/v1/albums/3k0xfQP6xY8DinupXsBohl",
        "id" : "3k0xfQP6xY8DinupXsBohl",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273110bd6379d030aaf1d418329",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02110bd6379d030aaf1d418329",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851110bd6379d030aaf1d418329",
          "width" : 64
        } ],
        "name" : "Whorl",
        "release_date" : "2014-09-09",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:3k0xfQP6xY8DinupXsBohl"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/31DXlldabwPHwu6dYevuzK"
        },
        "href" : "https://api.spotify.com/v1/artists/31DXlldabwPHwu6dYevuzK",
        "id" : "31DXlldabwPHwu6dYevuzK",
        "name" : "Simian Mobile Disco",
        "type" : "artist",
        "uri" : "spotify:artist:31DXlldabwPHwu6dYevuzK"
      } ],
      "available_markets" : [ "AD", "AG", "AL", "AR", "AT", "AU", "BA", "BB", "BE", "BF", "BG", "BI", "BO", "BR", "BS", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "IE", "IS", "IT", "JM", "KE", "KI", "KM", "KN", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MR", "MT", "MW", "MX", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "PA", "PE", "PG", "PL", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TN", "TO", "TT", "TV", "TZ", "UA", "UG", "US", "UY", "VC", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 446546,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USEP41413003"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/04MkvmxBIw2rzP1Q96QOWl"
      },
      "href" : "https://api.spotify.com/v1/tracks/04MkvmxBIw2rzP1Q96QOWl",
      "id" : "04MkvmxBIw2rzP1Q96QOWl",
      "is_local" : false,
      "name" : "Sun Dogs",
      "popularity" : 10,
      "preview_url" : "https://p.scdn.co/mp3-preview/6178e959b7acb38b970d1d496adc74ab8f261e65?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:04MkvmxBIw2rzP1Q96QOWl"
    }
  }, {
    "added_at" : "2021-01-24T21:56:40Z",
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4S8XZ6FgGp5KKwymL8E6Hz"
          },
          "href" : "https://api.spotify.com/v1/artists/4S8XZ6FgGp5KKwymL8E6Hz",
          "id" : "4S8XZ6FgGp5KKwymL8E6Hz",
          "name" : "Enduser",
          "type" : "artist",
          "uri" : "spotify:artist:4S8XZ6FgGp5KKwymL8E6Hz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3HZiO8N7WZynVwQdrhhifV"
        },
        "href" : "https://api.spotify.com/v1/albums/3HZiO8N7WZynVwQdrhhifV",
        "id" : "3HZiO8N7WZynVwQdrhhifV",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27389e0f04eb1d3afe7281739ce",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0289e0f04eb1d3afe7281739ce",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485189e0f04eb1d3afe7281739ce",
          "width" : 64
        } ],
        "name" : "1-3",
        "release_date" : "2019-02-09",
        "release_date_precision" : "day",
        "total_tracks" : 5,
        "type" : "album",
        "uri" : "spotify:album:3HZiO8N7WZynVwQdrhhifV"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4S8XZ6FgGp5KKwymL8E6Hz"
        },
        "href" : "https://api.spotify.com/v1/artists/4S8XZ6FgGp5KKwymL8E6Hz",
        "id" : "4S8XZ6FgGp5KKwymL8E6Hz",
        "name" : "Enduser",
        "type" : "artist",
        "uri" : "spotify:artist:4S8XZ6FgGp5KKwymL8E6Hz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 357485,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QZ5FN1940636"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3cFxBXjTOuUiOxnH0tpZe4"
      },
      "href" : "https://api.spotify.com/v1/tracks/3cFxBXjTOuUiOxnH0tpZe4",
      "id" : "3cFxBXjTOuUiOxnH0tpZe4",
      "is_local" : false,
      "name" : "2-3",
      "popularity" : 16,
      "preview_url" : "https://p.scdn.co/mp3-preview/532604d94feb7cee6927b4c96b52afe31f70c33b?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:3cFxBXjTOuUiOxnH0tpZe4"
    }
  }, {
    "added_at" : "2021-01-24T19:49:54Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
          "id" : "4Rcol4u0q89lypqKI83GDz",
          "name" : "Polynation",
          "type" : "artist",
          "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5kU3Q43bmLdARkMOCOLNkB"
        },
        "href" : "https://api.spotify.com/v1/albums/5kU3Q43bmLdARkMOCOLNkB",
        "id" : "5kU3Q43bmLdARkMOCOLNkB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2733caf395cb159288678e3fd65",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e023caf395cb159288678e3fd65",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048513caf395cb159288678e3fd65",
          "width" : 64
        } ],
        "name" : "Igneous",
        "release_date" : "2019-05-10",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:5kU3Q43bmLdARkMOCOLNkB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 317500,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLC7F1900018"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0kYQbZQqpZkACY7IJGl343"
      },
      "href" : "https://api.spotify.com/v1/tracks/0kYQbZQqpZkACY7IJGl343",
      "id" : "0kYQbZQqpZkACY7IJGl343",
      "is_local" : false,
      "name" : "Kali",
      "popularity" : 21,
      "preview_url" : "https://p.scdn.co/mp3-preview/0bfa262d70b4d98f4667e56c84266b1d5fa65ae8?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:0kYQbZQqpZkACY7IJGl343"
    }
  }, {
    "added_at" : "2021-01-22T20:54:11Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id" : "0LyfQWJT6nXafLPZqxe9Of",
          "name" : "Various Artists",
          "type" : "artist",
          "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        } ],
        "available_markets" : [ "AD", "AE", "AM", "AR", "AT", "AU", "AZ", "BA", "BE", "BG", "BH", "BN", "BO", "BR", "BY", "CA", "CH", "CL", "CM", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GN", "GR", "GT", "GW", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KG", "KH", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MO", "MT", "MX", "MY", "NG", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SE", "SG", "SI", "SK", "SN", "SV", "TH", "TN", "TR", "TW", "TZ", "UA", "US", "UZ", "VN", "XK", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2oNWwPYsrEZuZ3siifa633"
        },
        "href" : "https://api.spotify.com/v1/albums/2oNWwPYsrEZuZ3siifa633",
        "id" : "2oNWwPYsrEZuZ3siifa633",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273479a0d67f9d3a2a4e2addd9f",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02479a0d67f9d3a2a4e2addd9f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851479a0d67f9d3a2a4e2addd9f",
          "width" : 64
        } ],
        "name" : "Treme: Music From The HBO Original Series - Season 2",
        "release_date" : "2012-01-01",
        "release_date_precision" : "day",
        "total_tracks" : 18,
        "type" : "album",
        "uri" : "spotify:album:2oNWwPYsrEZuZ3siifa633"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/53pHwg1sjhqGk726JnJHYb"
        },
        "href" : "https://api.spotify.com/v1/artists/53pHwg1sjhqGk726JnJHYb",
        "id" : "53pHwg1sjhqGk726JnJHYb",
        "name" : "Donald Harrison",
        "type" : "artist",
        "uri" : "spotify:artist:53pHwg1sjhqGk726JnJHYb"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/44gLY8zUnF4xRzi4X0zl1n"
        },
        "href" : "https://api.spotify.com/v1/artists/44gLY8zUnF4xRzi4X0zl1n",
        "id" : "44gLY8zUnF4xRzi4X0zl1n",
        "name" : "Carl Allen",
        "type" : "artist",
        "uri" : "spotify:artist:44gLY8zUnF4xRzi4X0zl1n"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3b1iAUluGgKbthmqGckbPn"
        },
        "href" : "https://api.spotify.com/v1/artists/3b1iAUluGgKbthmqGckbPn",
        "id" : "3b1iAUluGgKbthmqGckbPn",
        "name" : "Leon \"Kid Chocolate\" Brown",
        "type" : "artist",
        "uri" : "spotify:artist:3b1iAUluGgKbthmqGckbPn"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6TvhNLU4Wtptdh1m9XcE0j"
        },
        "href" : "https://api.spotify.com/v1/artists/6TvhNLU4Wtptdh1m9XcE0j",
        "id" : "6TvhNLU4Wtptdh1m9XcE0j",
        "name" : "Rob Brown",
        "type" : "artist",
        "uri" : "spotify:artist:6TvhNLU4Wtptdh1m9XcE0j"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4wnzivx3OQ3vjrySAdTdJP"
        },
        "href" : "https://api.spotify.com/v1/artists/4wnzivx3OQ3vjrySAdTdJP",
        "id" : "4wnzivx3OQ3vjrySAdTdJP",
        "name" : "Ron Carter",
        "type" : "artist",
        "uri" : "spotify:artist:4wnzivx3OQ3vjrySAdTdJP"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/320TrJub4arztwXRm7kqVO"
        },
        "href" : "https://api.spotify.com/v1/artists/320TrJub4arztwXRm7kqVO",
        "id" : "320TrJub4arztwXRm7kqVO",
        "name" : "Dr. John",
        "type" : "artist",
        "uri" : "spotify:artist:320TrJub4arztwXRm7kqVO"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0xVjTHsSeU2B3DGMjJ3KFy"
        },
        "href" : "https://api.spotify.com/v1/artists/0xVjTHsSeU2B3DGMjJ3KFy",
        "id" : "0xVjTHsSeU2B3DGMjJ3KFy",
        "name" : "Clarke Peters",
        "type" : "artist",
        "uri" : "spotify:artist:0xVjTHsSeU2B3DGMjJ3KFy"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7E4MQbO3PckmL7W01Cnnrd"
        },
        "href" : "https://api.spotify.com/v1/artists/7E4MQbO3PckmL7W01Cnnrd",
        "id" : "7E4MQbO3PckmL7W01Cnnrd",
        "name" : "Alfred “Uganda” Roberts",
        "type" : "artist",
        "uri" : "spotify:artist:7E4MQbO3PckmL7W01Cnnrd"
      } ],
      "available_markets" : [ "AD", "AE", "AM", "AR", "AT", "AU", "AZ", "BA", "BE", "BG", "BH", "BN", "BO", "BR", "BY", "CA", "CH", "CL", "CM", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GN", "GR", "GT", "GW", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KG", "KH", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MO", "MT", "MX", "MY", "NG", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SE", "SG", "SI", "SK", "SN", "SV", "TH", "TN", "TR", "TW", "TZ", "UA", "US", "UZ", "VN", "XK", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 324253,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USRO21213017"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2dPAL09IadQJ7mMpTJ45w3"
      },
      "href" : "https://api.spotify.com/v1/tracks/2dPAL09IadQJ7mMpTJ45w3",
      "id" : "2dPAL09IadQJ7mMpTJ45w3",
      "is_local" : false,
      "name" : "Hu Ta Nay",
      "popularity" : 17,
      "preview_url" : "https://p.scdn.co/mp3-preview/b6df8cf66f2bd0142b1ab865b6a41d6b311282c0?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 17,
      "type" : "track",
      "uri" : "spotify:track:2dPAL09IadQJ7mMpTJ45w3"
    }
  }, {
    "added_at" : "2021-01-06T19:31:55Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id" : "0LyfQWJT6nXafLPZqxe9Of",
          "name" : "Various Artists",
          "type" : "artist",
          "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2vx34tJFXMnjT9vKEVtcKI"
        },
        "href" : "https://api.spotify.com/v1/albums/2vx34tJFXMnjT9vKEVtcKI",
        "id" : "2vx34tJFXMnjT9vKEVtcKI",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27389fdc1ec5668fdd29a5960cc",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0289fdc1ec5668fdd29a5960cc",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485189fdc1ec5668fdd29a5960cc",
          "width" : 64
        } ],
        "name" : "SOMEWHERE",
        "release_date" : "2015-08-28",
        "release_date_precision" : "day",
        "total_tracks" : 7,
        "type" : "album",
        "uri" : "spotify:album:2vx34tJFXMnjT9vKEVtcKI"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 526646,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "DEU671502315"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/72Gko345HYQu6gI3DWAZfL"
      },
      "href" : "https://api.spotify.com/v1/tracks/72Gko345HYQu6gI3DWAZfL",
      "id" : "72Gko345HYQu6gI3DWAZfL",
      "is_local" : false,
      "name" : "Anther",
      "popularity" : 32,
      "preview_url" : "https://p.scdn.co/mp3-preview/9e9135d80b5ea310841c051007a7a3d2c6f00892?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:72Gko345HYQu6gI3DWAZfL"
    }
  }, {
    "added_at" : "2021-01-06T19:21:31Z",
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
          "id" : "4Rcol4u0q89lypqKI83GDz",
          "name" : "Polynation",
          "type" : "artist",
          "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2uJG5GCaZTwP3z1tkgAG6P"
        },
        "href" : "https://api.spotify.com/v1/albums/2uJG5GCaZTwP3z1tkgAG6P",
        "id" : "2uJG5GCaZTwP3z1tkgAG6P",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2737449d8b759c6f6acc1d1757a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e027449d8b759c6f6acc1d1757a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048517449d8b759c6f6acc1d1757a",
          "width" : 64
        } ],
        "name" : "Humming",
        "release_date" : "2020-12-18",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:2uJG5GCaZTwP3z1tkgAG6P"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 205000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLC7F2000102"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4dcqNrCh3Atf4ylrvFxKoG"
      },
      "href" : "https://api.spotify.com/v1/tracks/4dcqNrCh3Atf4ylrvFxKoG",
      "id" : "4dcqNrCh3Atf4ylrvFxKoG",
      "is_local" : false,
      "name" : "Humming",
      "popularity" : 26,
      "preview_url" : "https://p.scdn.co/mp3-preview/585c838b959f3a81e27ff214e92b2026e737d803?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:4dcqNrCh3Atf4ylrvFxKoG"
    }
  }, {
    "added_at" : "2021-01-06T19:16:04Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
          "id" : "4Rcol4u0q89lypqKI83GDz",
          "name" : "Polynation",
          "type" : "artist",
          "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5kU3Q43bmLdARkMOCOLNkB"
        },
        "href" : "https://api.spotify.com/v1/albums/5kU3Q43bmLdARkMOCOLNkB",
        "id" : "5kU3Q43bmLdARkMOCOLNkB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2733caf395cb159288678e3fd65",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e023caf395cb159288678e3fd65",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048513caf395cb159288678e3fd65",
          "width" : 64
        } ],
        "name" : "Igneous",
        "release_date" : "2019-05-10",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:5kU3Q43bmLdARkMOCOLNkB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 397295,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLC7F1900023"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/05Ps8wHwPh5Ut5EfcIgxPZ"
      },
      "href" : "https://api.spotify.com/v1/tracks/05Ps8wHwPh5Ut5EfcIgxPZ",
      "id" : "05Ps8wHwPh5Ut5EfcIgxPZ",
      "is_local" : false,
      "name" : "Toba",
      "popularity" : 35,
      "preview_url" : "https://p.scdn.co/mp3-preview/79a2296ebb2e66367826caf9ab37c61c12d4bea5?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:05Ps8wHwPh5Ut5EfcIgxPZ"
    }
  }, {
    "added_at" : "2021-01-06T19:12:38Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
          "id" : "4Rcol4u0q89lypqKI83GDz",
          "name" : "Polynation",
          "type" : "artist",
          "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5kU3Q43bmLdARkMOCOLNkB"
        },
        "href" : "https://api.spotify.com/v1/albums/5kU3Q43bmLdARkMOCOLNkB",
        "id" : "5kU3Q43bmLdARkMOCOLNkB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2733caf395cb159288678e3fd65",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e023caf395cb159288678e3fd65",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048513caf395cb159288678e3fd65",
          "width" : 64
        } ],
        "name" : "Igneous",
        "release_date" : "2019-05-10",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:5kU3Q43bmLdARkMOCOLNkB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 216695,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLC7F1900022"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6fiJKbCHyA0BEzhI2Lt3Wr"
      },
      "href" : "https://api.spotify.com/v1/tracks/6fiJKbCHyA0BEzhI2Lt3Wr",
      "id" : "6fiJKbCHyA0BEzhI2Lt3Wr",
      "is_local" : false,
      "name" : "Lory",
      "popularity" : 41,
      "preview_url" : "https://p.scdn.co/mp3-preview/176a1b1fb32024829bf5ff4e19c3d7810f996fd8?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:6fiJKbCHyA0BEzhI2Lt3Wr"
    }
  }, {
    "added_at" : "2021-01-06T18:12:48Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/46iJ1VD4HKFnqjISGqlZkV"
          },
          "href" : "https://api.spotify.com/v1/artists/46iJ1VD4HKFnqjISGqlZkV",
          "id" : "3",
          "name" : "Covet",
          "type" : "artist",
          "uri" : "spotify:artist:46iJ1VD4HKFnqjISGqlZkV"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3ouZZp6tCRElZLb4Qe0KVR"
        },
        "href" : "https://api.spotify.com/v1/albums/3ouZZp6tCRElZLb4Qe0KVR",
        "id" : "3ouZZp6tCRElZLb4Qe0KVR",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273fc825d57fe8933e012c2ad62",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02fc825d57fe8933e012c2ad62",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851fc825d57fe8933e012c2ad62",
          "width" : 64
        } ],
        "name" : "technicolor",
        "release_date" : "2020-06-05",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:3ouZZp6tCRElZLb4Qe0KVR"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/46iJ1VD4HKFnqjISGqlZkV"
        },
        "href" : "https://api.spotify.com/v1/artists/46iJ1VD4HKFnqjISGqlZkV",
        "id" : "46iJ1VD4HKFnqjISGqlZkV",
        "name" : "Covet",
        "type" : "artist",
        "uri" : "spotify:artist:46iJ1VD4HKFnqjISGqlZkV"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 281000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US72W2024109"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2QLKBeYnQ3Mh7a9kCPQVIG"
      },
      "href" : "https://api.spotify.com/v1/tracks/2QLKBeYnQ3Mh7a9kCPQVIG",
      "id" : "2QLKBeYnQ3Mh7a9kCPQVIG",
      "is_local" : false,
      "name" : "parrot",
      "popularity" : 32,
      "preview_url" : "https://p.scdn.co/mp3-preview/26d614141c6fb07a757ff664864df107fcf5531c?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:2QLKBeYnQ3Mh7a9kCPQVIG"
    }
  }, {
    "added_at" : "2021-01-02T23:54:07Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
          },
          "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
          "id" : "2DlKh1IzbG3EwAMaTF2p4A",
          "name" : "Inferi",
          "type" : "artist",
          "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/621sN6b7GCpWpzaSidA5Ir"
        },
        "href" : "https://api.spotify.com/v1/albums/621sN6b7GCpWpzaSidA5Ir",
        "id" : "621sN6b7GCpWpzaSidA5Ir",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f5e1ee8deb0e691a68d29045",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f5e1ee8deb0e691a68d29045",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f5e1ee8deb0e691a68d29045",
          "width" : 64
        } ],
        "name" : "The Path of Apotheosis",
        "release_date" : "2014-01-26",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:621sN6b7GCpWpzaSidA5Ir"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
        "id" : "2DlKh1IzbG3EwAMaTF2p4A",
        "name" : "Inferi",
        "type" : "artist",
        "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 381680,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABS1379686"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/70uk9oYGwoQBybR63uvfZf"
      },
      "href" : "https://api.spotify.com/v1/tracks/70uk9oYGwoQBybR63uvfZf",
      "id" : "70uk9oYGwoQBybR63uvfZf",
      "is_local" : false,
      "name" : "Onslaught of the Covenant",
      "popularity" : 21,
      "preview_url" : "https://p.scdn.co/mp3-preview/b1dba2004d20b29a43b67ce791f46ebb1730ac52?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:70uk9oYGwoQBybR63uvfZf"
    }
  }, {
    "added_at" : "2021-01-02T23:39:08Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
          },
          "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
          "id" : "2DlKh1IzbG3EwAMaTF2p4A",
          "name" : "Inferi",
          "type" : "artist",
          "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/621sN6b7GCpWpzaSidA5Ir"
        },
        "href" : "https://api.spotify.com/v1/albums/621sN6b7GCpWpzaSidA5Ir",
        "id" : "621sN6b7GCpWpzaSidA5Ir",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f5e1ee8deb0e691a68d29045",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f5e1ee8deb0e691a68d29045",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f5e1ee8deb0e691a68d29045",
          "width" : 64
        } ],
        "name" : "The Path of Apotheosis",
        "release_date" : "2014-01-26",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:621sN6b7GCpWpzaSidA5Ir"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
        "id" : "2DlKh1IzbG3EwAMaTF2p4A",
        "name" : "Inferi",
        "type" : "artist",
        "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 384920,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABS1379685"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3PRxPB1T7BBpmeXA7xeoHo"
      },
      "href" : "https://api.spotify.com/v1/tracks/3PRxPB1T7BBpmeXA7xeoHo",
      "id" : "3PRxPB1T7BBpmeXA7xeoHo",
      "is_local" : false,
      "name" : "Destroyer",
      "popularity" : 26,
      "preview_url" : "https://p.scdn.co/mp3-preview/fd38c9a25c5533e6a079668d2125c5461b963133?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:3PRxPB1T7BBpmeXA7xeoHo"
    }
  }, {
    "added_at" : "2020-12-31T20:15:12Z",
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
          "id" : "4Rcol4u0q89lypqKI83GDz",
          "name" : "Polynation",
          "type" : "artist",
          "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/515MsUrwyO1ui5mvvJ98J0"
        },
        "href" : "https://api.spotify.com/v1/albums/515MsUrwyO1ui5mvvJ98J0",
        "id" : "515MsUrwyO1ui5mvvJ98J0",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27301878f5cb411afac948511ce",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0201878f5cb411afac948511ce",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485101878f5cb411afac948511ce",
          "width" : 64
        } ],
        "name" : "Muriatic",
        "release_date" : "2018-03-16",
        "release_date_precision" : "day",
        "total_tracks" : 2,
        "type" : "album",
        "uri" : "spotify:album:515MsUrwyO1ui5mvvJ98J0"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 237777,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLC7F1800014"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6e3cIvk5s4mWmONbZEannO"
      },
      "href" : "https://api.spotify.com/v1/tracks/6e3cIvk5s4mWmONbZEannO",
      "id" : "6e3cIvk5s4mWmONbZEannO",
      "is_local" : false,
      "name" : "Muriatic",
      "popularity" : 19,
      "preview_url" : "https://p.scdn.co/mp3-preview/5f0a3e143f59ad9d64ffc5dbe764721acfb4bf9d?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:6e3cIvk5s4mWmONbZEannO"
    }
  }, {
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
  }, {
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
  } ],
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

export const artistsMock: Artist[] = addSelectedProperty(artistData);
export const tracksMock: TrackItem[] = trackData.items;
export const playlistMock: PlaylistData = playlistData.data;
export const genresMock: GenreDb = generateGenres(artistsMock);