export interface EventItem {
  id: string
  title: string
  flyerImage: string
  flyerAlt: string
  ticketUrl: string
  date: string
  time: string
  venue: string
  venueAddress?: string
  ticketPrice: string
  memo?: string[]
}

export const events: EventItem[] = [
  {
    id: 'situation-room-vol1',
    title: 'The Situation Room Vol.1',
    flyerImage: '/images/event/situationRoomVol1.jpg',
    flyerAlt: 'The Situation Room Vol.1 イベントフライヤー',
    // ticketUrl: 'https://livepocket.jp/e/pj-qb',
    ticketUrl: 'https://livepocket.jp/e/ndt0l',
    date: '2026年5月31日（日）',
    time: '開場 15:00 / 開演 15:20 / 終演 17:00',
    venue: 'Crypto Lounge GOX',
    venueAddress: '東京都新宿区歌舞伎町２丁目１９−１５ てなむタウンビル6階',
    ticketPrice: '会場 ¥2,000 / 配信(YouTube) ¥1,500',
    memo: [
      'アーカイブ配信チケットを販売しています！',
      '※当日配信チケットを購入された方は、同じリンクでご覧になれますので購入はご不要です。'
    ],
  },
  {
    id: 'situation-vol1',
    title: 'The Situation Vol.1',
    flyerImage: '/images/event/situationVol1.jpeg',
    flyerAlt: 'The Situation Vol.1 イベントフライヤー',
    ticketUrl: 'https://livepocket.jp/e/hbzef',
    date: '2026年3月15日（日）',
    time: '開場 11:00 / 開演 11:20 / 終演 20:00',
    venue: 'Crypto Lounge GOX',
    venueAddress: '東京都新宿区歌舞伎町２丁目１９−１５ てなむタウンビル6階',
    ticketPrice: '一般 ¥3,500（税込） / 学生 ¥1,500（税込）',
  },
]
