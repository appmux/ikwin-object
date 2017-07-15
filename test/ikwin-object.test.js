/* global describe, it */

'use strict'

const assert = require('assert')
const objexp = require('../lib/ikwin-object.js').default


describe('objexp', function () {
    const data = gettestData()

    it('should match', function () {
        assert.notEqual(undefined, objexp(data['source1']).match(data['sample2']))
    })

    it('should validate', function () {
        assert.equal(0, objexp(data['source2'].data).validate(data['sample1']).length)
    })

    it('should not validate', function () {
        assert.equal(0, objexp(data['source1']).validate(data['sample1']).indexOf('items'))
    })
})

function gettestData() {
  return {
    source1: {
      "cms": {
        "global": {
          "header": {
            "navigation": {
              "logo": {
                "imageUri": "https://cdn11.example.com/images/logo.jpg",
                "imageHdUri": "https://cdn11.example.com/images/logo-hd.jpg",
                "alt": "ACME Corp.",
                "link": "/"
              },
              "menu": {}
            }
          },
          "footer": {
            "socialMedia": [
              {
                "name": "twitterUri",
                "uri": "https://example.com/twitter",
                "font": {
                  "name": "glyph-font.wof",
                  "code": ""
                },
                "youtubeUri": "https://exampler.com/youtube",
                "facebookUri": "https://exampler.com/facebook",
                "linkedinUri": "https://exampler.com/linkedin"
              }
            ]
          }
        }
      }
    },

    source2: {
      "data": {
        "kind": "Item",
        "items": [
          {
            "item_id": "f18da9ec-4f82-4bf1-acee-343862178421",
            "item_name": "Item One"
          },
          {
            "item_id": "b0532a03-3996-473c-89e0-f7948c830200",
            "item_name": "Item Two"
          },
          {
            "item_id": "8fa93d34-76de-4559-a602-5ef674578dc3",
            "item_name": "Item Three"
          },
          {
            "item_id": "8937cb21-910c-4023-95ae-f164d649e5b1",
            "item_name": "Item Four"
          },
          {
            "item_id": "0bdab395-a754-4e14-ab9a-cbd585c5c659",
            "item_name": "Item FIve"
          }
        ]
      }
    },

    sample1: {items: [{item_id: '', item_name: ''}]},

    sample2: {
      "navigation": {
        "logo": {},
        "menu": {}
      }
    }
  }
}
