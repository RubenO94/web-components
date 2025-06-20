// Programmatically created by wraplib.js
if (window.MIDI) {
  console.log('wrapper: window.MIDI exists; exporting it.');
} else {
  function wrap() {
    !(function (e, t) {
      'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define('MIDI', [], t)
        : 'object' == typeof exports
        ? (exports.MIDI = t())
        : (e.MIDI = t());
    })(this, function () {
      return (function (e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var o = (n[r] = { exports: {}, id: r, loaded: !1 });
          return (
            e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
          );
        }
        var n = {};
        return (t.m = e), (t.c = n), (t.p = ''), t(0);
      })([
        function (e, t, n) {
          e.exports = n(1);
        },
        function (e, t, n) {
          'use strict';
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, '__esModule', { value: !0 });
          var o = n(2),
            a = r(o);
          n(3),
            n(8),
            n(9),
            n(14),
            (window.MIDI = a['default']),
            (t['default'] = a['default']),
            (e.exports = t['default']);
        },
        function (e, t) {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t['default'] = {}),
            (e.exports = t['default']);
        },
        function (e, t, n) {
          'use strict';
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var o =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  },
            a = n(4),
            i = n(2),
            u = r(i);
          (u['default'].Soundfont = {}),
            (u['default'].DEBUG = !0),
            (u['default'].USE_XHR = !0),
            (u['default'].soundfontUrl = './soundfont/'),
            (u['default'].loadPlugin = function (e) {
              'function' == typeof e && (e = { onsuccess: e }),
                (u['default'].soundfontUrl =
                  e.soundfontUrl || u['default'].soundfontUrl),
                (0, a.audioDetect)(function (t) {
                  var n = window.location.hash,
                    r = '';
                  if (
                    (t[e.api]
                      ? (r = e.api)
                      : t[n.substr(1)]
                      ? (r = n.substr(1))
                      : t.webmidi
                      ? (r = 'webmidi')
                      : window.AudioContext
                      ? (r = 'webaudio')
                      : window.Audio && (r = 'audiotag'),
                    s[r])
                  ) {
                    var o = void 0;
                    (o = e.targetFormat
                      ? e.targetFormat
                      : t['audio/ogg']
                      ? 'ogg'
                      : 'mp3'),
                      (u['default'].__api = r),
                      (u['default'].__audioFormat = o),
                      (u['default'].supports = t),
                      u['default'].loadResource(e);
                  }
                });
            }),
            (u['default'].loadResource = function (e) {
              var t = e.instruments || e.instrument || 'acoustic_grand_piano';
              'object' !== ('undefined' == typeof t ? 'undefined' : o(t)) &&
                (t = t || 0 === t ? [t] : []);
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r === +r &&
                  u['default'].GM.byId[r] &&
                  (t[n] = u['default'].GM.byId[r].id);
              }
              (e.format = u['default'].__audioFormat),
                (e.instruments = t),
                s[u['default'].__api](e);
            });
          var s = {
              webmidi: function (e) {
                u['default'].WebMIDI.connect(e);
              },
              audiotag: function (e) {
                c(e, 'AudioTag');
              },
              webaudio: function (e) {
                c(e, 'WebAudio');
              },
            },
            c = function (e, t) {
              for (
                var n = e.format,
                  r = e.instruments,
                  o = e.onprogress,
                  a = e.onerror,
                  i = r.length,
                  s = i,
                  c = function () {
                    --s || (o && o('load', 1), u['default'][t].connect(e));
                  },
                  d = 0;
                d < i;
                d++
              ) {
                var f = r[d];
                u['default'].Soundfont[f]
                  ? c()
                  : l(
                      r[d],
                      n,
                      function (e, t) {
                        var n = t / i,
                          r = (i - s) / i;
                        o && o('load', n + r, f);
                      },
                      function () {
                        c();
                      },
                      a
                    );
              }
            },
            l = function (e, t, n, r, o) {
              var i = u['default'].soundfontUrl + e + '-' + t + '.js';
              u['default'].USE_XHR
                ? (0, a.request)({
                    url: i,
                    format: 'text',
                    onerror: o,
                    onprogress: n,
                    onsuccess: function (e, t) {
                      var n = document.createElement('script');
                      (n.language = 'javascript'),
                        (n.type = 'text/javascript'),
                        (n.text = t),
                        document.body.appendChild(n),
                        r();
                    },
                  })
                : a.loadScript.add({
                    url: i,
                    verify: 'root.Soundfont["' + e + '"]',
                    onerror: o,
                    onsuccess: function () {
                      r();
                    },
                  });
            };
          u['default'].setDefaultPlugin = function (e) {
            for (var t in e) u['default'][t] = e[t];
          };
        },
        function (e, t, n) {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          var r = n(5);
          Object.keys(r).forEach(function (e) {
            'default' !== e &&
              '__esModule' !== e &&
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return r[e];
                },
              });
          });
          var o = n(6);
          Object.keys(o).forEach(function (e) {
            'default' !== e &&
              '__esModule' !== e &&
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return o[e];
                },
              });
          });
          var a = n(7);
          Object.keys(a).forEach(function (e) {
            'default' !== e &&
              '__esModule' !== e &&
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return a[e];
                },
              });
          });
        },
        function (e, t) {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          var n = {},
            r = 0,
            o = function (e) {
              r++;
              var t = document.body,
                o = new window.Audio(),
                a = e.split(';')[0];
              (o.id = 'audio'),
                o.setAttribute('preload', 'auto'),
                o.setAttribute('audiobuffer', !0),
                o.addEventListener(
                  'error',
                  function () {
                    t.removeChild(o), (n[a] = !1), r--;
                  },
                  !1
                ),
                o.addEventListener(
                  'canplaythrough',
                  function () {
                    t.removeChild(o), (n[a] = !0), r--;
                  },
                  !1
                ),
                (o.src = 'data:' + e),
                t.appendChild(o);
            };
          t.audioDetect = function (e) {
            if (navigator.requestMIDIAccess) {
              var t = Function.prototype.toString
                .call(navigator.requestMIDIAccess)
                .indexOf('[native code]');
              if (t) n.webmidi = !0;
              else
                for (var a = 0; navigator.plugins.length > a; a++) {
                  var i = navigator.plugins[a];
                  i.name.indexOf('Jazz-Plugin') >= 0 && (n.webmidi = !0);
                }
            }
            if ('undefined' == typeof window.Audio) return e({});
            (n.audiotag = !0),
              (window.AudioContext || window.webkitAudioContext) &&
                (n.webaudio = !0);
            var u = new window.Audio();
            if ('undefined' == typeof u.canPlayType) return e(n);
            var s = u.canPlayType('audio/ogg; codecs="vorbis"');
            s = 'probably' === s || 'maybe' === s;
            var c = u.canPlayType('audio/mpeg');
            if (((c = 'probably' === c || 'maybe' === c), !s && !c))
              return void e(n);
            s &&
              o(
                'audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA='
              ),
              c &&
                o(
                  'audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'
                );
            var l = new Date().getTime(),
              d = window.setInterval(function () {
                var t = new Date().getTime(),
                  o = t - l > 5e3;
                (r && !o) || (window.clearInterval(d), e(n));
              }, 1);
          };
        },
        function (e, t) {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          var n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  },
            r = function (e, t) {
              try {
                e = e
                  .split('"')
                  .join('')
                  .split("'")
                  .join('')
                  .split(']')
                  .join('')
                  .split('[')
                  .join('.');
                for (
                  var n = e.split('.'), r = n.length, o = t || window, a = 0;
                  a < r;
                  a++
                ) {
                  var i = n[a];
                  if (null == o[i]) return !1;
                  o = o[i];
                }
                return !0;
              } catch (u) {
                return !1;
              }
            },
            o = function () {
              return (this.loaded = {}), (this.loading = {}), this;
            };
          o.prototype.add = function (e) {
            var t = this;
            'string' == typeof e && (e = { url: e });
            var o = e.urls;
            'undefined' == typeof o && (o = [{ url: e.url, verify: e.verify }]);
            var a = document.getElementsByTagName('head')[0],
              i = function (e, n) {
                t.loaded[e.url] ||
                  (n && r(n) === !1) ||
                  ((t.loaded[e.url] = !0),
                  t.loading[e.url] && t.loading[e.url](),
                  delete t.loading[e.url],
                  e.onsuccess && e.onsuccess(),
                  'undefined' != typeof p && p());
              },
              u = !1,
              s = [],
              c = function (r) {
                if (
                  ('string' == typeof r && (r = { url: r, verify: e.verify }),
                  /([\w\d.\[\]'"])$/.test(r.verify))
                ) {
                  var o = (r.test = r.verify);
                  if (
                    'object' === ('undefined' == typeof o ? 'undefined' : n(o))
                  )
                    for (var c = 0; c < o.length; c++) s.push(o[c]);
                  else s.push(o);
                }
                if (!t.loaded[r.url]) {
                  var d = document.createElement('script');
                  (d.onreadystatechange = function () {
                    ('loaded' !== this.readyState &&
                      'complete' !== this.readyState) ||
                      i(r);
                  }),
                    (d.onload = function () {
                      i(r);
                    }),
                    (d.onerror = function () {
                      if (
                        ((u = !0),
                        delete t.loading[r.url],
                        'object' === n(r.test))
                      )
                        for (var e in r.test) l(r.test[e]);
                      else l(r.test);
                    }),
                    d.setAttribute('type', 'text/javascript'),
                    d.setAttribute('src', r.url),
                    a.appendChild(d),
                    (t.loading[r.url] = function () {});
                }
              },
              l = function (e) {
                for (var t = [], n = 0; n < s.length; n++)
                  s[n] !== e && t.push(s[n]);
                s = t;
              },
              d = function v(t) {
                if (t) i(t, t.test);
                else for (var n = 0; n < o.length; n++) i(o[n], o[n].test);
                for (var a = !0, c = 0; c < s.length; c++)
                  r(s[c]) === !1 && (a = !1);
                !e.strictOrder && a
                  ? u
                    ? e.error && e.error()
                    : e.onsuccess && e.onsuccess()
                  : setTimeout(function () {
                      v(t);
                    }, 10);
              };
            if (e.strictOrder) {
              var f = -1,
                p = function A() {
                  if ((f++, o[f])) {
                    var n = o[f],
                      r = n.url;
                    t.loading[r]
                      ? (t.loading[r] = function () {
                          n.onsuccess && n.onsuccess(), A();
                        })
                      : t.loaded[r]
                      ? A()
                      : (c(n), d(n));
                  } else
                    u ? e.error && e.error() : e.onsuccess && e.onsuccess();
                };
              p();
            } else for (var m = 0; m < o.length; m++) c(o[m]), d(o[m]);
          };
          t.loadScript = new o();
        },
        function (e, t) {
          'use strict';
          function n(e, t, n, r) {
            'string' == typeof e && (e = { url: e });
            var o = e.data,
              a = e.url,
              i = e.method || (e.data ? 'POST' : 'GET'),
              u = e.format,
              s = e.headers,
              c = e.responseType,
              l = e.withCredentials || !1,
              d = new window.XMLHttpRequest();
            if (
              ((t = t || e.onsuccess),
              (n = n || e.onerror),
              (r = r || e.onprogress),
              d.open(i, a, !0),
              s)
            )
              for (var f in s) d.setRequestHeader(f, s[f]);
            else
              o &&
                d.setRequestHeader(
                  'Content-type',
                  'application/x-www-form-urlencoded'
                );
            return (
              'binary' === u &&
                d.overrideMimeType &&
                d.overrideMimeType('text/plain; charset=x-user-defined'),
              c && (d.responseType = c),
              l && (d.withCredentials = 'true'),
              n && 'onerror' in d && (d.onerror = n),
              r &&
                d.upload &&
                'onprogress' in d.upload &&
                (o
                  ? (d.upload.onprogress = function (e) {
                      r.call(d, e, e.loaded / e.total);
                    })
                  : d.addEventListener('progress', function (e) {
                      var t = 0;
                      if (e.lengthComputable) t = e.total;
                      else if (d.totalBytes) t = d.totalBytes;
                      else {
                        var n = parseInt(
                          d.getResponseHeader('Content-Length-Raw')
                        );
                        if (!isFinite(n)) return;
                        d.totalBytes = t = n;
                      }
                      r.call(d, e, e.loaded / t);
                    })),
              (d.onreadystatechange = function (e) {
                if (4 === d.readyState)
                  if (
                    200 === d.status ||
                    304 === d.status ||
                    308 === d.status
                  ) {
                    if (t) {
                      var r;
                      if ('xml' === u) r = e.target.responseXML;
                      else if ('text' === u) r = e.target.responseText;
                      else if ('json' === u)
                        try {
                          r = JSON.parse(e.target.response);
                        } catch (o) {
                          n && n.call(d, e);
                        }
                      t.call(d, e, r);
                    }
                  } else n && n.call(d, e);
              }),
              d.send(o),
              d
            );
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.request = n);
        },
        function (e, t, n) {
          'use strict';
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var o = n(2),
            a = r(o);
          (a['default'].GM = (function (e) {
            var t = function (e) {
                return e
                  .replace(/[^a-z0-9 ]/gi, '')
                  .replace(/[ ]/g, '_')
                  .toLowerCase();
              },
              n = { byName: {}, byId: {}, byCategory: {} };
            for (var r in e)
              for (var o = e[r], a = 0, i = o.length; a < i; a++) {
                var u = o[a];
                if (u) {
                  var s = parseInt(u.substr(0, u.indexOf(' ')), 10);
                  (u = u.replace(s + ' ', '')),
                    (n.byId[--s] =
                      n.byName[t(u)] =
                      n.byCategory[t(r)] =
                        { id: t(u), instrument: u, number: s, category: r });
                }
              }
            return n;
          })({
            Piano: [
              '1 Acoustic Grand Piano',
              '2 Bright Acoustic Piano',
              '3 Electric Grand Piano',
              '4 Honky-tonk Piano',
              '5 Electric Piano 1',
              '6 Electric Piano 2',
              '7 Harpsichord',
              '8 Clavinet',
            ],
            'Chromatic Percussion': [
              '9 Celesta',
              '10 Glockenspiel',
              '11 Music Box',
              '12 Vibraphone',
              '13 Marimba',
              '14 Xylophone',
              '15 Tubular Bells',
              '16 Dulcimer',
            ],
            Organ: [
              '17 Drawbar Organ',
              '18 Percussive Organ',
              '19 Rock Organ',
              '20 Church Organ',
              '21 Reed Organ',
              '22 Accordion',
              '23 Harmonica',
              '24 Tango Accordion',
            ],
            Guitar: [
              '25 Acoustic Guitar (nylon)',
              '26 Acoustic Guitar (steel)',
              '27 Electric Guitar (jazz)',
              '28 Electric Guitar (clean)',
              '29 Electric Guitar (muted)',
              '30 Overdriven Guitar',
              '31 Distortion Guitar',
              '32 Guitar Harmonics',
            ],
            Bass: [
              '33 Acoustic Bass',
              '34 Electric Bass (finger)',
              '35 Electric Bass (pick)',
              '36 Fretless Bass',
              '37 Slap Bass 1',
              '38 Slap Bass 2',
              '39 Synth Bass 1',
              '40 Synth Bass 2',
            ],
            Strings: [
              '41 Violin',
              '42 Viola',
              '43 Cello',
              '44 Contrabass',
              '45 Tremolo Strings',
              '46 Pizzicato Strings',
              '47 Orchestral Harp',
              '48 Timpani',
            ],
            Ensemble: [
              '49 String Ensemble 1',
              '50 String Ensemble 2',
              '51 Synth Strings 1',
              '52 Synth Strings 2',
              '53 Choir Aahs',
              '54 Voice Oohs',
              '55 Synth Choir',
              '56 Orchestra Hit',
            ],
            Brass: [
              '57 Trumpet',
              '58 Trombone',
              '59 Tuba',
              '60 Muted Trumpet',
              '61 French Horn',
              '62 Brass Section',
              '63 Synth Brass 1',
              '64 Synth Brass 2',
            ],
            Reed: [
              '65 Soprano Sax',
              '66 Alto Sax',
              '67 Tenor Sax',
              '68 Baritone Sax',
              '69 Oboe',
              '70 English Horn',
              '71 Bassoon',
              '72 Clarinet',
            ],
            Pipe: [
              '73 Piccolo',
              '74 Flute',
              '75 Recorder',
              '76 Pan Flute',
              '77 Blown Bottle',
              '78 Shakuhachi',
              '79 Whistle',
              '80 Ocarina',
            ],
            'Synth Lead': [
              '81 Lead 1 (square)',
              '82 Lead 2 (sawtooth)',
              '83 Lead 3 (calliope)',
              '84 Lead 4 (chiff)',
              '85 Lead 5 (charang)',
              '86 Lead 6 (voice)',
              '87 Lead 7 (fifths)',
              '88 Lead 8 (bass + lead)',
            ],
            'Synth Pad': [
              '89 Pad 1 (new age)',
              '90 Pad 2 (warm)',
              '91 Pad 3 (polysynth)',
              '92 Pad 4 (choir)',
              '93 Pad 5 (bowed)',
              '94 Pad 6 (metallic)',
              '95 Pad 7 (halo)',
              '96 Pad 8 (sweep)',
            ],
            'Synth Effects': [
              '97 FX 1 (rain)',
              '98 FX 2 (soundtrack)',
              '99 FX 3 (crystal)',
              '100 FX 4 (atmosphere)',
              '101 FX 5 (brightness)',
              '102 FX 6 (goblins)',
              '103 FX 7 (echoes)',
              '104 FX 8 (sci-fi)',
            ],
            Ethnic: [
              '105 Sitar',
              '106 Banjo',
              '107 Shamisen',
              '108 Koto',
              '109 Kalimba',
              '110 Bagpipe',
              '111 Fiddle',
              '112 Shanai',
            ],
            Percussive: [
              '113 Tinkle Bell',
              '114 Agogo',
              '115 Steel Drums',
              '116 Woodblock',
              '117 Taiko Drum',
              '118 Melodic Tom',
              '119 Synth Drum',
            ],
            'Sound effects': [
              '120 Reverse Cymbal',
              '121 Guitar Fret Noise',
              '122 Breath Noise',
              '123 Seashore',
              '124 Bird Tweet',
              '125 Telephone Ring',
              '126 Helicopter',
              '127 Applause',
              '128 Gunshot',
            ],
          })),
            (a['default'].getInstrument = function (e) {
              var t = a['default'].channels[e];
              return t && t.instrument;
            }),
            (a['default'].setInstrument = function (e, t, n) {
              var r = a['default'].channels[e];
              return n
                ? setTimeout(function () {
                    r.instrument = t;
                  }, n)
                : void (r.instrument = t);
            }),
            (a['default'].getMono = function (e) {
              var t = a['default'].channels[e];
              return t && t.mono;
            }),
            (a['default'].setMono = function (e, t, n) {
              var r = a['default'].channels[e];
              return n
                ? setTimeout(function () {
                    r.mono = t;
                  }, n)
                : void (r.mono = t);
            }),
            (a['default'].getOmni = function (e) {
              var t = a['default'].channels[e];
              return t && t.omni;
            }),
            (a['default'].setOmni = function (e, t, n) {
              var r = a['default'].channels[e];
              return n
                ? setTimeout(function () {
                    r.omni = t;
                  }, n)
                : void (r.omni = t);
            }),
            (a['default'].getSolo = function (e) {
              var t = a['default'].channels[e];
              return t && t.solo;
            }),
            (a['default'].setSolo = function (e, t, n) {
              var r = a['default'].channels[e];
              return n
                ? setTimeout(function () {
                    r.solo = t;
                  }, n)
                : void (r.solo = t);
            }),
            (a['default'].channels = (function () {
              for (var e = {}, t = 0; t < 16; t++)
                e[t] = {
                  instrument: t,
                  pitchBend: 0,
                  mute: !1,
                  mono: !1,
                  omni: !1,
                  solo: !1,
                };
              return e;
            })()),
            (a['default'].keyToNote = {}),
            (a['default'].noteToKey = {}),
            ~(function () {
              for (
                var e = 21,
                  t = 108,
                  n = [
                    'C',
                    'Db',
                    'D',
                    'Eb',
                    'E',
                    'F',
                    'Gb',
                    'G',
                    'Ab',
                    'A',
                    'Bb',
                    'B',
                  ],
                  r = e;
                r <= t;
                r++
              ) {
                var o = ((r - 12) / 12) >> 0,
                  i = n[r % 12] + o;
                (a['default'].keyToNote[i] = r),
                  (a['default'].noteToKey[r] = i);
              }
            })();
        },
        function (e, t, n) {
          'use strict';
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var o = n(10),
            a = n(2),
            i = r(a);
          !(function () {
            i['default'].Player = {};
            var e = i['default'].Player;
            (e.currentTime = 0),
              (e.endTime = 0),
              (e.restart = 0),
              (e.playing = !1),
              (e.timeWarp = 1),
              (e.startDelay = 0),
              (e.BPM = 120),
              (e.start = e.resume =
                function (t) {
                  e.currentTime < -1 && (e.currentTime = -1),
                    p(e.currentTime, null, t);
                }),
              (e.pause = function () {
                var t = e.restart;
                m(), (e.restart = t);
              }),
              (e.stop = function () {
                m(), (e.restart = 0), (e.currentTime = 0);
              }),
              (e.addListener = function (e) {
                n = e;
              }),
              (e.removeListener = function () {
                n = void 0;
              }),
              (e.clearAnimation = function () {
                e.animationFrameId &&
                  window.cancelAnimationFrame(e.animationFrameId);
              }),
              (e.setAnimation = function (t) {
                var n = 0,
                  r = 0,
                  o = 0;
                e.clearAnimation();
                var a = function i() {
                  if (
                    ((e.animationFrameId = window.requestAnimationFrame(i)),
                    0 !== e.endTime)
                  ) {
                    e.playing
                      ? ((n = o === e.currentTime ? r - Date.now() : 0),
                        (n = 0 === e.currentTime ? 0 : e.currentTime - n),
                        o !== e.currentTime &&
                          ((r = Date.now()), (o = e.currentTime)))
                      : (n = e.currentTime);
                    var a = e.endTime,
                      u = n / 1e3,
                      c = u / 60,
                      l = u - 60 * c,
                      d = 60 * c + l,
                      f = a / 1e3;
                    f - d < -1 || t({ now: d, end: f, events: s });
                  }
                };
                window.requestAnimationFrame(a);
              }),
              (e.loadMidiFile = function (t, n, r) {
                try {
                  (e.replayer = new o.Replayer(
                    (0, o.MidiFile)(e.currentData),
                    e.timeWarp,
                    null,
                    e.BPM
                  )),
                    (e.data = e.replayer.getData()),
                    (e.endTime = d()),
                    i['default'].loadPlugin({
                      onsuccess: t,
                      onprogress: n,
                      onerror: r,
                    });
                } catch (a) {
                  console.error(a), r && r(a);
                }
              }),
              (e.loadFile = function (t, n, r, o) {
                if ((e.stop(), t.indexOf('base64,') !== -1)) {
                  var a = window.atob(t.split(',')[1]);
                  (e.currentData = a), e.loadMidiFile(n, r, o);
                } else {
                  var i = new window.XMLHttpRequest();
                  i.open('GET', t),
                    i.overrideMimeType('text/plain; charset=x-user-defined'),
                    (i.onreadystatechange = function () {
                      if (4 === this.readyState)
                        if (200 === this.status) {
                          for (
                            var t = this.responseText || '',
                              a = [],
                              i = t.length,
                              u = String.fromCharCode,
                              s = 0;
                            s < i;
                            s++
                          )
                            a[s] = u(255 & t.charCodeAt(s));
                          var c = a.join('');
                          (e.currentData = c), e.loadMidiFile(n, r, o);
                        } else o && o('Unable to load MIDI file');
                    }),
                    i.send();
                }
              }),
              (e.getFileInstruments = function () {
                for (var t = {}, n = {}, r = 0; r < e.data.length; r++) {
                  var o = e.data[r][0].event;
                  if ('channel' === o.type) {
                    var a = o.channel;
                    switch (o.subtype) {
                      case 'controller':
                        break;
                      case 'programChange':
                        n[a] = o.programNumber;
                        break;
                      case 'noteOn':
                        var u = n[a],
                          s = i['default'].GM.byId[isFinite(u) ? u : a];
                        t[s.id] = !0;
                    }
                  }
                }
                var c = [];
                for (var l in t) c.push(l);
                return c;
              });
            var t,
              n,
              r,
              a = [],
              u = 0,
              s = {},
              c = function (r, o, i, u, c, l, d) {
                return setTimeout(function () {
                  var u = {
                    channel: r,
                    note: o,
                    now: i,
                    end: e.endTime,
                    message: c,
                    velocity: l,
                  };
                  128 === c ? delete s[o] : (s[o] = u),
                    n && n(u),
                    (e.currentTime = i),
                    a.shift(),
                    a.length < 1e3
                      ? p(t, !0)
                      : e.currentTime === t && t < e.endTime && p(t, !0);
                }, i - u);
              },
              l = function () {
                return 'webaudio' === i['default'].api
                  ? i['default'].WebAudio.getContext()
                  : ((e.ctx = { currentTime: 0 }), e.ctx);
              },
              d = function () {
                for (var t = e.data, n = t.length, r = 0.5, o = 0; o < n; o++)
                  r += t[o][1];
                return r;
              },
              f = function () {
                return window.performance && window.performance.now
                  ? window.performance.now()
                  : Date.now();
              },
              p = function (n, o, s) {
                if (e.replayer) {
                  o ||
                    ('undefined' == typeof n && (n = e.restart),
                    e.playing && m(),
                    (e.playing = !0),
                    (e.data = e.replayer.getData()),
                    (e.endTime = d()));
                  var p,
                    v = 0,
                    A = 0,
                    y = e.data,
                    h = l(),
                    g = y.length;
                  t = 0.5;
                  var b = n - e.currentTime;
                  if ('webaudio' !== i['default'].api) {
                    var q = f();
                    (r = r || q), (h.currentTime = (q - r) / 1e3);
                  }
                  u = h.currentTime;
                  for (var w = 0; w < g && A < 100; w++) {
                    var S = y[w];
                    if ((t += S[1]) <= n) v = t;
                    else {
                      n = t - v;
                      var T = S[0].event;
                      if ('channel' === T.type) {
                        var x = T.channel,
                          E = i['default'].channels[x],
                          I = h.currentTime + (n + b + e.startDelay) / 1e3,
                          M = t - v + e.startDelay;
                        switch (T.subtype) {
                          case 'controller':
                            i['default'].setController(
                              x,
                              T.controllerType,
                              T.value,
                              I
                            );
                            break;
                          case 'programChange':
                            i['default'].programChange(x, T.programNumber, I);
                            break;
                          case 'pitchBend':
                            i['default'].pitchBend(x, T.value, I);
                            break;
                          case 'noteOn':
                            if (E.mute) break;
                            (p = T.noteNumber - (e.MIDIOffset || 0)),
                              a.push({
                                event: T,
                                time: M,
                                source: i['default'].noteOn(
                                  x,
                                  T.noteNumber,
                                  T.velocity,
                                  I
                                ),
                                interval: c(
                                  x,
                                  p,
                                  t + e.startDelay,
                                  v - b,
                                  144,
                                  T.velocity
                                ),
                              }),
                              A++;
                            break;
                          case 'noteOff':
                            if (E.mute) break;
                            (p = T.noteNumber - (e.MIDIOffset || 0)),
                              a.push({
                                event: T,
                                time: M,
                                source: i['default'].noteOff(
                                  x,
                                  T.noteNumber,
                                  I
                                ),
                                interval: c(x, p, t, v - b, 128, 0),
                              });
                        }
                      }
                    }
                  }
                  s && s(a);
                }
              },
              m = function () {
                var t = l();
                for (
                  e.playing = !1, e.restart += 1e3 * (t.currentTime - u);
                  a.length;

                ) {
                  var r = a.pop();
                  window.clearInterval(r.interval),
                    r.source &&
                      ('number' == typeof r.source
                        ? window.clearTimeout(r.source)
                        : r.source.disconnect(0));
                }
                for (var o in s) {
                  var i = s[o];
                  144 === s[o].message &&
                    n &&
                    n({
                      channel: i.channel,
                      note: i.note,
                      now: i.now,
                      end: i.end,
                      message: 128,
                      velocity: i.velocity,
                    });
                }
                s = {};
              };
          })();
        },
        function (e, t, n) {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          var r = n(11);
          Object.keys(r).forEach(function (e) {
            'default' !== e &&
              '__esModule' !== e &&
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return r[e];
                },
              });
          });
          var o = n(13);
          Object.keys(o).forEach(function (e) {
            'default' !== e &&
              '__esModule' !== e &&
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return o[e];
                },
              });
          });
        },
        function (e, t, n) {
          'use strict';
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function o(e) {
            function t(e) {
              var t = e.read(4),
                n = e.readInt32();
              return { id: t, length: n, data: e.read(n) };
            }
            function n(e) {
              var t = {};
              t.deltaTime = e.readVarInt();
              var n = e.readInt8();
              if (240 === (240 & n)) {
                if (255 !== n) {
                  if (240 === n) {
                    t.type = 'sysEx';
                    var o = e.readVarInt();
                    return (t.data = e.read(o)), t;
                  }
                  if (247 === n) {
                    t.type = 'dividedSysEx';
                    var a = e.readVarInt();
                    return (t.data = e.read(a)), t;
                  }
                  throw new Error('Unrecognised MIDI event type byte: ' + n);
                }
                t.type = 'meta';
                var i = e.readInt8(),
                  u = e.readVarInt();
                switch (i) {
                  case 0:
                    if (((t.subtype = 'sequenceNumber'), 2 !== u))
                      throw new Error(
                        'Expected length for sequenceNumber event is 2, got ' +
                          u
                      );
                    return (t.number = e.readInt16()), t;
                  case 1:
                    return (t.subtype = 'text'), (t.text = e.read(u)), t;
                  case 2:
                    return (
                      (t.subtype = 'copyrightNotice'), (t.text = e.read(u)), t
                    );
                  case 3:
                    return (t.subtype = 'trackName'), (t.text = e.read(u)), t;
                  case 4:
                    return (
                      (t.subtype = 'instrumentName'), (t.text = e.read(u)), t
                    );
                  case 5:
                    return (t.subtype = 'lyrics'), (t.text = e.read(u)), t;
                  case 6:
                    return (t.subtype = 'marker'), (t.text = e.read(u)), t;
                  case 7:
                    return (t.subtype = 'cuePoint'), (t.text = e.read(u)), t;
                  case 32:
                    if (((t.subtype = 'midiChannelPrefix'), 1 !== u))
                      throw new Error(
                        'Expected length for midiChannelPrefix event is 1, got ' +
                          u
                      );
                    return (t.channel = e.readInt8()), t;
                  case 47:
                    if (((t.subtype = 'endOfTrack'), 0 !== u))
                      throw new Error(
                        'Expected length for endOfTrack event is 0, got ' + u
                      );
                    return t;
                  case 81:
                    if (((t.subtype = 'setTempo'), 3 !== u))
                      throw new Error(
                        'Expected length for setTempo event is 3, got ' + u
                      );
                    return (
                      (t.microsecondsPerBeat =
                        (e.readInt8() << 16) +
                        (e.readInt8() << 8) +
                        e.readInt8()),
                      t
                    );
                  case 84:
                    if (((t.subtype = 'smpteOffset'), 5 !== u))
                      throw new Error(
                        'Expected length for smpteOffset event is 5, got ' + u
                      );
                    var s = e.readInt8();
                    return (
                      (t.frameRate = { 0: 24, 32: 25, 64: 29, 96: 30 }[96 & s]),
                      (t.hour = 31 & s),
                      (t.min = e.readInt8()),
                      (t.sec = e.readInt8()),
                      (t.frame = e.readInt8()),
                      (t.subframe = e.readInt8()),
                      t
                    );
                  case 88:
                    if (((t.subtype = 'timeSignature'), 4 !== u))
                      throw new Error(
                        'Expected length for timeSignature event is 4, got ' + u
                      );
                    return (
                      (t.numerator = e.readInt8()),
                      (t.denominator = Math.pow(2, e.readInt8())),
                      (t.metronome = e.readInt8()),
                      (t.thirtyseconds = e.readInt8()),
                      t
                    );
                  case 89:
                    if (((t.subtype = 'keySignature'), 2 !== u))
                      throw new Error(
                        'Expected length for keySignature event is 2, got ' + u
                      );
                    return (
                      (t.key = e.readInt8(!0)), (t.scale = e.readInt8()), t
                    );
                  case 127:
                    return (
                      (t.subtype = 'sequencerSpecific'), (t.data = e.read(u)), t
                    );
                  default:
                    return (t.subtype = 'unknown'), (t.data = e.read(u)), t;
                }
              } else {
                var c;
                0 === (128 & n)
                  ? ((c = n), (n = r))
                  : ((c = e.readInt8()), (r = n));
                var l = n >> 4;
                switch (((t.channel = 15 & n), (t.type = 'channel'), l)) {
                  case 8:
                    return (
                      (t.subtype = 'noteOff'),
                      (t.noteNumber = c),
                      (t.velocity = e.readInt8()),
                      t
                    );
                  case 9:
                    return (
                      (t.noteNumber = c),
                      (t.velocity = e.readInt8()),
                      0 === t.velocity
                        ? (t.subtype = 'noteOff')
                        : (t.subtype = 'noteOn'),
                      t
                    );
                  case 10:
                    return (
                      (t.subtype = 'noteAftertouch'),
                      (t.noteNumber = c),
                      (t.amount = e.readInt8()),
                      t
                    );
                  case 11:
                    return (
                      (t.subtype = 'controller'),
                      (t.controllerType = c),
                      (t.value = e.readInt8()),
                      t
                    );
                  case 12:
                    return (
                      (t.subtype = 'programChange'), (t.programNumber = c), t
                    );
                  case 13:
                    return (t.subtype = 'channelAftertouch'), (t.amount = c), t;
                  case 14:
                    return (
                      (t.subtype = 'pitchBend'),
                      (t.value = c + (e.readInt8() << 7)),
                      t
                    );
                  default:
                    throw new Error('Unrecognised MIDI event type: ' + l);
                }
              }
            }
            var r,
              o = (0, i['default'])(e),
              a = t(o);
            if ('MThd' !== a.id || 6 !== a.length)
              throw new Error('Bad .mid file - header not found');
            var u,
              s = (0, i['default'])(a.data),
              c = s.readInt16(),
              l = s.readInt16(),
              d = s.readInt16();
            if (32768 & d)
              throw new Error(
                'Expressing time division in SMTPE frames is not supported yet'
              );
            u = d;
            for (
              var f = { formatType: c, trackCount: l, ticksPerBeat: u },
                p = [],
                m = 0;
              m < f.trackCount;
              m++
            ) {
              p[m] = [];
              var v = t(o);
              if ('MTrk' !== v.id)
                throw new Error(
                  'Unexpected chunk - expected MTrk, got ' + v.id
                );
              for (var A = (0, i['default'])(v.data); !A.eof(); ) {
                var y = n(A);
                p[m].push(y);
              }
            }
            return { header: f, tracks: p };
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.MidiFile = o);
          var a = n(12),
            i = r(a);
        },
        function (e, t) {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t['default'] = function (e) {
              function t(t) {
                var n = e.substr(u, t);
                return (u += t), n;
              }
              function n() {
                var t =
                  (e.charCodeAt(u) << 24) +
                  (e.charCodeAt(u + 1) << 16) +
                  (e.charCodeAt(u + 2) << 8) +
                  e.charCodeAt(u + 3);
                return (u += 4), t;
              }
              function r() {
                var t = (e.charCodeAt(u) << 8) + e.charCodeAt(u + 1);
                return (u += 2), t;
              }
              function o(t) {
                var n = e.charCodeAt(u);
                return t && n > 127 && (n -= 256), (u += 1), n;
              }
              function a() {
                return u >= e.length;
              }
              function i() {
                for (var e = 0; ; ) {
                  var t = o();
                  if (!(128 & t)) return e + t;
                  (e += 127 & t), (e <<= 7);
                }
              }
              var u = 0;
              return {
                eof: a,
                read: t,
                readInt32: n,
                readInt16: r,
                readInt8: o,
                readVarInt: i,
              };
            }),
            (e.exports = t['default']);
        },
        function (e, t) {
          'use strict';
          function n(e, t, n, r) {
            function a() {
              for (var t = null, n = null, r = null, o = 0; o < i.length; o++)
                null != i[o].ticksToNextEvent &&
                  (null == t || i[o].ticksToNextEvent < t) &&
                  ((t = i[o].ticksToNextEvent),
                  (n = o),
                  (r = i[o].nextEventIndex));
              if (null != n) {
                var a = e.tracks[n][r];
                e.tracks[n][r + 1]
                  ? (i[n].ticksToNextEvent += e.tracks[n][r + 1].deltaTime)
                  : (i[n].ticksToNextEvent = null),
                  (i[n].nextEventIndex += 1);
                for (var u = 0; u < i.length; u++)
                  null != i[u].ticksToNextEvent && (i[u].ticksToNextEvent -= t);
                return { ticksToEvent: t, event: a, track: n };
              }
              return null;
            }
            for (
              var i = [],
                u = r || 120,
                s = !!r,
                c = e.header.ticksPerBeat,
                l = 0;
              l < e.tracks.length;
              l++
            )
              i[l] = {
                nextEventIndex: 0,
                ticksToNextEvent: e.tracks[l].length
                  ? e.tracks[l][0].deltaTime
                  : null,
              };
            var d,
              f = [];
            return (
              ~(function () {
                function e() {
                  s ||
                    'meta' !== d.event.type ||
                    'setTempo' !== d.event.subtype ||
                    (u = 6e7 / d.event.microsecondsPerBeat);
                  var e = 0,
                    n = 0;
                  d.ticksToEvent > 0 &&
                    ((e = d.ticksToEvent / c), (n = e / (u / 60)));
                  var r = 1e3 * n * t || 0;
                  f.push([d, r]), (d = a());
                }
                if ((d = a())) for (; d; ) e(!0);
              })(),
              {
                getData: function () {
                  return o(f);
                },
              }
            );
          }
          Object.defineProperty(t, '__esModule', { value: !0 });
          var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                };
          t.Replayer = n;
          var o = function a(e) {
            if ('object' !== ('undefined' == typeof e ? 'undefined' : r(e)))
              return e;
            if (null === e) return e;
            var t = 'number' == typeof e.length ? [] : {};
            for (var n in e) t[n] = a(e[n]);
            return t;
          };
        },
        function (e, t, n) {
          'use strict';
          n(15), n(16), n(17);
        },
        function (e, t, n) {
          'use strict';
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var o = n(2),
            a = r(o);
          window.Audio &&
            (function () {
              for (
                var e = (a['default'].AudioTag = { api: 'audiotag' }),
                  t = {},
                  n = 127,
                  r = -1,
                  o = [],
                  i = [],
                  u = {},
                  s = 0;
                s < 12;
                s++
              )
                o[s] = new window.Audio();
              var c = function (e, t) {
                  if (a['default'].channels[e]) {
                    var s = a['default'].channels[e].instrument,
                      c = a['default'].GM.byId[s].id;
                    if ((t = u[t])) {
                      var l = c + '' + t.id,
                        d = (r + 1) % o.length,
                        f = o[d];
                      if (((i[d] = l), !a['default'].Soundfont[c]))
                        return void (
                          a['default'].DEBUG && console.log('404', c)
                        );
                      (f.src = a['default'].Soundfont[c][t.id]),
                        (f.volume = n / 127),
                        f.play(),
                        (r = d);
                    }
                  }
                },
                l = function (e, t) {
                  if (a['default'].channels[e]) {
                    var n = a['default'].channels[e].instrument,
                      s = a['default'].GM.byId[n].id;
                    if ((t = u[t]))
                      for (
                        var c = s + '' + t.id, l = 0, d = o.length;
                        l < d;
                        l++
                      ) {
                        var f = (l + r + 1) % d,
                          p = i[f];
                        if (p && p === c)
                          return o[f].pause(), void (i[f] = null);
                      }
                  }
                };
              (e.audioBuffers = o),
                (e.send = function (e, t) {}),
                (e.setController = function (e, t, n, r) {}),
                (e.setVolume = function (e, t) {
                  n = t;
                }),
                (e.programChange = function (e, t) {
                  a['default'].channels[e].instrument = t;
                }),
                (e.pitchBend = function (e, t, n) {}),
                (e.noteOn = function (e, n, r, o) {
                  var a = t[n];
                  if (u[a])
                    return o
                      ? setTimeout(function () {
                          c(e, a);
                        }, 1e3 * o)
                      : void c(e, a);
                }),
                (e.noteOff = function (e, t, n) {}),
                (e.chordOn = function (e, n, r, o) {
                  for (var a = 0; a < n.length; a++) {
                    var i = n[a],
                      s = t[i];
                    if (u[s]) {
                      if (o)
                        return setTimeout(function () {
                          c(e, s);
                        }, 1e3 * o);
                      c(e, s);
                    }
                  }
                }),
                (e.chordOff = function (e, n, r) {
                  for (var o = 0; o < n.length; o++) {
                    var a = n[o],
                      i = t[a];
                    if (u[i]) {
                      if (r)
                        return setTimeout(function () {
                          l(e, i);
                        }, 1e3 * r);
                      l(e, i);
                    }
                  }
                }),
                (e.stopAllNotes = function () {
                  for (var e = 0, t = o.length; e < t; e++) o[e].pause();
                }),
                (e.connect = function (n) {
                  a['default'].setDefaultPlugin(e);
                  for (var r in a['default'].keyToNote)
                    (t[a['default'].keyToNote[r]] = r), (u[r] = { id: r });
                  n.onsuccess && n.onsuccess();
                });
            })();
        },
        function (e, t, n) {
          'use strict';
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function o(e) {
            for (
              var t = window.atob(e),
                n = t.length,
                r = new Uint8Array(n),
                o = 0;
              o < n;
              o++
            )
              r[o] = t.charCodeAt(o);
            return r.buffer;
          }
          var a = n(2),
            i = r(a);
          window.AudioContext &&
            (function () {
              function e(e, t, a) {
                if (r) {
                  var i = new window.Audio();
                  (i.src = e),
                    (i.controls = !1),
                    (i.autoplay = !1),
                    (i.preload = !1),
                    i.addEventListener('canplay', function () {
                      t && t(i);
                    }),
                    i.addEventListener('error', function (e) {
                      a && a(e);
                    }),
                    document.body.appendChild(i);
                } else if (0 === e.indexOf('data:audio')) {
                  var u = e.split(',')[1],
                    s = o(u);
                  n.decodeAudioData(s, t, a);
                } else {
                  var c = new window.XMLHttpRequest();
                  c.open('GET', e, !0),
                    (c.responseType = 'arraybuffer'),
                    (c.onload = function () {
                      n.decodeAudioData(c.response, t, a);
                    }),
                    c.send();
                }
              }
              function t() {
                return new (window.AudioContext || window.webkitAudioContext)();
              }
              var n,
                r = !1,
                a = (i['default'].WebAudio = { api: 'webaudio' }),
                u = {},
                s = {},
                c = 127,
                l = {};
              (a.audioBuffers = l),
                (a.send = function (e, t) {}),
                (a.setController = function (e, t, n, r) {}),
                (a.setVolume = function (e, t, n) {
                  n
                    ? setTimeout(function () {
                        c = t;
                      }, 1e3 * n)
                    : (c = t);
                }),
                (a.programChange = function (e, t, n) {
                  var r = i['default'].channels[e];
                  r.instrument = t;
                }),
                (a.pitchBend = function (e, t, n) {
                  var r = i['default'].channels[e];
                  r.pitchBend = t;
                }),
                (a.noteOn = function (e, t, o, a) {
                  a = a || 0;
                  var d = i['default'].channels[e],
                    f = d.instrument,
                    p = f + '' + t,
                    m = l[p];
                  if (m) {
                    a < n.currentTime && (a += n.currentTime);
                    var v;
                    if (
                      (r
                        ? (v = n.createMediaElementSource(m))
                        : ((v = n.createBufferSource()), (v.buffer = m)),
                      s)
                    ) {
                      var A = v;
                      for (var y in s) A.connect(s[y].input), (A = s[y]);
                    }
                    var h = (o / 127) * (c / 127) * 2 - 1;
                    if (
                      (v.connect(n.destination),
                      (v.playbackRate.value = 1),
                      (v.gainNode = n.createGain()),
                      v.gainNode.connect(n.destination),
                      (v.gainNode.gain.value = Math.min(1, Math.max(-1, h))),
                      v.connect(v.gainNode),
                      r)
                    ) {
                      if (a)
                        return setTimeout(function () {
                          (m.currentTime = 0), m.play();
                        }, 1e3 * a);
                      (m.currentTime = 0), m.play();
                    } else v.start(a || 0);
                    return (u[e + '' + t] = v), v;
                  }
                }),
                (a.noteOff = function (e, t, o) {
                  o = o || 0;
                  var a = i['default'].channels[e],
                    s = a.instrument,
                    c = s + '' + t,
                    d = l[c];
                  if (d) {
                    o < n.currentTime && (o += n.currentTime);
                    var f = u[e + '' + t];
                    if (f) {
                      if (f.gainNode) {
                        var p = f.gainNode.gain;
                        p.linearRampToValueAtTime(p.value, o),
                          p.linearRampToValueAtTime(-1, o + 0.3);
                      }
                      return (
                        r
                          ? o
                            ? setTimeout(function () {
                                d.pause();
                              }, 1e3 * o)
                            : d.pause()
                          : f.noteOff
                          ? f.noteOff(o + 0.5)
                          : f.stop(o + 0.5),
                        delete u[e + '' + t],
                        f
                      );
                    }
                  }
                }),
                (a.chordOn = function (e, t, n, r) {
                  for (var o, i = {}, u = 0, s = t.length; u < s; u++)
                    i[(o = t[u])] = a.noteOn(e, o, n, r);
                  return i;
                }),
                (a.chordOff = function (e, t, n) {
                  for (var r, o = {}, i = 0, u = t.length; i < u; i++)
                    o[(r = t[i])] = a.noteOff(e, r, n);
                  return o;
                }),
                (a.stopAllNotes = function () {
                  for (var e in u) {
                    var t = 0;
                    t < n.currentTime && (t += n.currentTime);
                    var r = u[e];
                    r.gain.linearRampToValueAtTime(1, t),
                      r.gain.linearRampToValueAtTime(0, t + 0.3),
                      r.noteOff ? r.noteOff(t + 0.3) : r.stop(t + 0.3),
                      delete u[e];
                  }
                }),
                (a.setEffects = function (e) {
                  if (!n.tunajs)
                    return console.log('Effects module not installed.');
                  for (var t = 0; t < e.length; t++) {
                    var r = e[t],
                      o = new n.tunajs[r.type](r);
                    o.connect(n.destination), (s[r.type] = o);
                  }
                }),
                (a.connect = function (e) {
                  i['default'].setDefaultPlugin(a),
                    a.setContext(n || t(), e.onsuccess);
                }),
                (a.getContext = function () {
                  return n;
                }),
                (a.setContext = function (t, r, o, a) {
                  (n = t),
                    'undefined' == typeof window.Tuna ||
                      n.tunajs ||
                      (n.tunajs = new window.Tuna(n));
                  var u = [],
                    s = i['default'].keyToNote;
                  for (var c in s) u.push(c);
                  var d = function (e) {
                      for (var t in p) if (p[t]) return;
                      r && (r(), (r = null));
                    },
                    f = function (t, n, r, o) {
                      var a = t[o];
                      a &&
                        (p[n]++,
                        e(
                          a,
                          function (e) {
                            e.id = o;
                            var r = i['default'].keyToNote[o];
                            (l[n + '' + r] = e),
                              0 === --p[n] && ((t.isLoaded = !0), d(m));
                          },
                          function (e) {
                            console.error(e);
                          }
                        ));
                    },
                    p = {};
                  for (var m in i['default'].Soundfont) {
                    var v = i['default'].Soundfont[m];
                    if (!v.isLoaded) {
                      var A = i['default'].GM.byName[m],
                        y = A.number;
                      p[y] = 0;
                      for (var h = 0; h < u.length; h++) {
                        var g = u[h];
                        f(v, y, h, g);
                      }
                    }
                  }
                  setTimeout(d, 1);
                });
            })();
        },
        function (e, t, n) {
          'use strict';
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var o = n(2),
            a = r(o);
          !(function () {
            var e = null,
              t = null,
              n = (a['default'].WebMIDI = { api: 'webmidi' });
            (n.send = function (e, n) {
              t.send(e, 1e3 * n);
            }),
              (n.setController = function (e, n, r, o) {
                t.send([e, n, r], 1e3 * o);
              }),
              (n.setVolume = function (e, n, r) {
                t.send([176 + e, 7, n], 1e3 * r);
              }),
              (n.programChange = function (e, n, r) {
                t.send([192 + e, n], 1e3 * r);
              }),
              (n.pitchBend = function (e, n, r) {
                t.send([224 + e, n], 1e3 * r);
              }),
              (n.noteOn = function (e, n, r, o) {
                t.send([144 + e, n, r], 1e3 * o);
              }),
              (n.noteOff = function (e, n, r) {
                t.send([128 + e, n, 0], 1e3 * r);
              }),
              (n.chordOn = function (e, n, r, o) {
                for (var a = 0; a < n.length; a++) {
                  var i = n[a];
                  t.send([144 + e, i, r], 1e3 * o);
                }
              }),
              (n.chordOff = function (e, n, r) {
                for (var o = 0; o < n.length; o++) {
                  var a = n[o];
                  t.send([128 + e, a, 0], 1e3 * r);
                }
              }),
              (n.stopAllNotes = function () {
                t.cancel();
                for (var e = 0; e < 16; e++) t.send([176 + e, 123, 0]);
              }),
              (n.connect = function (r) {
                a['default'].setDefaultPlugin(n);
                var o = function (e) {
                  if (window.AudioContext) r.api = 'webaudio';
                  else {
                    if (!window.Audio) return e;
                    r.api = 'audiotag';
                  }
                  a['default'].loadPlugin(r);
                };
                navigator.requestMIDIAccess().then(function (n) {
                  e = n;
                  var a = e.outputs;
                  (t = 'function' == typeof a ? a()[0] : a[0]),
                    void 0 === t ? o() : r.onsuccess && r.onsuccess();
                }, o);
              });
          })();
        },
      ]);
    });
    //# sourceMappingURL=midi.min.js.map
  }
  wrap.call(window);
}
const result = window.MIDI;
if (!result)
  throw Error(
    'wrapper failed, file: node_modules/midi.js/lib/midi.min.js name: MIDI'
  );
console.log(
  'wraplib node_modules/midi.js/lib/midi.min.js MIDI',
  typeof window.MIDI
);
export default result;
