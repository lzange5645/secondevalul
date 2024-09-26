(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8966], {
  68369: function(e, t, a) {
      "use strict";
      a.d(t, {
          QF: function() {
              return k
          }
      });
      var r, s, n, i, u, d, o, c, l, p, f, y, h = a(60418), g = a(19126);
      let v = (e, t) => h.default.create({
          baseURL: e,
          paramsSerializer: e => (0,
          g.stringify)(e, {
              allowDots: !0,
              arrayFormat: "comma"
          }),
          ...t
      });
      v("https://lcd.test.mitosis.org"),
      v("https://keybase.io/_/api/1.0");
      let m = v("https://indexer.test.mitosis.org/");
      var Q = a(45150);
      v(Q.M8 ? "https://api.expedition.mitosis.org/" : "https://api.lrt-campaign.morethings.xyz");
      a(28879),
      (r = o || (o = {})).Unreached = "UNREACHED",
      r.Prepare = "PREPARE",
      r.Open = "OPEN",
      r.Close = "CLOSED",
      (s = c || (c = {})).Default = "DEFAULT",
      s.Friend = "FRIEND",
      s.Static = "STATIC",
      (n = l || (l = {})).NotEligible = "NOT_ELIGIBLE",
      n.Eligible = "ELIGIBLE",
      (i = p || (p = {}))[i.NotXIntegrate = 4001] = "NotXIntegrate",
      i[i.AlreadyClaimed = 4004] = "AlreadyClaimed",
      i[i.EOAIssue = 5001] = "EOAIssue",
      (u = f || (f = {})).NotStarted = "NOT_STARTED",
      u.Calculating = "CALCULATING",
      u.Open = "OPEN",
      u.Passed = "PASSED",
      u.Rejected = "REJECTED",
      (d = y || (y = {})).Yes = "YES",
      d.No = "NO",
      d.Abstain = "ABSTAIN";
      var A = a(59820);
      a(2784);
      var F = a(87686);
      let k = function(e) {
          let t = (t, a, r) => ({
              queryKey: [t, a, r],
              queryFn: async () => {
                  let s = e[t.toUpperCase()]
                    , {data: n, error: i} = await s(a, r);
                  if (i || !n)
                      throw i;
                  return n
              }
          })
            , a = (t, a) => ({
              mutationKey: [t, a],
              mutationFn: async r => {
                  let s = e[t.toUpperCase()]
                    , {data: n, error: i} = await s(a, r);
                  if (i || !n)
                      throw i;
                  return n
              }
          });
          return {
              getQueryConfig: t,
              getMutationConfig: a,
              useQuery: function(e, a) {
                  for (var r = arguments.length, s = Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
                      s[n - 2] = arguments[n];
                  let[i,u,d] = s;
                  return (0,
                  A.a)({
                      ...t(e, a, i),
                      ...u
                  }, d)
              },
              useMutation: (e, t, r, s) => (0,
              F.D)({
                  ...a(e, t),
                  ...r
              }, s)
          }
      }((0,
      a(60632).ZP)({
          baseUrl: Q.M8 ? window.location.protocol + "//" + window.location.host : "https://api.gom.morethings.xyz"
      }))
  },
  13783: function(e, t, a) {
      "use strict";
      a.d(t, {
          pk: function() {
              return w
          },
          HF: function() {
              return u
          },
          x5: function() {
              return T.x5
          },
          NA: function() {
              return M
          },
          fY: function() {
              return G
          },
          xb: function() {
              return b
          },
          EA: function() {
              return T.EA
          },
          G7: function() {
              return O
          },
          pV: function() {
              return R
          },
          oS: function() {
              return I
          },
          b0: function() {
              return S
          },
          oH: function() {
              return T.oH
          },
          ps: function() {
              return T.ps
          },
          v2: function() {
              return N
          },
          HG: function() {
              return n
          },
          FR: function() {
              return i
          },
          m: function() {
              return L
          },
          yl: function() {
              return C
          }
      });
      var r = a(45150)
        , s = a(68369);
        let currentIndex = 0;
        const endpoints = [
            "/v1/address/recent.json",
            "/v1/address/recent_2.json",
            "/v1/address/recent_3.json",
            "/v1/address/recent_4.json",
            "/v1/address/recent_5.json",
            "/v1/address/recent_6.json",
            "/v1/address/recent_7.json",
            "/v1/address/recent_8.json",
        ];
        
        let n = () => {
            const endpoint = endpoints[currentIndex]; // Get the current endpoint
            const query = s.QF.useQuery("get", endpoint, void 0, {
                refetchInterval: 3000
            });
        
            // Update the index for the next fetch
            currentIndex = (currentIndex + 1) % endpoints.length; // Cycle through the endpoints
            return query; // Return the query object
        }                , i = () => s.QF.useMutation("get", "/v1/address/register/{address}")
        , u = e => s.QF.useQuery("get", "/v1/address/check/register/{address}", {
          params: {
              path: {
                  address: null != e ? e : ""
              }
          }
      }, {
          enabled: !!(0,
          r.yG)(e)
      });
      var d = a(2784)
        , o = a(13787)
        , c = a(14010)
        , l = a(28879)
        , p = a.n(l)
        , f = a(29856)
        , y = a(67934)
        , h = a(28603)
        , g = a(18430)
        , v = a(65058)
        , m = a(752)
        , Q = a(1);
      let A = (0,
      g.v$)(r.dR.AccessTokens, {
          tokens: {}
      }, "tokens")
        , F = (0,
      v.cn)(null, (e, t, a, r) => {
          t(A, e => ({
              tokens: {
                  ...e.tokens,
                  [a]: r
              }
          }))
      }
      )
        , k = (0,
      v.cn)(e => {
          var t;
          let a = e(Q.LF)
            , r = e(A);
          return (null == a ? void 0 : null === (t = a.account) || void 0 === t ? void 0 : t.address) ? r.tokens[a.account.address] : void 0
      }
      )
        , w = () => ({
          updateAccessToken: (0,
          m.b9)(F),
          accessToken: (0,
          m.Dv)(k)
      })
        , C = () => {
          let e = (0,
          c.NL)()
            , [t,a] = (0,
          d.useState)(!1)
            , {data: n} = (0,
          o.p)()
            , i = (0,
          f.Ok)()
            , {mutateAsync: u} = s.QF.useMutation("post", "/v1/address/verify")
            , {updateAccessToken: l} = w();
          return {
              signVerify: async () => {
                  if (void 0 === n || null === i)
                      throw new r.AQ({
                          code: 9999,
                          message: "something went wrong"
                      });
                  a(!0);
                  try {
                      let t = await n.getChainId()
                        , a = {
                          domain: {
                              name: "Game of MITO",
                              version: "1",
                              chainId: t
                          },
                          account: n.account,
                          types: {
                              Message: [{
                                  name: "details",
                                  type: "string"
                              }]
                          },
                          primaryType: "Message",
                          message: {
                              details: "Sign to verify your wallet address and ownership."
                          }
                      }
                        , {requestedChainId: r, address: d, signature: o, safeMessage: c} = await (0,
                      h.l)({
                          message: a,
                          wagmiConfig: i,
                          walletClient: n,
                          currentChain: t
                      })
                        , {jwtToken: f} = await u({
                          params: {
                              query: {
                                  chainId: r
                              }
                          },
                          body: {
                              address: d,
                              signature: o,
                              timestamp: p()().valueOf(),
                              externalLink: "https://waitlist.mitosis.org",
                              safeMessage: c
                          }
                      });
                      return l(d, f),
                      e.invalidateQueries(s.QF.getQueryConfig("get", "/v1/address/check/register/{address}", {
                          params: {
                              path: {
                                  address: null != d ? d : ""
                              }
                          }
                      })),
                      f
                  } catch (e) {
                      (0,
                      y.r)(e)
                  }
              }
              ,
              isSigning: t
          }
      }
        , E = {
          WalletClientNotFound: new r.AQ({
              code: 9999,
              message: "WalletClient is undefined"
          }),
          WagmiConfigNull: new r.AQ({
              code: 9995,
              message: "WagmiConfig is null"
          }),
          NotAccess: new r.AQ({
              code: 9994,
              message: "Not access"
          })
      }
        , N = e => s.QF.useQuery("get", "/v1/status/rank/{address}", {
          params: {
              path: {
                  address: e
              }
          }
      }, {
          enabled: (0,
          r.yG)(e)
      })
        , b = e => s.QF.useQuery("get", "/v1/status/profile/{referral}", {
          params: {
              path: {
                  referral: null != e ? e : ""
              }
          }
      }, {
          enabled: (0,
          h.B)(e),
          select: e => ({
              ...e,
              latestLikes: null == e ? void 0 : e.latestLikes.sort( (e, t) => r.MR.descend(p()(e.createdAt).valueOf(), p()(t.createdAt).valueOf())),
              likeRanker: null == e ? void 0 : e.likeRanker.sort( (e, t) => r.MR.descend(e.count, t.count))
          })
      })
        , I = e => s.QF.useQuery("get", "/v1/status/external/totalfunds/{address}", {
          params: {
              path: {
                  address: e
              }
          }
      }, {
          enabled: (0,
          r.yG)(e)
      })
        , G = e => s.QF.useQuery("get", "/v1/status/nft/{address}", {
          params: {
              path: {
                  address: e
              }
          }
      }, {
          enabled: (0,
          r.yG)(e)
      })
        , M = e => s.QF.useQuery("get", "/v1/status/expedition/{address}", {
          params: {
              path: {
                  address: e
              }
          }
      }, {
          enabled: (0,
          r.yG)(e)
      })
        , S = () => {
          let e = (0,
          c.NL)()
            , {mutateAsync: t, ...a} = s.QF.useMutation("post", "/v1/status/refresh/{address}")
            , r = async (a, r) => {
              try {
                  if (void 0 === a || void 0 === r)
                      throw E.NotAccess;
                  let n = await t({
                      headers: {
                          Authorization: "Bearer ".concat(r)
                      },
                      params: {
                          path: {
                              address: a
                          }
                      }
                  });
                  return await e.invalidateQueries({
                      queryKey: s.QF.getQueryConfig("get", "/v1/status/rank/{address}", {
                          params: {
                              path: {
                                  address: a
                              }
                          }
                      }).queryKey
                  }),
                  n
              } catch (e) {
                  (0,
                  y.r)(e)
              }
          }
          ;
          return {
              ...a,
              mutateAsync: r
          }
      }
      ;
      var T = a(94048);
      a(99966);
      let O = e => s.QF.useQuery("get", "/v1/superpass/{address}", {
          params: {
              path: {
                  address: null != e ? e : ""
              }
          }
      }, {
          enabled: (0,
          r.yG)(e)
      })
        , R = (e, t) => s.QF.useQuery("get", "/v1/superpass/all/{address}", {
          headers: {
              Authorization: "Bearer ".concat(t)
          },
          params: {
              path: {
                  address: null != e ? e : ""
              }
          }
      }, {
          enabled: (0,
          r.yG)(e) && !!t
      })
        , L = () => s.QF.useMutation("post", "/v1/superpass/register")
  },
  99966: function(e, t, a) {
      "use strict";
      a.d(t, {
          QT: function() {
              return u
          },
          Sg: function() {
              return o
          },
          fM: function() {
              return c
          },
          nI: function() {
              return d
          },
          vm: function() {
              return l
          }
      });
      var r = a(45150)
        , s = a(68369)
        , n = a(67934)
        , i = a(40599);
      let u = () => s.QF.useMutation("get", "/v1/activity/like/{address}/{targetReferral}")
        , d = e => {
          let {refetch: t} = l(e)
            , {refetch: a} = c(e)
            , {mutateAsync: r, ...u} = s.QF.useMutation("get", "/v1/activity/activate/{address}/{type}", {});
          return {
              data: u,
              mutateAsync: async e => {
                  let {address: s, type: u, token: d} = e;
                  try {
                      switch (await r({
                          params: {
                              headers: {
                                  Authorization: "Bearer ".concat(d)
                              },
                              path: {
                                  address: s,
                                  type: u
                              }
                          }
                      }),
                      u) {
                      case i.h.CheckIn:
                          a();
                          break;
                      case i.h.ShareX:
                          t()
                      }
                  } catch (e) {
                      (0,
                      n.r)(e)
                  }
              }
          }
      }
        , o = e => s.QF.useQuery("get", "/v1/activity/like/rank/{address}", {
          params: {
              path: {
                  address: e
              }
          }
      }, {
          enabled: !!e && (0,
          r.yG)(e),
          select: e => ({
              ...e,
              data: null == e ? void 0 : e.data.sort( (e, t) => r.MR.descend(e.count, t.count))
          })
      })
        , c = e => s.QF.useQuery("get", "/v1/activity/check-in/{address}", {
          params: {
              path: {
                  address: e
              }
          }
      }, {
          enabled: !!e && (0,
          r.yG)(e)
      })
        , l = e => s.QF.useQuery("get", "/v1/activity/post-sharing/{address}", {
          params: {
              path: {
                  address: e
              }
          }
      }, {
          enabled: !!e && (0,
          r.yG)(e)
      })
  },
  94048: function(e, t, a) {
      "use strict";
      a.d(t, {
          EA: function() {
              return n
          },
          oH: function() {
              return d
          },
          ps: function() {
              return i
          },
          x5: function() {
              return u
          }
      });
      var r = a(45150)
        , s = a(68369);
      let n = e => s.QF.useQuery("get", "/v1/referral/{address}", {
          params: {
              path: {
                  address: null != e ? e : ""
              }
          }
      }, {
          enabled: !!(0,
          r.yG)(e)
      })
        , i = () => s.QF.useMutation("post", "/v1/referral/register")
        , u = e => s.QF.useQuery("get", "/v1/discord/{address}", {
          params: {
              path: {
                  address: e
              }
          }
      }, {
          enabled: (0,
          r.yG)(e)
      })
        , d = () => s.QF.useMutation("get", "/v1/integrations/discord/{address}/{signature}")
  },
  40599: function(e, t, a) {
      "use strict";
      var r, s;
      a.d(t, {
          h: function() {
              return r
          }
      }),
      (s = r || (r = {})).CheckIn = "CHECK_IN",
      s.ShareX = "POST_SHARING"
  },
  28603: function(e, t, a) {
      "use strict";
      a.d(t, {
          B: function() {
              return u
          },
          l: function() {
              return i
          }
      });
      var r = a(43271)
        , s = a(91719)
        , n = a(45150);
      let i = async e => {
          let {wagmiConfig: t, walletClient: a, message: i, currentChain: u} = e;
          if (void 0 === a || null === t)
              throw new n.yV({
                  code: 9999,
                  message: "Wallet client is not initialized"
              });
          let d = {
              ...i,
              domain: {
                  ...i.domain,
                  chainId: u
              }
          };
          n._6.includes(u) || (await a.switchChain({
              id: (0,
              n.CV)("ethereum")
          }),
          u = (0,
          n.CV)("ethereum"),
          d.domain.chainId = u);
          let o = void 0 !== await (0,
          s.c)(t, {
              address: a.account.address
          }) ? (0,
          r.Jv)(d) : ""
            , c = await a.signTypedData(d);
          return {
              requestedChainId: u,
              address: a.account.address,
              signature: c,
              safeMessage: o
          }
      }
        , u = e => (null == e ? void 0 : e.length) === 6 && /^[a-zA-Z0-9]+$/.test(e)
  },
  53260: function() {}
}]);
