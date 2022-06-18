import puppeteer from 'puppeteer';
import userAgents from 'user-agents';
import { listGroupUserIds } from '../../modules/steam'

export default async function csgo(req: any, res: any) {
  // const ids = await listGroupUserIds('NatusLactare')

  // const browser = await puppeteer.launch();
  // const promises = ids.map(async (id: string) => {
  //   const page = await browser.newPage();
  //   await page.setUserAgent(userAgents.toString());
  //   const playerURL = `https://csgostats.gg/player/${id}`;
  //   await page.goto(playerURL);

  //   try {
  //     const image = await page.$eval('#content-wrapper > div.main-container > div:nth-child(1) > div > div.player-ranks-outer > div.player-ranks > img', (ele: any) => ele?.src);
  //     const name = await page.$eval('#player-name', (ele: any) => ele?.textContent);
  //     const wins = await page.$eval('#competitve-wins > span', (ele: any) => ele?.textContent);
  //     return { image, name, wins, id, playerURL }
  //   } catch (error) {
  //     return { image: '', name: '', wins: '', id, playerURL  }
  //   }
  // })

  // const images = await Promise.all(promises)
 
  // await browser.close();

  
  // const response = images.map((ggData: any) => ({
  //   id: ggData.id,
  //   name: ggData.name,
  //   rankingImage: ggData.image,
  //   ranking: Number(ggData.image.split('https://static.csgostats.gg/images/ranks/')[1].split('.')[0]),
  //   wins: ggData.wins,
  //   playerURL: ggData.playerURL,
  // }))
  
  const response = [
    {
      "id": "76561198838491753",
      "name": "N3TzAO ",
      "rankingImage": "https://static.csgostats.gg/images/ranks/11.png",
      "ranking": 11,
      "wins": "437",
      "playerURL": "https://csgostats.gg/player/76561198838491753"
    },
    {
      "id": "76561198097995143",
      "name": "braya ",
      "rankingImage": "https://static.csgostats.gg/images/ranks/11.png",
      "ranking": 11,
      "wins": "443",
      "playerURL": "https://csgostats.gg/player/76561198097995143"
    },
    {
      "id": "76561198106417092",
      "name": "gabes ",
      "rankingImage": "https://static.csgostats.gg/images/ranks/10.png",
      "ranking": 10,
      "wins": "243",
      "playerURL": "https://csgostats.gg/player/76561198106417092"
    },
    {
      "id": "76561198203204045",
      "name": "Marcão ",
      "rankingImage": "https://static.csgostats.gg/images/ranks/9.png",
      "ranking": 9,
      "wins": "130",
      "playerURL": "https://csgostats.gg/player/76561198203204045"
    },
    {
      "id": "76561198966795743",
      "name": "NoZeN ",
      "rankingImage": "https://static.csgostats.gg/images/ranks/10.png",
      "ranking": 10,
      "wins": "564",
      "playerURL": "https://csgostats.gg/player/76561198966795743"
    },
    {
      "id": "76561198131350718",
      "name": "Raygon ",
      "rankingImage": "https://static.csgostats.gg/images/ranks/11.png",
      "ranking": 11,
      "wins": "441",
      "playerURL": "https://csgostats.gg/player/76561198131350718"
    },
    {
      "id": "76561198122271593",
      "name": "Et Bilu da Massa ",
      "rankingImage": "https://static.csgostats.gg/images/ranks/9.png",
      "ranking": 9,
      "wins": "59",
      "playerURL": "https://csgostats.gg/player/76561198122271593"
    }
  ]
  
  res.json(response)
}