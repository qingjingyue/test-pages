export interface IpData {
  city: string
  continent: string
  country: string
  ip: string
  latitude: string
  longitude: string
  province: string
  version: string
}

export interface HelloResponse {
  code: number
  data: IpData
  msg: string
}

/**
 * 获取当前 IP 地址的详细信息
 * @returns Promise<IpData>
 */
export async function hello(): Promise<IpData> {
  return fetch("https://app.ipdatacloud.com/v1/ip_self_search", {
    method: "POST",
    headers: {
      "Referer": "https://www.ip66.net/"
    }
  })
    .then((res) => res.json() as Promise<HelloResponse>)
    .then((data) => data.data);
}