import {SuggestResponse} from '../../interface/route.interface';

export const mock: SuggestResponse = {
  location: {
    start: '경기 용인시 기흥구 동백1로 31',
    end: '강남대로 429',
  },
  stationInfo: {
    '초당중학교.삼부르네상스아파트': {
      lon: '127.158489',
      lat: '37.264847',
      stationId: '228000174',
    },
    '두산위브더제니스.호수마을.자연엔데시앙': {
      lon: '127.150714',
      lat: '37.285067',
      stationId: '228000157',
    },
    '신논현역.주류성빌딩': {
      lon: '127.02585277777777',
      lat: '37.501063888888886',
      stationId: null,
    },
    '동백고.풍림코아루.호수마을서해그랑블': {
      lon: '127.158789',
      lat: '37.281531',
      stationId: '228000168',
    },
    도착지: {
      lon: '127.02585277777777',
      lat: '37.501063888888886',
      stationId: null,
    },
    동백경남아너스빌: {
      lon: '127.157042',
      lat: '37.267119',
      stationId: '228000173',
    },
    동백중학교: {
      lon: '127.158836',
      lat: '37.284814',
      stationId: '228000148',
    },
    '동백소방서.동일하이빌.롯데캐슬': {
      lon: '127.155367',
      lat: '37.278150',
      stationId: '228000169',
    },
    동백2동행정복지센터: {
      lon: '127.151764',
      lat: '37.272072',
      stationId: '228000171',
    },
    수원컨트리클럽: {
      lon: '127.119406',
      lat: '37.275944',
      stationId: '228000683',
    },
    '강남대역.강남대입구': {
      lon: '127.125531',
      lat: '37.271228',
      stationId: '228000684',
    },
    기흥역: {
      lon: '127.114586',
      lat: '37.275964',
      stationId: '228000682',
    },
    어정역: {
      lon: '127.143625',
      lat: '37.275525',
      stationId: '228000143',
    },
    어정풍림아파트: {
      lon: '127.138806',
      lat: '37.273736',
      stationId: '228000142',
    },
    '롯데캐슬스카이.이안두드림.백남준아트센터': {
      lon: '127.108803',
      lat: '37.271881',
      stationId: '228000681',
    },
    '어정삼거리.강남마을': {
      lon: '127.129758',
      lat: '37.268681',
      stationId: '228000685',
    },
    갈천마을: {
      lon: '127.137311',
      lat: '37.272003',
      stationId: '228000141',
    },
    출발지: {
      lon: '127.1598472470739',
      lat: '37.26497823618022',
      stationId: null,
    },
    '동백역.성산마을서해그랑블': {
      lon: '127.154003',
      lat: '37.270711',
      stationId: '228000172',
    },
    '상미마을.신갈오거리.롯데캐슬레이시티': {
      lon: '127.103583',
      lat: '37.271067',
      stationId: '228000680',
    },
    '동막초등학교.호수마을계룡리슈빌.어울림': {
      lon: '127.154983',
      lat: '37.285397',
      stationId: '228000147',
    },
    동백이마트: {
      lon: '127.151519',
      lat: '37.279044',
      stationId: '228000155',
    },
    지석역: {
      lon: '127.134875',
      lat: '37.269475',
      stationId: '228002137',
    },
    쥬네브상가: {
      lon: '127.151703',
      lat: '37.275281',
      stationId: '228000170',
    },
  },
  infoList: [
    {
      summary: {
        taxiFare: 5400,
        wastedTime: 3451,
        savedTime: 1843,
        savedMoney: 45600,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 377,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '동백이마트'],
        },
        {
          mode: 'BUS',
          sectionTime: 3060,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '동백이마트',
            '어정역',
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 6300,
        wastedTime: 3188,
        savedTime: 2106,
        savedMoney: 44700,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 474,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '갈천마을'],
        },
        {
          mode: 'BUS',
          sectionTime: 2700,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 6100,
        wastedTime: 3274,
        savedTime: 2020,
        savedMoney: 44900,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 440,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '어정풍림아파트'],
        },
        {
          mode: 'BUS',
          sectionTime: 2820,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 6700,
        wastedTime: 3177,
        savedTime: 2117,
        savedMoney: 44300,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 523,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '지석역'],
        },
        {
          mode: 'BUS',
          sectionTime: 2640,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 6400,
        wastedTime: 3430,
        savedTime: 1864,
        savedMoney: 44600,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 536,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '어정역'],
        },
        {
          mode: 'BUS',
          sectionTime: 2880,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '어정역',
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 7200,
        wastedTime: 3191,
        savedTime: 2103,
        savedMoney: 43800,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 597,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '어정삼거리.강남마을'],
        },
        {
          mode: 'BUS',
          sectionTime: 2580,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 7600,
        wastedTime: 3124,
        savedTime: 2170,
        savedMoney: 43400,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 650,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '강남대역.강남대입구'],
        },
        {
          mode: 'BUS',
          sectionTime: 2460,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 6400,
        wastedTime: 3764,
        savedTime: 1530,
        savedMoney: 44600,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 570,
          route: null,
          routeId: null,
          stationList: [
            '강남대로 429',
            '두산위브더제니스.호수마을.자연엔데시앙',
          ],
        },
        {
          mode: 'BUS',
          sectionTime: 3180,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '두산위브더제니스.호수마을.자연엔데시앙',
            '동백이마트',
            '어정역',
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 4900,
        wastedTime: 4178,
        savedTime: 1116,
        savedMoney: 46100,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 384,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '쥬네브상가'],
        },
        {
          mode: 'BUS',
          sectionTime: 3780,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '쥬네브상가',
            '동백소방서.동일하이빌.롯데캐슬',
            '동백고.풍림코아루.호수마을서해그랑블',
            '동백중학교',
            '동막초등학교.호수마을계룡리슈빌.어울림',
            '두산위브더제니스.호수마을.자연엔데시앙',
            '동백이마트',
            '어정역',
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 4800,
        wastedTime: 4166,
        savedTime: 1128,
        savedMoney: 46200,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 312,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '동백2동행정복지센터'],
        },
        {
          mode: 'BUS',
          sectionTime: 3840,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '동백2동행정복지센터',
            '쥬네브상가',
            '동백소방서.동일하이빌.롯데캐슬',
            '동백고.풍림코아루.호수마을서해그랑블',
            '동백중학교',
            '동막초등학교.호수마을계룡리슈빌.어울림',
            '두산위브더제니스.호수마을.자연엔데시앙',
            '동백이마트',
            '어정역',
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 4800,
        wastedTime: 4176,
        savedTime: 1118,
        savedMoney: 46200,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 262,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '동백역.성산마을서해그랑블'],
        },
        {
          mode: 'BUS',
          sectionTime: 3900,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '동백역.성산마을서해그랑블',
            '동백2동행정복지센터',
            '쥬네브상가',
            '동백소방서.동일하이빌.롯데캐슬',
            '동백고.풍림코아루.호수마을서해그랑블',
            '동백중학교',
            '동막초등학교.호수마을계룡리슈빌.어울림',
            '두산위브더제니스.호수마을.자연엔데시앙',
            '동백이마트',
            '어정역',
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 4800,
        wastedTime: 4153,
        savedTime: 1141,
        savedMoney: 46200,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 119,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '동백경남아너스빌'],
        },
        {
          mode: 'BUS',
          sectionTime: 4020,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '동백경남아너스빌',
            '동백역.성산마을서해그랑블',
            '동백2동행정복지센터',
            '쥬네브상가',
            '동백소방서.동일하이빌.롯데캐슬',
            '동백고.풍림코아루.호수마을서해그랑블',
            '동백중학교',
            '동막초등학교.호수마을계룡리슈빌.어울림',
            '두산위브더제니스.호수마을.자연엔데시앙',
            '동백이마트',
            '어정역',
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 4800,
        wastedTime: 4160,
        savedTime: 1134,
        savedMoney: 46200,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 66,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '초당중학교.삼부르네상스아파트'],
        },
        {
          mode: 'BUS',
          sectionTime: 4080,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '초당중학교.삼부르네상스아파트',
            '동백경남아너스빌',
            '동백역.성산마을서해그랑블',
            '동백2동행정복지센터',
            '쥬네브상가',
            '동백소방서.동일하이빌.롯데캐슬',
            '동백고.풍림코아루.호수마을서해그랑블',
            '동백중학교',
            '동막초등학교.호수마을계룡리슈빌.어울림',
            '두산위브더제니스.호수마을.자연엔데시앙',
            '동백이마트',
            '어정역',
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 6500,
        wastedTime: 4292,
        savedTime: 1002,
        savedMoney: 44500,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 618,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '동백소방서.동일하이빌.롯데캐슬'],
        },
        {
          mode: 'BUS',
          sectionTime: 3660,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '동백소방서.동일하이빌.롯데캐슬',
            '동백고.풍림코아루.호수마을서해그랑블',
            '동백중학교',
            '동막초등학교.호수마을계룡리슈빌.어울림',
            '두산위브더제니스.호수마을.자연엔데시앙',
            '동백이마트',
            '어정역',
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
    {
      summary: {
        taxiFare: 7300,
        wastedTime: 4312,
        savedTime: 982,
        savedMoney: 43700,
      },
      steps: [
        {
          mode: 'TAXI',
          sectionTime: 758,
          route: null,
          routeId: null,
          stationList: ['강남대로 429', '동백고.풍림코아루.호수마을서해그랑블'],
        },
        {
          mode: 'BUS',
          sectionTime: 3540,
          route: '직행좌석:5003A',
          routeId: '228000389',
          stationList: [
            '동백고.풍림코아루.호수마을서해그랑블',
            '동백중학교',
            '동막초등학교.호수마을계룡리슈빌.어울림',
            '두산위브더제니스.호수마을.자연엔데시앙',
            '동백이마트',
            '어정역',
            '어정풍림아파트',
            '갈천마을',
            '지석역',
            '어정삼거리.강남마을',
            '강남대역.강남대입구',
            '수원컨트리클럽',
            '기흥역',
            '롯데캐슬스카이.이안두드림.백남준아트센터',
            '상미마을.신갈오거리.롯데캐슬레이시티',
            '신논현역.주류성빌딩',
          ],
        },
        {
          mode: 'WALK',
          sectionTime: 14,
          route: null,
          routeId: null,
          stationList: ['신논현역.주류성빌딩', '도착지'],
        },
      ],
    },
  ],
};
