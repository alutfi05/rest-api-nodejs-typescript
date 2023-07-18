import 'dotenv/config'

const CONFIG = {
  db: process.env.DB,
  jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArPypxrg3htpxEJTe21Tw
/OLnAsLs4jKfGaymI4hVPmm73lGWsjHEc4klODXLAqKTNAit8nyfW7p20Vp1fUIt
wDj5Q/Kp39J23azZuzKADI0h3z6A7l+s6bV7JpXb61geckfmy7LtKB1fZbLHDrtB
86X86ybwI2755x5fjl0YmYuwUWC8KjUUZU8Ojl8BKcfkC0OsLARHV2gKOV14g1S+
IVOIcSxu3LXMuebzNyaykhwkzeVzrCGO7E+NShKFiHW/3dE59bBem/HuWMXxDK5m
Km2KfWqbMSlTOK3Laf+xTiWh+P3FE7K/a0Rs+6nP85nRuWt0sDMdh0kyvv0a0uD7
BQIDAQAB
-----END PUBLIC KEY-----`,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEArPypxrg3htpxEJTe21Tw/OLnAsLs4jKfGaymI4hVPmm73lGW
sjHEc4klODXLAqKTNAit8nyfW7p20Vp1fUItwDj5Q/Kp39J23azZuzKADI0h3z6A
7l+s6bV7JpXb61geckfmy7LtKB1fZbLHDrtB86X86ybwI2755x5fjl0YmYuwUWC8
KjUUZU8Ojl8BKcfkC0OsLARHV2gKOV14g1S+IVOIcSxu3LXMuebzNyaykhwkzeVz
rCGO7E+NShKFiHW/3dE59bBem/HuWMXxDK5mKm2KfWqbMSlTOK3Laf+xTiWh+P3F
E7K/a0Rs+6nP85nRuWt0sDMdh0kyvv0a0uD7BQIDAQABAoIBAAie5s8SayH7TNso
sBp6FzBjFmQa1rdHEoqzAeyPZMAhgM1Jf5sNw96GHSa5944AEBntvM1yzHZDypwQ
R/6gB6umqzVpqHGRCX9ul8MudxcpCWEYulAm0HUtKB/6I+WMlKfZUXUhS5ROMmzd
BfKD/ntn8Dy/ygPaCfYsm1J67TjpmiS7FvlzaE1qRAFG1oZoRDrIiaJJnYj3pjHr
XVAe/fffMofjRRCD28YgOIVmPvZFvAwd4ww5C2V983TmxIlvLnZIT/woA2U0WiSO
SVUWbK6+32SzuiLdwMLU6khwXxnDLtVxy4gvThsJpKfgWd+oxQqjLQrmlRQS4vr+
hakoZtkCgYEA5x7NsBnT5Apar/4mQ5jiKe/HYmgUTajSzsjkQC0JnJps5tDcmBJl
JkHwrgcrn4RllyI9P7XkdiC/QTVe3HhHudQHhyqdNq3LOvyHWjTOORKd6FaMqOUl
4B5IC3pZXpoR5ntxVpB15J/1sq6nzWyHF5/M8c4MlP85z9eyrXVEOjMCgYEAv5vT
MBP0kaSXI3+Jze3MR+Yf63viMZocRiIf7Fh23KN/coLa+SOZhi0HJn2tSjHfIYNf
h1pnxGmiuKdC1RlLWNpiNiCDR4BvLZEyrwjOUqATgKMYWtBVT6DFmoT/PvC5OzTC
cI1cp9Fw7UmjB2L3ZQWxWS1tjN6ZGgQsvzkUrecCgYEAheO0aMYtmDffXYEwDYzt
yDmeGgYNbQfWR/DdOchdfxl+6SAqCvbtHgKpOUfyH5EFgU5WiSgIV96UrWQLtlD/
zElmqwkm1lxMFbnhd4KLzUhZrhUlm1pUXMduGSghycobgJgWin1Zrr50CbVghILQ
qADtK0+gvlg015Evc4kxoz0CgYA4mu9D99E7qZUg3o+2b3b3EqwBZGLJZo7NxU0L
BINw4ThIexH3oiW7ttey7lPgZGVXwDjbgsC/DLoOtRMQY12YDUQQW4CNAgtWOdvw
S7iwPiwkx4ntYjihwow9/uZtEK6YKBj9KTXjOgOThjqMdxdBF/JxtvLzN9uhDPSv
NUy/pwKBgGdFF2PZfNcSVEO8/X340YPp1H4nrURiy8B7Y5zDJ8p3mBedf7xtJo8k
tkkHF0MLBmjWUFdPzj8onPZ/ThorZWLk4/sgOeFED1MR3l7ivErtN+ujNBOP+SUh
dbZ+n2gRYCpARzSg4uaYxlb861Ymwf4Lo/VL9RNuHBr/U3ZaqTmt
-----END RSA PRIVATE KEY-----`
}

export default CONFIG
