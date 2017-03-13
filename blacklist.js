const blacklist = [
  'payment24.ir',
  'www.postfinance.ch',
  'www.typewolf.com',
  'www.crazydomains.com.au',
  'www.namepros.com',
  'animoto.com',
  'www.blablacar.fr',
  'www.blablacar.pl',
  'www.sofort.com',
  'www.edmodo.com',
  'www.lyst.co.uk',
  'www.quotev.com',
  'www.letras.mus.br',
  'wikitech.wikimedia.org',
  'www.spree.co.za',
  'www.sikayetvar.com',
  'www.gaytorrent.ru',
  'www.keycdn.com',
  'www.reddit.com',
  'www.whatsapp.com',
  'www.englishforums.com',
  'www.englishclub.com',
  'content.ad',
  'www.raymond.cc',
  'www.telstra.com.au',
  'www.ss.lv',
  'www.ftc.gov',
  'www.adreactor.com',
  'www.suzukikenichi.com',
  'www.pciconcursos.com.br',
  'www.fxp.co.il',
  'www.mall.sk',
  'www.epublibre.org',
  'www.blablacar.ru',
  'www.expressvpn.com',
  'www.mall.cz',
  'www.ephotozine.com',
  'www.mimovrste.com',
  'www.popads.net',
  'blog.google',
  'a-ads.com',
  'www.waze.com',
  'fulltraffic.net',
  'www.cybozu.com',
  'www.quantcast.com',
  'www.instacart.com',
  'www.govtrack.us',
  'www.dpd.com.pl',
  'mail.ru',
  'www.typing.com',
  'www.blablacar.de',
  'www.raiffeisen.hu',
  'www.rb.cz',
  'noscript.net',
  'tutanota.com',
  'www.cyberagent.co.jp',
  'www.daybreakgames.com',
  'levtech.jp',
  'www.arbeitsagentur.de',
  'www.ubuntu.com',
  'clegc-gckey.gc.ca',
  'cic.fr',
  'clickpost.jp',
  'cvut.cz',
  'einthusan.tv',
  'gekiura.com',
  'gimp.org',
  'hud.gov',
  'launchpad.net',
  'pingidentity.com',
  'registro.br',
  'servis24.cz',
  'subscribe.free.fr',
  'www.anghami.com',
  'www.pcloud.com',
  'www.jooto.com',
  'www.firstdata.com',
  'www.impots.gouv.fr',
  'www.iiit.ac.in',
  'www.national-lottery.co.uk',
  'www.plymouth.ac.uk',
  'www.principal.com',
  'www.rossmann.de',
  'www.sskm.de',
  'monova.org',
  'ukpirate.click',
  'ukpirateproxy.xyz',
  'avxhome.se',
  'www.rb24.ir'
]

window.BLACKLIST_HOSTS = blacklist.map((host) => {
  return `http://${host}:443/`
})
