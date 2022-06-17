import axios from 'axios'
import xml2js from 'xml2js'


const httpClient = axios.create({
  baseURL: "https://steamcommunity.com",
  responseType: 'text',
  headers: {
    Accept: 'application/xml'
  }
})

export default async function listGroupUserIds(groupName) {
  const response = await httpClient.get(`/groups/${groupName}/memberslistxml/?xml=1`)

  const result = await xml2js.parseStringPromise(response.data)

  const ids = result.memberList.members[0].steamID64

  return ids.map(id => Number(id));
}