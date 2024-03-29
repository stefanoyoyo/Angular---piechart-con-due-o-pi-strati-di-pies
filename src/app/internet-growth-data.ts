export interface InetData {
  name: string;
  data: {
    category: string;
    value: number;
    color: string;
    nthSeries?: number,
    sliceWidth?: number;
    canShowLabel?: boolean;
  }[];
}

export const mockData: InetData[] = [
  {
    name: '1',
    data: [
      {
        nthSeries: 1,
        category: 'A.S. 1',
        value: 1,
        sliceWidth: 1,
        color: '#deb456',
      },
      {
        nthSeries: 1,
        category: 'A.S. 2',
        value: 2,
        sliceWidth: 2,
        color: '#FF0000',
      },
      {
        nthSeries: 1,
        category: 'A.S. 3',
        value: 3,
        sliceWidth: 3,
        color: '#00FF00',
      },
    ],
  },
  {
    name: '2',
    data: [
      {
        canShowLabel: true,
        nthSeries: 2,
        category: 'A110',
        value: 3,
        sliceWidth: 1,
        color: '#deb456',
      },      
      {
        canShowLabel: true,
        nthSeries: 2,
        category: 'B234',
        value: 5,
        sliceWidth: 1,
        color: '#FF0000',
      },      
      {
        canShowLabel: false,
        nthSeries: 2,
        category: 'S332',
        value: 7,
        sliceWidth: 1,
        color: '#FF0000',
      },      
      {
        canShowLabel: true,
        nthSeries: 2,
        category: 'E332',
        value: 8,
        sliceWidth: 1,
        color: '#00FF00',
      },      
      {
        canShowLabel: false,
        nthSeries: 2,
        category: 'Y665',
        value: 2,
        sliceWidth: 1,
        color: '#00FF00',
      },      
      {
        canShowLabel: false,
        nthSeries: 2,
        category: 'G432',
        value: 9,
        sliceWidth: 1,
        color: '#00FF00',
      },
    ],
  },
];

export const internetGrowthData: InetData[] = [
  {
    name: '2011',
    data: [
      {
        category: 'Asia',
        value: 30,
        color: '#deb456',
      },
      {
        category: 'Europe',
        value: 20,
        color: '#90cc38',
      },
      {
        category: 'Latin America',
        value: 10,
        color: '#068c35',
      },
      {
        category: 'Africa',
        value: 10,
        color: '#006634',
      },
      {
        category: 'Middle East',
        value: 20,
        color: '#004d38',
      },
      {
        category: 'North America',
        value: 10,
        color: '#033939',
      },
    ],
  },
  {
    name: '2012',
    data: [
      //Asia
      {
        category: 'Asia',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'Europe',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'Latin America',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'Africa',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'Middle East',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'North America',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'North America',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'North America',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'North America',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'North America',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'Asia',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'Europe',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'Latin America',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'Africa',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'Middle East',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'North America',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'North America',
        value: 1,
        color: '#deb456',
      },
      {
        category: 'North America',
        value: 1,
        color: '#deb456',
      },
      // Europa
      {
        category: 'North America',
        value: 1,
        color: '#9de219',
      },
      {
        category: 'North America',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'Asia',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'Europe',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'Latin America',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'Africa',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'Middle East',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'North America',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'North America',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'North America',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'North America',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'North America',
        value: 1,
        color: '#90cc38',
      },
      // Latin america
      {
        category: 'Latin america',
        value: 1,
        color: '#068c35',
      },
      {
        category: 'Europe',
        value: 1,
        color: '#068c35',
      },
      {
        category: 'Latin America',
        value: 1,
        color: '#068c35',
      },
      {
        category: 'Africa',
        value: 1,
        color: '#068c35',
      },
      {
        category: 'Middle East',
        value: 1,
        color: '#068c35',
      },
      {
        category: 'North America',
        value: 1,
        color: '#068c35',
      },
      {
        category: 'North America',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'North America',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'North America',
        value: 1,
        color: '#90cc38',
      },
      // North america
      {
        category: 'North America',
        value: 1,
        color: '#006634',
      },
      {
        category: 'Asia',
        value: 1,
        color: '#006634',
      },
      {
        category: 'Europe',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'Latin America',
        value: 1,
        color: '#006634',
      },
      {
        category: 'Africa',
        value: 1,
        color: '#006634',
      },
      {
        category: 'Middle East',
        value: 1,
        color: '#006634',
      },
      {
        category: 'North America',
        value: 1,
        color: '#006634',
      },
      {
        category: 'North America',
        value: 1,
        color: '#006634',
      },
      // Africa
      {
        category: 'North America',
        value: 1,
        color: '#033939',
      },
      {
        category: 'North America',
        value: 1,
        color: '#033939',
      },
      {
        category: 'North America',
        value: 1,
        color: '#033939',
      },
      {
        category: 'Asia',
        value: 1,
        color: '#9de219',
      },
      {
        category: 'Europe',
        value: 1,
        color: '#90cc38',
      },
      {
        category: 'Latin America',
        value: 1,
        color: '#068c35',
      },
      {
        category: 'Africa',
        value: 1,
        color: '#006634',
      },
      {
        category: 'Middle East',
        value: 1,
        color: '#004d38',
      },
      {
        category: 'North America',
        value: 1,
        color: '#033939',
      },
      {
        category: 'North America',
        value: 1,
        color: '#033939',
      },
      {
        category: 'North America',
        value: 1,
        color: '#033939',
      },
      {
        category: 'North America',
        value: 1,
        color: '#033939',
      },
      {
        category: 'North America',
        value: 1,
        color: '#033939',
      },
    ],
  },
];
