// app/core/lib/constants.ts

export const TAX_CATEGORIES = [
    {
      id: "national",
      name: "국세",
      laws: [
        "소득세법",
        "법인세법",
        "부가가치세법",
        "상속세 및 증여세법",
        "조세특례제한법",
        "종합부동산세법",
      ],
    },
    {
      id: "local",
      name: "지방세",
      laws: ["지방세법", "지방세기본법", "지방세징수법", "지방세특례제한법"],
    },
    {
      id: "intl",
      name: "국제조세",
      laws: ["국제조세조정에 관한 법률", "외국인투자촉진법"],
    },
    {
      id: "procedure",
      name: "절차/기본/징수",
      laws: ["국세기본법", "국세징수법", "조세범처벌법", "조세범처벌절차법"],
    },
    {
      id: "special",
      name: "특별/기타세법",
      laws: [
        "개별소비세법",
        "주세법",
        "주류 면허 등에 관한 법률",
        "인지세법",
        "교육세법",
        "농어촌특별세법",
        "자산재평가법",
        "교통·에너지·환경세법",
        "증권거래세법",
      ],
    },
  ];
  
  // 세부 구분은 모든 법에 동일하게 사용
  export const SUB_LAW_TYPES = ["법", "시행령", "시행규칙"] as const;
  
  // 질문 유형(관점)
  export const QUESTION_VIEW_TYPES = [
    { id: "statute", label: "법령기반" },
    { id: "practice", label: "실무기반" },
  ] as const;
  
  // 공개 범위
  export const VISIBILITY_OPTIONS = [
    { id: "public", label: "전체 공개" },
    { id: "members", label: "세무사 회원" },
    { id: "invited", label: "초대 전용" },
  ] as const;
  

  export const INDUSTRY_CODES = 
  [
    {
      "code": "1",
      "name": "농업",
      "children": []
    },
    {
      "code": "10",
      "name": "식료품 제조업",
      "children": []
    },
    {
      "code": "101",
      "name": "도축, 육류 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "1011",
      "name": "도축업",
      "children": []
    },
    {
      "code": "10110",
      "name": "도축업",
      "children": [
        {
          "code": "10111",
          "name": "육류 도축업(가금류 제외)"
        },
        {
          "code": "10112",
          "name": "가금류 도축업"
        }
      ]
    },
    {
      "code": "10111",
      "name": "육류 도축업(가금류 제외)",
      "children": []
    },
    {
      "code": "10112",
      "name": "가금류 도축업",
      "children": []
    },
    {
      "code": "1012",
      "name": "육류 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "10121",
      "name": "가금류 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "10122",
      "name": "육류 포장육 및 냉동육 가공업 (가금류 제외)",
      "children": []
    },
    {
      "code": "10129",
      "name": "기타 육류 가공 및 저장처리업",
      "children": [
        {
          "code": "10122",
          "name": "육류 포장육 및 냉동육 가공업(가금류 제외)"
        }
      ]
    },
    {
      "code": "10129",
      "name": "육류 기타 가공 및 저장처리업 (가금류 제외)",
      "children": []
    },
    {
      "code": "102",
      "name": "수산물 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "1021",
      "name": "수산동물 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "10211",
      "name": "수산동물 훈제, 조리 및 유사 조제식품 제조업",
      "children": []
    },
    {
      "code": "10212",
      "name": "수산동물 건조 및 염장품 제조업",
      "children": []
    },
    {
      "code": "10213",
      "name": "수산동물 냉동품 제조업",
      "children": []
    },
    {
      "code": "10219",
      "name": "기타 수산동물 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "10219",
      "name": "기타 수산동물 가공 및 저장처리업",
      "children": []
    },
    {
      "code": "1022",
      "name": "수산식물 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "10220",
      "name": "수산식물 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "103",
      "name": "과실, 채소 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "1030",
      "name": "과실, 채소 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "10301",
      "name": "과실 및 채소 절임식품 제조업",
      "children": [
        {
          "code": "10302",
          "name": "과실 및 그 외 채소 절임식품 제조업"
        }
      ]
    },
    {
      "code": "10301",
      "name": "김치류 제조업",
      "children": []
    },
    {
      "code": "10302",
      "name": "과실 및 그 외 채소 절임식품 제조업",
      "children": []
    },
    {
      "code": "10309",
      "name": "기타 과실·채소 가공 및 저장처리업",
      "children": []
    },
    {
      "code": "10309",
      "name": "기타 과실ㆍ채소 가공 및 저장 처리업",
      "children": []
    },
    {
      "code": "104",
      "name": "동물성 및 식물성 유지 제조업",
      "children": []
    },
    {
      "code": "1040",
      "name": "동물성 및 식물성 유지 제조업",
      "children": [
        {
          "code": "1041",
          "name": "동물성 및 식물성 유지 제조업"
        }
      ]
    },
    {
      "code": "10401",
      "name": "동물성 유지 제조업",
      "children": [
        {
          "code": "10411",
          "name": "동물성 유지 제조업"
        }
      ]
    },
    {
      "code": "10402",
      "name": "식물성 유지 제조업",
      "children": [
        {
          "code": "10412",
          "name": "식물성 유지 제조업"
        }
      ]
    },
    {
      "code": "10403",
      "name": "식용 정제유 및 가공유 제조업",
      "children": [
        {
          "code": "10413",
          "name": "식용 정제유 및 가공유 제조업"
        }
      ]
    },
    {
      "code": "105",
      "name": "낙농제품 및 식용빙과류 제조업",
      "children": [
        {
          "code": "104",
          "name": "동·식물성 유지 및 낙농제품 제조업"
        }
      ]
    },
    {
      "code": "1050",
      "name": "낙농제품 및 식용빙과류 제조업",
      "children": [
        {
          "code": "1042",
          "name": "낙농제품 및 식용빙과류 제조업"
        }
      ]
    },
    {
      "code": "10501",
      "name": "액상시유 및 기타 낙농제품 제조업",
      "children": [
        {
          "code": "10421",
          "name": "액상시유 및 기타 낙농제품 제조업"
        }
      ]
    },
    {
      "code": "10502",
      "name": "아이스크림 및 기타 식용빙과류 제조업",
      "children": [
        {
          "code": "10422",
          "name": "아이스크림 및 기타 식용빙과류 제조업"
        }
      ]
    },
    {
      "code": "106",
      "name": "곡물가공품, 전분 및 전분제품 제조업",
      "children": [
        {
          "code": "105",
          "name": "곡물가공품, 전분 및 전분제품 제조업"
        }
      ]
    },
    {
      "code": "1061",
      "name": "곡물 가공품 제조업",
      "children": [
        {
          "code": "1051",
          "name": "곡물 가공품 제조업"
        }
      ]
    },
    {
      "code": "10611",
      "name": "곡물 도정업",
      "children": [
        {
          "code": "10511",
          "name": "곡물 도정업"
        }
      ]
    },
    {
      "code": "10612",
      "name": "곡물 제분업",
      "children": [
        {
          "code": "10512",
          "name": "곡물 제분업"
        }
      ]
    },
    {
      "code": "10613",
      "name": "곡물 혼합분말 및 반죽 제조업",
      "children": [
        {
          "code": "10513",
          "name": "곡물 혼합분말 및 반죽 제조업"
        }
      ]
    },
    {
      "code": "10613",
      "name": "제과용 혼합분말 및 반죽 제조업",
      "children": []
    },
    {
      "code": "10619",
      "name": "기타 곡물 가공품 제조업",
      "children": [
        {
          "code": "10519",
          "name": "기타 곡물 가공품 제조업"
        }
      ]
    },
    {
      "code": "10619",
      "name": "기타 곡물가공품 제조업",
      "children": []
    },
    {
      "code": "1062",
      "name": "전분제품 및 당류 제조업",
      "children": [
        {
          "code": "1052",
          "name": "전분제품 및 당류 제조업"
        }
      ]
    },
    {
      "code": "10620",
      "name": "전분제품 및 당류 제조업",
      "children": [
        {
          "code": "10520",
          "name": "전분제품 및 당류 제조업"
        }
      ]
    },
    {
      "code": "107",
      "name": "기타 식품 제조업",
      "children": [
        {
          "code": "106",
          "name": "떡, 빵 및 과자류 제조업"
        },
        {
          "code": "108",
          "name": "기타 식품 제조업"
        },
        {
          "code": "106",
          "name": "곡물 가공품, 전분 및 전분제품 제조업"
        }
      ]
    },
    {
      "code": "1071",
      "name": "떡, 빵 및 과자류 제조업",
      "children": [
        {
          "code": "1060",
          "name": "떡, 빵 및 과자류 제조업"
        }
      ]
    },
    {
      "code": "10711",
      "name": "떡류 제조업",
      "children": [
        {
          "code": "10601",
          "name": "떡류 제조업"
        }
      ]
    },
    {
      "code": "10712",
      "name": "빵류 제조업",
      "children": [
        {
          "code": "10602",
          "name": "빵류 제조업"
        }
      ]
    },
    {
      "code": "10713",
      "name": "과자류 및 코코아 제품 제조업",
      "children": [
        {
          "code": "10603",
          "name": "과자류 및 코코아 제품 제조업"
        }
      ]
    },
    {
      "code": "10713",
      "name": "코코아 제품 및 과자류 제조업",
      "children": []
    },
    {
      "code": "1072",
      "name": "설탕 제조업",
      "children": [
        {
          "code": "1081",
          "name": "설탕 제조업"
        }
      ]
    },
    {
      "code": "10720",
      "name": "설탕 제조업",
      "children": [
        {
          "code": "10810",
          "name": "설탕 제조업"
        }
      ]
    },
    {
      "code": "1073",
      "name": "면류, 마카로니 및 유사식품 제조업",
      "children": [
        {
          "code": "1082",
          "name": "면류, 마카로니 및 유사식품 제조업"
        },
        {
          "code": "1061",
          "name": "곡물 가공품 제조업"
        }
      ]
    },
    {
      "code": "10730",
      "name": "면류, 마카로니 및 유사식품 제조업",
      "children": [
        {
          "code": "10820",
          "name": "면류, 마카로니 및 유사식품 제조업"
        },
        {
          "code": "10613",
          "name": "곡물 혼합 분말 및 반죽 제조업"
        }
      ]
    },
    {
      "code": "1074",
      "name": "조미료 및 식품 첨가물 제조업",
      "children": [
        {
          "code": "1083",
          "name": "조미료 및 식품 첨가물 제조업"
        }
      ]
    },
    {
      "code": "10741",
      "name": "식초, 발효 및 화학 조미료 제조업",
      "children": [
        {
          "code": "10831",
          "name": "식초, 발효 및 화학 조미료 제조업"
        }
      ]
    },
    {
      "code": "10742",
      "name": "천연 및 혼합조제 조미료 제조업",
      "children": [
        {
          "code": "10832",
          "name": "천연 및 혼합조제 조미료 제조업"
        }
      ]
    },
    {
      "code": "10743",
      "name": "장류 제조업",
      "children": [
        {
          "code": "10833",
          "name": "장류 제조업"
        }
      ]
    },
    {
      "code": "10749",
      "name": "기타 식품 첨가물 제조업",
      "children": [
        {
          "code": "10839",
          "name": "기타 식품 첨가물 제조업"
        }
      ]
    },
    {
      "code": "1075",
      "name": "도시락 및 식사용 조리식품 제조업",
      "children": [
        {
          "code": "1070",
          "name": "도시락 및 식사용 조리식품 제조업"
        }
      ]
    },
    {
      "code": "10751",
      "name": "도시락류 제조업",
      "children": [
        {
          "code": "10701",
          "name": "도시락류 제조업"
        }
      ]
    },
    {
      "code": "10759",
      "name": "기타 식사용 가공처리 조리식품 제조업",
      "children": [
        {
          "code": "10709",
          "name": "기타 식사용 가공처리 조리식품 제조업"
        }
      ]
    },
    {
      "code": "1079",
      "name": "기타 식료품 제조업",
      "children": [
        {
          "code": "1089",
          "name": "기타 식료품 제조업"
        },
        {
          "code": "1075",
          "name": "도시락 및 식사용 조리식품 제조업"
        }
      ]
    },
    {
      "code": "10791",
      "name": "커피 가공업",
      "children": [
        {
          "code": "10891",
          "name": "커피 가공업"
        }
      ]
    },
    {
      "code": "10792",
      "name": "차류 가공업",
      "children": [
        {
          "code": "10892",
          "name": "차류 가공업"
        }
      ]
    },
    {
      "code": "10793",
      "name": "수프 및 균질화식품 제조업",
      "children": [
        {
          "code": "10893",
          "name": "수프 및 균질화식품 제조업"
        }
      ]
    },
    {
      "code": "10794",
      "name": "두부 및 유사식품 제조업",
      "children": [
        {
          "code": "10894",
          "name": "두부 및 유사식품 제조업"
        }
      ]
    },
    {
      "code": "10795",
      "name": "인삼식품 제조업",
      "children": [
        {
          "code": "10895",
          "name": "인삼식품 제조업"
        }
      ]
    },
    {
      "code": "10796",
      "name": "건강보조용 액화식품 제조업",
      "children": [
        {
          "code": "10896",
          "name": "건강보조용 액화식품 제조업"
        }
      ]
    },
    {
      "code": "10797",
      "name": "건강기능식품 제조업",
      "children": [
        {
          "code": "10897",
          "name": "건강기능식품 제조업"
        }
      ]
    },
    {
      "code": "10798",
      "name": "도시락 및 식사용 조리식품 제조업",
      "children": [
        {
          "code": "10751",
          "name": "도시락류 제조업"
        },
        {
          "code": "10759",
          "name": "기타 식사용 가공처리 조리식품 제조업"
        }
      ]
    },
    {
      "code": "10799",
      "name": "그 외 기타 식료품 제조업",
      "children": [
        {
          "code": "10899",
          "name": "그 외 기타 식료품 제조업"
        }
      ]
    },
    {
      "code": "10799",
      "name": "그외 기타 식료품 제조업",
      "children": []
    },
    {
      "code": "108",
      "name": "동물용 사료 및 조제식품 제조업",
      "children": [
        {
          "code": "109",
          "name": "동물용 사료 및 조제식품 제조업"
        }
      ]
    },
    {
      "code": "1080",
      "name": "동물용 사료 및 조제식품 제조업",
      "children": [
        {
          "code": "1090",
          "name": "동물용 사료 및 조제식품 제조업"
        }
      ]
    },
    {
      "code": "10800",
      "name": "동물용 사료 및 조제식품 제조업",
      "children": [
        {
          "code": "10801",
          "name": "배합 사료 제조업"
        },
        {
          "code": "10802",
          "name": "단미사료 및 기타 사료 제조업"
        }
      ]
    },
    {
      "code": "10801",
      "name": "배합 사료 제조업",
      "children": [
        {
          "code": "10901",
          "name": "반려동물용 사료 제조업"
        },
        {
          "code": "10902",
          "name": "배합 사료 제조업"
        }
      ]
    },
    {
      "code": "10802",
      "name": "단미 사료 및 기타 사료 제조업",
      "children": [
        {
          "code": "10901",
          "name": "반려동물용 사료 제조업"
        },
        {
          "code": "10903",
          "name": "단미 사료 및 기타 사료 제조업"
        }
      ]
    },
    {
      "code": "11",
      "name": "음료 제조업",
      "children": []
    },
    {
      "code": "11",
      "name": "작물 재배업",
      "children": []
    },
    {
      "code": "111",
      "name": "곡물 및 기타 식량작물 재배업",
      "children": []
    },
    {
      "code": "111",
      "name": "알코올음료 제조업",
      "children": []
    },
    {
      "code": "111",
      "name": "알콜음료 제조업",
      "children": []
    },
    {
      "code": "1110",
      "name": "곡물 및 기타 식량작물 재배업",
      "children": []
    },
    {
      "code": "1111",
      "name": "발효주 제조업",
      "children": []
    },
    {
      "code": "11111",
      "name": "탁주 및 약주 제조업",
      "children": []
    },
    {
      "code": "11112",
      "name": "맥아 및 맥주 제조업",
      "children": []
    },
    {
      "code": "11112",
      "name": "청주 제조업",
      "children": [
        {
          "code": "11119",
          "name": "기타 발효주 제조업"
        }
      ]
    },
    {
      "code": "11113",
      "name": "맥아 및 맥주 제조업",
      "children": [
        {
          "code": "11112",
          "name": "맥아 및 맥주 제조업"
        }
      ]
    },
    {
      "code": "11119",
      "name": "기타 발효주 제조업",
      "children": []
    },
    {
      "code": "1112",
      "name": "증류주 및 합성주 제조업",
      "children": []
    },
    {
      "code": "11121",
      "name": "주정 제조업",
      "children": []
    },
    {
      "code": "11122",
      "name": "소주 제조업",
      "children": []
    },
    {
      "code": "11129",
      "name": "기타 증류주 및 합성주 제조업",
      "children": []
    },
    {
      "code": "112",
      "name": "비알코올음료 및 얼음 제조업",
      "children": []
    },
    {
      "code": "112",
      "name": "비알콜음료 및 얼음 제조업",
      "children": []
    },
    {
      "code": "112",
      "name": "채소, 화훼작물 및 종묘 재배업",
      "children": []
    },
    {
      "code": "1120",
      "name": "비알코올 음료 및 얼음 제조업",
      "children": []
    },
    {
      "code": "1120",
      "name": "비알콜음료 및 얼음 제조업",
      "children": []
    },
    {
      "code": "11201",
      "name": "얼음 제조업",
      "children": []
    },
    {
      "code": "11202",
      "name": "생수 생산업",
      "children": []
    },
    {
      "code": "11209",
      "name": "기타 비알코올 음료 제조업",
      "children": []
    },
    {
      "code": "11209",
      "name": "기타 비알콜음료 제조업",
      "children": []
    },
    {
      "code": "1121",
      "name": "채소작물 재배업",
      "children": []
    },
    {
      "code": "1122",
      "name": "화훼작물 재배업",
      "children": []
    },
    {
      "code": "1123",
      "name": "종자 및 묘목 생산업",
      "children": []
    },
    {
      "code": "113",
      "name": "과실, 음료용 및 향신용 작물 재배업",
      "children": [
        {
          "code": "112",
          "name": "채소, 화훼작물 및 종묘 재배업"
        }
      ]
    },
    {
      "code": "1131",
      "name": "과실작물 재배업",
      "children": [
        {
          "code": "1121",
          "name": "채소작물 재배업"
        }
      ]
    },
    {
      "code": "1132",
      "name": "음료용 및 향신용 작물 재배업",
      "children": [
        {
          "code": "1121",
          "name": "채소작물 재배업"
        }
      ]
    },
    {
      "code": "114",
      "name": "기타 작물 재배업",
      "children": [
        {
          "code": "111",
          "name": "곡물 및 기타 식량작물 재배업"
        }
      ]
    },
    {
      "code": "1140",
      "name": "기타 작물 재배업",
      "children": [
        {
          "code": "1110",
          "name": "곡물 및 기타 식량작물 재배업"
        }
      ]
    },
    {
      "code": "115",
      "name": "시설작물 재배업",
      "children": []
    },
    {
      "code": "1151",
      "name": "콩나물 재배업",
      "children": [
        {
          "code": "1159",
          "name": "기타 시설작물 재배업"
        }
      ]
    },
    {
      "code": "1152",
      "name": "채소, 화훼 및 과실작물 시설 재배업",
      "children": [
        {
          "code": "1151",
          "name": "채소, 화훼 및 과실작물 시설 재배업"
        }
      ]
    },
    {
      "code": "1159",
      "name": "기타 시설작물 재배업",
      "children": []
    },
    {
      "code": "12",
      "name": "담배 제조업",
      "children": []
    },
    {
      "code": "12",
      "name": "축산업",
      "children": []
    },
    {
      "code": "120",
      "name": "담배 제조업",
      "children": []
    },
    {
      "code": "1200",
      "name": "담배 제조업",
      "children": []
    },
    {
      "code": "12000",
      "name": "담배제품 제조업",
      "children": []
    },
    {
      "code": "12001",
      "name": "담배 재건조업",
      "children": [
        {
          "code": "12000",
          "name": "담배제품 제조업"
        }
      ]
    },
    {
      "code": "12002",
      "name": "담배제품 제조업",
      "children": [
        {
          "code": "12000",
          "name": "담배제품 제조업"
        }
      ]
    },
    {
      "code": "121",
      "name": "소 사육업",
      "children": []
    },
    {
      "code": "1211",
      "name": "젖소 사육업",
      "children": []
    },
    {
      "code": "1212",
      "name": "육우 사육업",
      "children": []
    },
    {
      "code": "122",
      "name": "양돈업",
      "children": []
    },
    {
      "code": "1220",
      "name": "양돈업",
      "children": []
    },
    {
      "code": "123",
      "name": "가금류 및 조류 사육업",
      "children": []
    },
    {
      "code": "1231",
      "name": "양계업",
      "children": []
    },
    {
      "code": "1239",
      "name": "기타 가금류 및 조류 사육업",
      "children": []
    },
    {
      "code": "129",
      "name": "기타 축산업",
      "children": []
    },
    {
      "code": "1291",
      "name": "말 및 양 사육업",
      "children": []
    },
    {
      "code": "1299",
      "name": "그 외 기타 축산업",
      "children": []
    },
    {
      "code": "1299",
      "name": "그외 기타 축산업",
      "children": []
    },
    {
      "code": "13",
      "name": "섬유제품 제조업; 의복제외",
      "children": []
    },
    {
      "code": "13",
      "name": "작물재배 및 축산 복합농업",
      "children": []
    },
    {
      "code": "130",
      "name": "작물재배 및 축산 복합농업",
      "children": []
    },
    {
      "code": "1300",
      "name": "작물재배 및 축산 복합농업",
      "children": []
    },
    {
      "code": "131",
      "name": "방적 및 가공사 제조업",
      "children": []
    },
    {
      "code": "1310",
      "name": "방적 및 가공사 제조업",
      "children": []
    },
    {
      "code": "13101",
      "name": "면 방적업",
      "children": []
    },
    {
      "code": "13102",
      "name": "모 방적업",
      "children": []
    },
    {
      "code": "13103",
      "name": "화학섬유 방적업",
      "children": []
    },
    {
      "code": "13104",
      "name": "연사 및 가공사 제조업",
      "children": []
    },
    {
      "code": "13109",
      "name": "기타 방적업",
      "children": []
    },
    {
      "code": "132",
      "name": "직물직조 및 직물제품 제조업",
      "children": [
        {
          "code": "134",
          "name": "섬유제품 염색, 정리 및 마무리 가공업"
        }
      ]
    },
    {
      "code": "1321",
      "name": "직물 직조업",
      "children": []
    },
    {
      "code": "13211",
      "name": "면직물 직조업",
      "children": []
    },
    {
      "code": "13212",
      "name": "모직물 직조업",
      "children": []
    },
    {
      "code": "13213",
      "name": "화학섬유직물 직조업",
      "children": []
    },
    {
      "code": "13214",
      "name": "견직물 직조업",
      "children": [
        {
          "code": "13219",
          "name": "특수직물 및 기타 직물 직조업"
        }
      ]
    },
    {
      "code": "13219",
      "name": "특수 직물 및 기타 직물 직조업",
      "children": []
    },
    {
      "code": "13219",
      "name": "특수직물 및 기타직물 직조업",
      "children": []
    },
    {
      "code": "1322",
      "name": "직물제품 제조업",
      "children": [
        {
          "code": "1340",
          "name": "섬유제품 염색, 정리 및 마무리 가공업"
        }
      ]
    },
    {
      "code": "13221",
      "name": "침구 및 관련제품 제조업",
      "children": []
    },
    {
      "code": "13222",
      "name": "자수제품 및 자수용재료 제조업",
      "children": [
        {
          "code": "13409",
          "name": "섬유제품 기타 정리 및 마무리 가공업"
        }
      ]
    },
    {
      "code": "13223",
      "name": "커튼 및 유사제품 제조업",
      "children": []
    },
    {
      "code": "13224",
      "name": "천막 및 기타 캔버스 제품 제조업",
      "children": [
        {
          "code": "13229",
          "name": "기타 직물제품 제조업"
        }
      ]
    },
    {
      "code": "13224",
      "name": "천막, 텐트 및 유사 제품 제조업",
      "children": []
    },
    {
      "code": "13225",
      "name": "직물포대 제조업",
      "children": []
    },
    {
      "code": "13229",
      "name": "기타 직물제품 제조업",
      "children": []
    },
    {
      "code": "133",
      "name": "편조원단 및 편조제품 제조업",
      "children": [
        {
          "code": "139",
          "name": "기타 섬유제품 제조업"
        }
      ]
    },
    {
      "code": "133",
      "name": "편조원단 제조업",
      "children": []
    },
    {
      "code": "1330",
      "name": "편조원단 제조업",
      "children": []
    },
    {
      "code": "13300",
      "name": "편조원단 제조업",
      "children": []
    },
    {
      "code": "1331",
      "name": "편조원단 제조업",
      "children": [
        {
          "code": "1330",
          "name": "편조 원단 제조업"
        }
      ]
    },
    {
      "code": "13310",
      "name": "편조원단 제조업",
      "children": [
        {
          "code": "13300",
          "name": "편조 원단 제조업"
        }
      ]
    },
    {
      "code": "1332",
      "name": "편조제품 제조업",
      "children": [
        {
          "code": "1399",
          "name": "그 외 기타 섬유제품 제조업"
        }
      ]
    },
    {
      "code": "13320",
      "name": "편조제품 제조업",
      "children": [
        {
          "code": "13999",
          "name": "그 외 기타 분류 안된 섬유제품 제조업"
        }
      ]
    },
    {
      "code": "134",
      "name": "섬유제품 염색, 정리 및 마무리 가공업",
      "children": []
    },
    {
      "code": "1340",
      "name": "섬유제품 염색, 정리 및 마무리 가공업",
      "children": []
    },
    {
      "code": "13401",
      "name": "솜 및 실 염색가공업",
      "children": []
    },
    {
      "code": "13402",
      "name": "직물 및 편조원단 염색 가공업",
      "children": []
    },
    {
      "code": "13402",
      "name": "직물, 편조원단 및 의복류 염색 가공업",
      "children": []
    },
    {
      "code": "13403",
      "name": "날염 가공업",
      "children": []
    },
    {
      "code": "13404",
      "name": "섬유사 및 직물 호부처리업",
      "children": [
        {
          "code": "13409",
          "name": "섬유제품 기타 정리 및 마무리 가공업"
        }
      ]
    },
    {
      "code": "13409",
      "name": "기타 섬유제품 염색, 정리 및 마무리 가공업",
      "children": [
        {
          "code": "13402",
          "name": "직물, 편조 원단 및 의복류 염색 가공업"
        }
      ]
    },
    {
      "code": "13409",
      "name": "섬유제품 기타 정리 및 마무리 가공업",
      "children": []
    },
    {
      "code": "139",
      "name": "기타 섬유제품 제조업",
      "children": [
        {
          "code": "132",
          "name": "직물 직조 및 직물제품 제조업"
        }
      ]
    },
    {
      "code": "1391",
      "name": "카펫, 마루덮개 및 유사제품 제조업",
      "children": []
    },
    {
      "code": "13910",
      "name": "카펫, 마루덮개 및 유사제품 제조업",
      "children": []
    },
    {
      "code": "1392",
      "name": "끈, 로프, 망 및 끈 가공품 제조업",
      "children": []
    },
    {
      "code": "1392",
      "name": "끈, 로프, 망 및 끈가공품 제조업",
      "children": []
    },
    {
      "code": "13921",
      "name": "끈 및 로프 제조업",
      "children": []
    },
    {
      "code": "13922",
      "name": "어망 및 기타 끈 가공품 제조업",
      "children": []
    },
    {
      "code": "13922",
      "name": "어망 및 기타 끈가공품 제조업",
      "children": []
    },
    {
      "code": "1399",
      "name": "그 외 기타 섬유제품 제조업",
      "children": []
    },
    {
      "code": "1399",
      "name": "그외 기타 섬유제품 제조업",
      "children": [
        {
          "code": "1321",
          "name": "직물 직조업"
        }
      ]
    },
    {
      "code": "13991",
      "name": "세폭직물 제조업",
      "children": []
    },
    {
      "code": "13992",
      "name": "부직포 및 펠트 제조업",
      "children": []
    },
    {
      "code": "13993",
      "name": "특수사 및 코드직물 제조업",
      "children": [
        {
          "code": "13219",
          "name": "특수직물 및 기타 직물 직조업"
        }
      ]
    },
    {
      "code": "13994",
      "name": "적층 및 표면처리 직물 제조업",
      "children": []
    },
    {
      "code": "13994",
      "name": "표면처리 및 적층 직물 제조업",
      "children": []
    },
    {
      "code": "13999",
      "name": "그 외 기타 분류 안된 섬유제품 제조업",
      "children": []
    },
    {
      "code": "13999",
      "name": "그외 기타 분류안된 섬유제품 제조업",
      "children": []
    },
    {
      "code": "14",
      "name": "의복, 의복 액세서리 및 모피제품 제조업",
      "children": []
    },
    {
      "code": "14",
      "name": "의복, 의복액세서리 및 모피제품 제조업",
      "children": [
        {
          "code": "15",
          "name": "가죽, 가방 및 신발 제조업"
        }
      ]
    },
    {
      "code": "14",
      "name": "작물재배 및 축산 관련 서비스업",
      "children": []
    },
    {
      "code": "141",
      "name": "봉제의복 제조업",
      "children": []
    },
    {
      "code": "141",
      "name": "작물재배 관련 서비스업",
      "children": []
    },
    {
      "code": "1411",
      "name": "겉옷 제조업",
      "children": []
    },
    {
      "code": "1411",
      "name": "작물재배 지원 서비스업",
      "children": []
    },
    {
      "code": "1411",
      "name": "정장 제조업",
      "children": []
    },
    {
      "code": "14111",
      "name": "남자용 겉옷 제조업",
      "children": []
    },
    {
      "code": "14111",
      "name": "남자용 정장 제조업",
      "children": []
    },
    {
      "code": "14112",
      "name": "여자용 겉옷 제조업",
      "children": []
    },
    {
      "code": "14112",
      "name": "여자용 정장 제조업",
      "children": []
    },
    {
      "code": "1412",
      "name": "내의 및 잠옷 제조업",
      "children": []
    },
    {
      "code": "1412",
      "name": "농산물 건조, 선별 및 기타 수확 후 서비스업",
      "children": []
    },
    {
      "code": "1412",
      "name": "농산물 건조, 선별 및 기타 수확후 서비스업",
      "children": []
    },
    {
      "code": "1412",
      "name": "속옷 및 잠옷 제조업",
      "children": []
    },
    {
      "code": "14120",
      "name": "내의 및 잠옷 제조업",
      "children": []
    },
    {
      "code": "14120",
      "name": "속옷 및 잠옷 제조업",
      "children": []
    },
    {
      "code": "1413",
      "name": "한복 제조업",
      "children": []
    },
    {
      "code": "14130",
      "name": "한복 제조업",
      "children": []
    },
    {
      "code": "1419",
      "name": "기타 봉제의복 제조업",
      "children": [
        {
          "code": "1411",
          "name": "겉옷 제조업"
        }
      ]
    },
    {
      "code": "14191",
      "name": "셔츠 및 블라우스 제조업",
      "children": []
    },
    {
      "code": "14191",
      "name": "셔츠 및 체육복 제조업",
      "children": [
        {
          "code": "14192",
          "name": "근무복, 작업복 및 유사 의복 제조업"
        }
      ]
    },
    {
      "code": "14192",
      "name": "근무복, 작업복 및 유사의복 제조업",
      "children": [
        {
          "code": "14111",
          "name": "남자용 겉옷 제조업"
        },
        {
          "code": "14112",
          "name": "여자용 겉옷 제조업"
        }
      ]
    },
    {
      "code": "14193",
      "name": "가죽의복 제조업",
      "children": []
    },
    {
      "code": "14194",
      "name": "유아용 의복 제조업",
      "children": []
    },
    {
      "code": "14199",
      "name": "그 외 기타 봉제의복 제조업",
      "children": []
    },
    {
      "code": "14199",
      "name": "그외 기타 봉제의복 제조업",
      "children": []
    },
    {
      "code": "142",
      "name": "모피가공 및 모피제품 제조업",
      "children": [
        {
          "code": "144",
          "name": "의복 액세서리 제조업"
        },
        {
          "code": "151",
          "name": "가죽, 가방 및 유사 제품 제조업"
        }
      ]
    },
    {
      "code": "142",
      "name": "모피제품 제조업",
      "children": []
    },
    {
      "code": "142",
      "name": "축산 관련 서비스업",
      "children": []
    },
    {
      "code": "1420",
      "name": "모피가공 및 모피제품 제조업",
      "children": [
        {
          "code": "1449",
          "name": "기타 의복 액세서리 제조업"
        },
        {
          "code": "1511",
          "name": "모피 및 가죽 제조업"
        }
      ]
    },
    {
      "code": "1420",
      "name": "모피제품 제조업",
      "children": []
    },
    {
      "code": "1420",
      "name": "축산 관련 서비스업",
      "children": []
    },
    {
      "code": "14200",
      "name": "모피제품 제조업",
      "children": []
    },
    {
      "code": "14201",
      "name": "원모피 가공업",
      "children": [
        {
          "code": "15110",
          "name": "모피 및 가죽 제조업"
        }
      ]
    },
    {
      "code": "14202",
      "name": "천연모피제품 제조업",
      "children": [
        {
          "code": "14200",
          "name": "모피제품 제조업"
        },
        {
          "code": "14499",
          "name": "그 외 기타 의복 액세서리 제조업"
        }
      ]
    },
    {
      "code": "14203",
      "name": "인조모피 및 인조모피 제품 제조업",
      "children": [
        {
          "code": "14200",
          "name": "모피제품 제조업"
        },
        {
          "code": "14499",
          "name": "그 외 기타 의복 액세서리 제조업"
        },
        {
          "code": "15110",
          "name": "모피 및 가죽 제조업"
        }
      ]
    },
    {
      "code": "143",
      "name": "편조의복 제조업",
      "children": []
    },
    {
      "code": "1430",
      "name": "편조의복 제조업",
      "children": []
    },
    {
      "code": "14300",
      "name": "편조의복 제조업",
      "children": []
    },
    {
      "code": "144",
      "name": "의복 액세서리 제조업",
      "children": []
    },
    {
      "code": "1441",
      "name": "편조의복 액세서리 제조업",
      "children": []
    },
    {
      "code": "14411",
      "name": "스타킹 및 기타 양말 제조업",
      "children": []
    },
    {
      "code": "14411",
      "name": "스타킹 및 기타양말 제조업",
      "children": []
    },
    {
      "code": "14419",
      "name": "기타 편조의복 액세서리 제조업",
      "children": []
    },
    {
      "code": "1449",
      "name": "기타 의복 액세서리 제조업",
      "children": []
    },
    {
      "code": "1449",
      "name": "기타 의복액세서리 제조업",
      "children": []
    },
    {
      "code": "14491",
      "name": "모자 제조업",
      "children": []
    },
    {
      "code": "14499",
      "name": "그 외 기타 의복액세서리 제조업",
      "children": []
    },
    {
      "code": "14499",
      "name": "그외 기타 의복액세서리 제조업",
      "children": []
    },
    {
      "code": "15",
      "name": "가죽, 가방 및 신발 제조업",
      "children": []
    },
    {
      "code": "15",
      "name": "수렵 및 관련 서비스업",
      "children": []
    },
    {
      "code": "150",
      "name": "수렵 및 관련 서비스업",
      "children": []
    },
    {
      "code": "1500",
      "name": "수렵 및 관련 서비스업",
      "children": []
    },
    {
      "code": "151",
      "name": "가죽, 가방 및 유사제품 제조업",
      "children": []
    },
    {
      "code": "1511",
      "name": "모피 및 가죽 제조업",
      "children": []
    },
    {
      "code": "1511",
      "name": "원피가공 및 가죽 제조업",
      "children": []
    },
    {
      "code": "15110",
      "name": "모피 및 가죽 제조업",
      "children": []
    },
    {
      "code": "15110",
      "name": "원피가공 및 가죽 제조업",
      "children": []
    },
    {
      "code": "1512",
      "name": "핸드백, 가방 및 기타 보호용 케이스 제조업",
      "children": []
    },
    {
      "code": "15121",
      "name": "핸드백 및 지갑 제조업",
      "children": []
    },
    {
      "code": "15129",
      "name": "가방 및 기타 보호용 케이스 제조업",
      "children": []
    },
    {
      "code": "1519",
      "name": "기타 가죽제품 제조업",
      "children": []
    },
    {
      "code": "15190",
      "name": "기타 가죽제품 제조업",
      "children": []
    },
    {
      "code": "152",
      "name": "신발 및 신발 부분품 제조업",
      "children": []
    },
    {
      "code": "152",
      "name": "신발 및 신발부분품 제조업",
      "children": []
    },
    {
      "code": "1521",
      "name": "신발 제조업",
      "children": []
    },
    {
      "code": "1521",
      "name": "신발제조업",
      "children": []
    },
    {
      "code": "15211",
      "name": "구두류 제조업",
      "children": []
    },
    {
      "code": "15219",
      "name": "기타 신발 제조업",
      "children": []
    },
    {
      "code": "1522",
      "name": "신발 부분품 제조업",
      "children": []
    },
    {
      "code": "1522",
      "name": "신발부분품 제조업",
      "children": []
    },
    {
      "code": "15220",
      "name": "신발 부분품 제조업",
      "children": []
    },
    {
      "code": "15220",
      "name": "신발부분품 제조업",
      "children": []
    },
    {
      "code": "16",
      "name": "목재 및 나무제품 제조업; 가구 제외",
      "children": []
    },
    {
      "code": "16",
      "name": "목재 및 나무제품 제조업;가구제외",
      "children": []
    },
    {
      "code": "161",
      "name": "제재 및 목재 가공업",
      "children": []
    },
    {
      "code": "1610",
      "name": "제재 및 목재 가공업",
      "children": []
    },
    {
      "code": "16101",
      "name": "일반 제재업",
      "children": []
    },
    {
      "code": "16102",
      "name": "표면 가공 목재 및 특정 목적용 제재목 제조업",
      "children": []
    },
    {
      "code": "16102",
      "name": "표면가공목재 및 특정 목적용 제재목 제조업",
      "children": []
    },
    {
      "code": "16103",
      "name": "목재 보존, 방부처리, 도장 및 유사 처리업",
      "children": []
    },
    {
      "code": "162",
      "name": "나무제품 제조업",
      "children": []
    },
    {
      "code": "1621",
      "name": "박판, 합판 및 강화 목제품 제조업",
      "children": []
    },
    {
      "code": "1621",
      "name": "박판, 합판 및 강화목제품 제조업",
      "children": []
    },
    {
      "code": "16211",
      "name": "박판, 합판 및 유사 적층판 제조업",
      "children": []
    },
    {
      "code": "16211",
      "name": "박판, 합판 및 유사적층판 제조업",
      "children": []
    },
    {
      "code": "16212",
      "name": "강화 및 재생 목재 제조업",
      "children": []
    },
    {
      "code": "1622",
      "name": "건축용 나무제품 제조업",
      "children": []
    },
    {
      "code": "16221",
      "name": "목재문 및 관련제품 제조업",
      "children": []
    },
    {
      "code": "16229",
      "name": "기타 건축용 나무제품 제조업",
      "children": []
    },
    {
      "code": "1623",
      "name": "목재 상자, 드럼 및 적재판 제조업",
      "children": []
    },
    {
      "code": "16231",
      "name": "목재 깔판류 및 기타 적재판 제조업",
      "children": []
    },
    {
      "code": "16232",
      "name": "목재 포장용 상자, 드럼 및 유사용기 제조업",
      "children": []
    },
    {
      "code": "1629",
      "name": "기타 나무제품 제조업",
      "children": []
    },
    {
      "code": "16291",
      "name": "목재 도구 및 기구 제조업",
      "children": []
    },
    {
      "code": "16291",
      "name": "목재 도구 및 주방용 나무제품 제조업",
      "children": []
    },
    {
      "code": "16292",
      "name": "장식용 목제품 제조업",
      "children": []
    },
    {
      "code": "16292",
      "name": "주방용 및 식탁용 목제품 제조업",
      "children": [
        {
          "code": "16291",
          "name": "목재 도구 및 주방용 나무제품 제조업"
        }
      ]
    },
    {
      "code": "16293",
      "name": "장식용 목제품 제조업",
      "children": [
        {
          "code": "16292",
          "name": "장식용 목제품 제조업"
        }
      ]
    },
    {
      "code": "16299",
      "name": "그 외 기타 나무제품 제조업",
      "children": []
    },
    {
      "code": "16299",
      "name": "그외 기타 나무제품 제조업",
      "children": []
    },
    {
      "code": "163",
      "name": "코르크 및 조물 제품 제조업",
      "children": []
    },
    {
      "code": "1630",
      "name": "코르크 및 조물 제품 제조업",
      "children": []
    },
    {
      "code": "16300",
      "name": "코르크 및 조물제품 제조업",
      "children": []
    },
    {
      "code": "16301",
      "name": "코르크 제품 제조업",
      "children": [
        {
          "code": "16300",
          "name": "코르크 및 조물 제품 제조업"
        }
      ]
    },
    {
      "code": "16302",
      "name": "돗자리 및 기타 조물제품 제조업",
      "children": [
        {
          "code": "16300",
          "name": "코르크 및 조물 제품 제조업"
        }
      ]
    },
    {
      "code": "17",
      "name": "펄프, 종이 및 종이제품 제조업",
      "children": []
    },
    {
      "code": "171",
      "name": "펄프, 종이 및 판지 제조업",
      "children": [
        {
          "code": "179",
          "name": "기타 종이 및 판지 제품 제조업"
        }
      ]
    },
    {
      "code": "1711",
      "name": "펄프 제조업",
      "children": [
        {
          "code": "1710",
          "name": "펄프, 종이 및 판지 제조업"
        }
      ]
    },
    {
      "code": "17110",
      "name": "펄프 제조업",
      "children": [
        {
          "code": "17101",
          "name": "펄프 제조업"
        }
      ]
    },
    {
      "code": "1712",
      "name": "종이 및 판지 제조업",
      "children": [
        {
          "code": "1710",
          "name": "펄프, 종이 및 판지 제조업"
        },
        {
          "code": "1790",
          "name": "기타 종이 및 판지 제품 제조업"
        }
      ]
    },
    {
      "code": "17121",
      "name": "신문용지 제조업",
      "children": [
        {
          "code": "17102",
          "name": "신문용지 제조업"
        }
      ]
    },
    {
      "code": "17122",
      "name": "인쇄용 및 필기용 원지 제조업",
      "children": [
        {
          "code": "17103",
          "name": "인쇄용 및 필기용 원지 제조업"
        },
        {
          "code": "17125",
          "name": "위생용 원지 제조업"
        }
      ]
    },
    {
      "code": "17123",
      "name": "크라프트지 및 상자용 판지 제조업",
      "children": [
        {
          "code": "17104",
          "name": "골판지 원지 제조업"
        },
        {
          "code": "17105",
          "name": "크라프트지 및 기타 상자용 판지 제조업"
        }
      ]
    },
    {
      "code": "17124",
      "name": "적층, 합성 및 특수표면처리 종이 제조업",
      "children": [
        {
          "code": "17904",
          "name": "적층, 합성 및 특수표면처리 종이 제조업"
        }
      ]
    },
    {
      "code": "17125",
      "name": "위생용 원지 제조업",
      "children": [
        {
          "code": "17106",
          "name": "위생용 원지 제조업"
        }
      ]
    },
    {
      "code": "17129",
      "name": "기타 종이 및 판지 제조업",
      "children": [
        {
          "code": "17109",
          "name": "기타 종이 및 판지 제조업"
        },
        {
          "code": "17122",
          "name": "인쇄용 및 필기용 원지 제조업"
        },
        {
          "code": "17125",
          "name": "위생용 원지 제조업"
        }
      ]
    },
    {
      "code": "172",
      "name": "골판지, 종이 상자 및 종이 용기 제조업",
      "children": []
    },
    {
      "code": "1721",
      "name": "골판지 및 골판지 가공제품 제조업",
      "children": []
    },
    {
      "code": "1721",
      "name": "골판지 및 골판지상자 제조업",
      "children": []
    },
    {
      "code": "17210",
      "name": "골판지 및 골판지상자 제조업",
      "children": [
        {
          "code": "17211",
          "name": "골판지 제조업"
        },
        {
          "code": "17212",
          "name": "골판지 상자 및 가공제품 제조업"
        }
      ]
    },
    {
      "code": "17211",
      "name": "골판지 제조업",
      "children": []
    },
    {
      "code": "17212",
      "name": "골판지 상자 및 가공제품 제조업",
      "children": []
    },
    {
      "code": "1722",
      "name": "종이포대, 판지상자 및 종이용기 제조업",
      "children": []
    },
    {
      "code": "17221",
      "name": "종이 포대 및 가방 제조업",
      "children": []
    },
    {
      "code": "17222",
      "name": "판지 상자 및 용기 제조업",
      "children": []
    },
    {
      "code": "17223",
      "name": "식품 위생용 종이 상자 및 용기 제조업",
      "children": []
    },
    {
      "code": "17229",
      "name": "기타 종이 상자 및 용기 제조업",
      "children": []
    },
    {
      "code": "179",
      "name": "기타 종이 및 판지 제품 제조업",
      "children": []
    },
    {
      "code": "1790",
      "name": "기타 종이 및 판지 제품 제조업",
      "children": []
    },
    {
      "code": "17901",
      "name": "문구용 종이제품 제조업",
      "children": []
    },
    {
      "code": "17902",
      "name": "위생용 종이제품 제조업",
      "children": []
    },
    {
      "code": "17903",
      "name": "벽지 및 장판지 제조업",
      "children": []
    },
    {
      "code": "17909",
      "name": "그 외 기타 종이 및 판지 제품 제조업",
      "children": []
    },
    {
      "code": "17909",
      "name": "그외 기타 종이 및 판지 제품 제조업",
      "children": []
    },
    {
      "code": "18",
      "name": "인쇄 및 기록매체 복제업",
      "children": []
    },
    {
      "code": "181",
      "name": "인쇄 및 인쇄관련 산업",
      "children": []
    },
    {
      "code": "1811",
      "name": "인쇄업",
      "children": []
    },
    {
      "code": "18111",
      "name": "경 인쇄업",
      "children": [
        {
          "code": "18113",
          "name": "오프셋 인쇄업"
        }
      ]
    },
    {
      "code": "18112",
      "name": "스크린 인쇄업",
      "children": []
    },
    {
      "code": "18113",
      "name": "오프셋 인쇄업",
      "children": []
    },
    {
      "code": "18119",
      "name": "기타 인쇄업",
      "children": [
        {
          "code": "18113",
          "name": "오프셋 인쇄업"
        }
      ]
    },
    {
      "code": "1812",
      "name": "인쇄관련 산업",
      "children": []
    },
    {
      "code": "18121",
      "name": "제판 및 조판업",
      "children": []
    },
    {
      "code": "18122",
      "name": "제책업",
      "children": []
    },
    {
      "code": "18129",
      "name": "기타 인쇄관련 산업",
      "children": []
    },
    {
      "code": "182",
      "name": "기록매체 복제업",
      "children": []
    },
    {
      "code": "1820",
      "name": "기록매체 복제업",
      "children": []
    },
    {
      "code": "18200",
      "name": "기록매체 복제업",
      "children": []
    },
    {
      "code": "19",
      "name": "코크스, 연탄 및 석유정제품 제조업",
      "children": [
        {
          "code": "20",
          "name": "화학 물질 및 화학제품 제조업; 의약품 제외"
        }
      ]
    },
    {
      "code": "191",
      "name": "코크스 및 연탄 제조업",
      "children": [
        {
          "code": "201",
          "name": "기초 화학물질 제조업"
        }
      ]
    },
    {
      "code": "1910",
      "name": "코크스 및 연탄 제조업",
      "children": [
        {
          "code": "2011",
          "name": "기초 유기화학 물질 제조업"
        }
      ]
    },
    {
      "code": "19101",
      "name": "코크스 및 관련제품 제조업",
      "children": [
        {
          "code": "19100",
          "name": "코크스 및 연탄 제조업"
        },
        {
          "code": "20119",
          "name": "석탄화학계 화합물 및 기타 기초 유기화학 물질 제조업"
        }
      ]
    },
    {
      "code": "19102",
      "name": "연탄 및 기타 석탄 가공품 제조업",
      "children": [
        {
          "code": "19100",
          "name": "코크스 및 연탄 제조업"
        }
      ]
    },
    {
      "code": "192",
      "name": "석유 정제품 제조업",
      "children": []
    },
    {
      "code": "1921",
      "name": "원유 정제처리업",
      "children": []
    },
    {
      "code": "19210",
      "name": "원유 정제처리업",
      "children": []
    },
    {
      "code": "1922",
      "name": "석유 정제물 재처리업",
      "children": []
    },
    {
      "code": "1922",
      "name": "석유정제물 재처리업",
      "children": []
    },
    {
      "code": "19221",
      "name": "윤활유 및 그리스 제조업",
      "children": []
    },
    {
      "code": "19229",
      "name": "기타 석유정제물 재처리업",
      "children": []
    },
    {
      "code": "2",
      "name": "임업",
      "children": []
    },
    {
      "code": "20",
      "name": "임업",
      "children": []
    },
    {
      "code": "20",
      "name": "화학물질 및 화학제품 제조업; 의약품 제외",
      "children": [
        {
          "code": "21",
          "name": "의료용 물질 및 의약품 제조업"
        }
      ]
    },
    {
      "code": "20",
      "name": "화학물질 및 화학제품 제조업;의약품 제외",
      "children": []
    },
    {
      "code": "201",
      "name": "기초 화학물질 제조업",
      "children": []
    },
    {
      "code": "201",
      "name": "기초화학물질 제조업",
      "children": [
        {
          "code": "204",
          "name": "기타 화학제품 제조업"
        }
      ]
    },
    {
      "code": "201",
      "name": "영림업",
      "children": []
    },
    {
      "code": "2011",
      "name": "기초 유기 화학물질 제조업",
      "children": []
    },
    {
      "code": "2011",
      "name": "기초유기화학물질 제조업",
      "children": [
        {
          "code": "2049",
          "name": "그 외 기타 화학제품 제조업"
        }
      ]
    },
    {
      "code": "2011",
      "name": "임업용 종묘 생산업",
      "children": []
    },
    {
      "code": "20111",
      "name": "석유화학계 기초 화학물질 제조업",
      "children": []
    },
    {
      "code": "20111",
      "name": "석유화학계 기초화학물질 제조업",
      "children": []
    },
    {
      "code": "20112",
      "name": "천연수지 및 나무 화학물질 제조업",
      "children": []
    },
    {
      "code": "20112",
      "name": "천연수지 및 나무화학물질 제조업",
      "children": [
        {
          "code": "20499",
          "name": "그 외 기타 분류 안된 화학제품 제조업"
        }
      ]
    },
    {
      "code": "20119",
      "name": "기타 기초유기화학물질 제조업",
      "children": []
    },
    {
      "code": "20119",
      "name": "석탄화학계 화합물 및 기타 기초 유기 화학물질 제조업",
      "children": []
    },
    {
      "code": "2012",
      "name": "기초 무기 화학물질 제조업",
      "children": []
    },
    {
      "code": "2012",
      "name": "기초 무기화학물질 제조업",
      "children": []
    },
    {
      "code": "2012",
      "name": "육림업",
      "children": []
    },
    {
      "code": "20121",
      "name": "산업용 가스 제조업",
      "children": [
        {
          "code": "20122",
          "name": "산소, 질소 및 기타 산업용 가스 제조업"
        }
      ]
    },
    {
      "code": "20129",
      "name": "기타 기초 무기 화학물질 제조업",
      "children": []
    },
    {
      "code": "20129",
      "name": "기타 기초무기화학물질 제조업",
      "children": []
    },
    {
      "code": "2013",
      "name": "무기안료, 염료, 유연제 및 기타 착색제 제조업",
      "children": []
    },
    {
      "code": "2013",
      "name": "무기안료, 염료, 유연제 및 기타착색제 제조업",
      "children": []
    },
    {
      "code": "20131",
      "name": "무기안료 및 기타금속산화물 제조업",
      "children": []
    },
    {
      "code": "20131",
      "name": "무기안료용 금속 산화물 및 관련 제품 제조업",
      "children": []
    },
    {
      "code": "20132",
      "name": "염료, 조제 무기안료, 유연제 및 기타 착색제 제조업",
      "children": []
    },
    {
      "code": "20132",
      "name": "합성염료, 유연제 및 기타착색제 제조업",
      "children": []
    },
    {
      "code": "202",
      "name": "벌목업",
      "children": []
    },
    {
      "code": "202",
      "name": "비료 및 질소화합물 제조업",
      "children": [
        {
          "code": "203",
          "name": "비료, 농약 및 살균ㆍ살충제 제조업"
        }
      ]
    },
    {
      "code": "202",
      "name": "합성고무 및 플라스틱 물질 제조업",
      "children": []
    },
    {
      "code": "2020",
      "name": "벌목업",
      "children": []
    },
    {
      "code": "2020",
      "name": "비료 및 질소화합물 제조업",
      "children": [
        {
          "code": "2031",
          "name": "비료 및 질소 화합물 제조업"
        }
      ]
    },
    {
      "code": "2020",
      "name": "합성고무 및 플라스틱 물질 제조업",
      "children": []
    },
    {
      "code": "20201",
      "name": "질소, 인산 및 칼리질 비료 제조업",
      "children": [
        {
          "code": "20311",
          "name": "질소 화합물, 질소ㆍ인산 및 칼리질 화학비료 제조업"
        }
      ]
    },
    {
      "code": "20201",
      "name": "합성고무 제조업",
      "children": []
    },
    {
      "code": "20202",
      "name": "복합비료 제조업",
      "children": [
        {
          "code": "20312",
          "name": "복합비료 및 기타 화학비료 제조업"
        }
      ]
    },
    {
      "code": "20202",
      "name": "합성수지 및 기타 플라스틱 물질 제조업",
      "children": []
    },
    {
      "code": "20203",
      "name": "혼성 및 재생 플라스틱 소재 물질 제조업",
      "children": []
    },
    {
      "code": "20209",
      "name": "기타 비료 및 질소화합물 제조업",
      "children": [
        {
          "code": "20312",
          "name": "복합비료 및 기타 화학비료 제조업"
        },
        {
          "code": "20313",
          "name": "유기질 비료 및 상토 제조업"
        }
      ]
    },
    {
      "code": "203",
      "name": "비료, 농약 및 살균, 살충제 제조업",
      "children": []
    },
    {
      "code": "203",
      "name": "임산물 채취업",
      "children": []
    },
    {
      "code": "203",
      "name": "합성고무 및 플라스틱 물질 제조업",
      "children": [
        {
          "code": "202",
          "name": "합성고무 및 플라스틱 물질 제조업"
        }
      ]
    },
    {
      "code": "2030",
      "name": "임산물 채취업",
      "children": []
    },
    {
      "code": "2030",
      "name": "합성고무 및 플라스틱 물질 제조업",
      "children": [
        {
          "code": "2020",
          "name": "합성고무 및 플라스틱 물질 제조업"
        }
      ]
    },
    {
      "code": "20301",
      "name": "합성고무 제조업",
      "children": [
        {
          "code": "20201",
          "name": "합성고무 제조업"
        }
      ]
    },
    {
      "code": "20302",
      "name": "합성수지 및 기타 플라스틱물질 제조업",
      "children": [
        {
          "code": "20202",
          "name": "합성수지 및 기타 플라스틱 물질 제조업"
        }
      ]
    },
    {
      "code": "20303",
      "name": "가공 및 재생 플라스틱원료 생산업",
      "children": [
        {
          "code": "20203",
          "name": "혼성 및 재생 플라스틱 소재 물질 제조업"
        }
      ]
    },
    {
      "code": "2031",
      "name": "비료 및 질소화합물 제조업",
      "children": []
    },
    {
      "code": "20311",
      "name": "질소화합물, 질소, 인산 및 칼리질 화학비료 제조업",
      "children": []
    },
    {
      "code": "20312",
      "name": "복합비료 및 기타 화학비료 제조업",
      "children": []
    },
    {
      "code": "20313",
      "name": "유기질 비료 및 상토 제조업",
      "children": []
    },
    {
      "code": "2032",
      "name": "살균·살충제 및 농약 제조업",
      "children": []
    },
    {
      "code": "20321",
      "name": "화학 살균·살충제 및 농업용 약제 제조업",
      "children": []
    },
    {
      "code": "20322",
      "name": "생물 살균·살충제 및 식물보호제 제조업",
      "children": []
    },
    {
      "code": "204",
      "name": "기타 화학제품 제조업",
      "children": [
        {
          "code": "213",
          "name": "의료용품 및 기타 의약 관련제품 제조업"
        },
        {
          "code": "203",
          "name": "비료, 농약 및 살균ㆍ살충제 제조업"
        }
      ]
    },
    {
      "code": "204",
      "name": "임업 관련 서비스업",
      "children": []
    },
    {
      "code": "2040",
      "name": "임업 관련 서비스업",
      "children": []
    },
    {
      "code": "2041",
      "name": "살충제 및 기타농약 제조업",
      "children": [
        {
          "code": "2032",
          "name": "살균ㆍ살충제 및 농약 제조업"
        }
      ]
    },
    {
      "code": "2041",
      "name": "잉크, 페인트, 코팅제 및 유사제품 제조업",
      "children": []
    },
    {
      "code": "20411",
      "name": "가정용 살균 및 살충제 제조업",
      "children": [
        {
          "code": "20321",
          "name": "화학 살균ㆍ살충제 및 농업용 약제 제조업"
        },
        {
          "code": "20322",
          "name": "생물 살균ㆍ살충제 및 식물보호제 제조업"
        }
      ]
    },
    {
      "code": "20411",
      "name": "일반용 도료 및 관련제품 제조업",
      "children": []
    },
    {
      "code": "20412",
      "name": "농약 제조업",
      "children": [
        {
          "code": "20321",
          "name": "화학 살균ㆍ살충제 및 농업용 약제 제조업"
        },
        {
          "code": "20322",
          "name": "생물 살균ㆍ살충제 및 식물보호제 제조업"
        }
      ]
    },
    {
      "code": "20412",
      "name": "요업용 도포제 및 관련제품 제조업",
      "children": []
    },
    {
      "code": "20413",
      "name": "인쇄잉크 및 회화용 물감 제조업",
      "children": []
    },
    {
      "code": "2042",
      "name": "세제, 화장품 및 광택제 제조업",
      "children": []
    },
    {
      "code": "2042",
      "name": "잉크, 페인트, 코팅제 및 유사제품 제조업",
      "children": [
        {
          "code": "2041",
          "name": "잉크, 페인트, 코팅제 및 유사제품 제조업"
        }
      ]
    },
    {
      "code": "20421",
      "name": "계면활성제 제조업",
      "children": []
    },
    {
      "code": "20421",
      "name": "일반용 도료 및 관련제품 제조업",
      "children": [
        {
          "code": "20411",
          "name": "일반용 도료 및 관련제품 제조업"
        }
      ]
    },
    {
      "code": "20422",
      "name": "요업용 유약 및 관련제품 제조업",
      "children": [
        {
          "code": "20412",
          "name": "요업용 도포제 및 관련제품 제조업"
        }
      ]
    },
    {
      "code": "20422",
      "name": "치약, 비누 및 기타 세제 제조업",
      "children": []
    },
    {
      "code": "20423",
      "name": "인쇄잉크 제조업",
      "children": [
        {
          "code": "20413",
          "name": "인쇄 잉크 및 회화용 물감 제조업"
        }
      ]
    },
    {
      "code": "20423",
      "name": "화장품 제조업",
      "children": []
    },
    {
      "code": "20424",
      "name": "표면광택제 및 실내가향제 제조업",
      "children": []
    },
    {
      "code": "20424",
      "name": "회화용 물감 제조업",
      "children": [
        {
          "code": "20413",
          "name": "인쇄 잉크 및 회화용 물감 제조업"
        }
      ]
    },
    {
      "code": "2043",
      "name": "세제, 화장품 및 광택제 제조업",
      "children": [
        {
          "code": "2042",
          "name": "세제, 화장품 및 광택제 제조업"
        }
      ]
    },
    {
      "code": "20431",
      "name": "계면활성제 제조업",
      "children": [
        {
          "code": "20421",
          "name": "계면활성제 제조업"
        }
      ]
    },
    {
      "code": "20432",
      "name": "치약, 비누 및 기타 세제 제조업",
      "children": [
        {
          "code": "20422",
          "name": "치약, 비누 및 기타 세제 제조업"
        }
      ]
    },
    {
      "code": "20433",
      "name": "화장품 제조업",
      "children": [
        {
          "code": "20423",
          "name": "화장품 제조업"
        }
      ]
    },
    {
      "code": "20434",
      "name": "표면광택제 및 실내가향제 제조업",
      "children": [
        {
          "code": "20424",
          "name": "표면 광택제 및 실내 가향제 제조업"
        }
      ]
    },
    {
      "code": "2049",
      "name": "그 외 기타 화학제품 제조업",
      "children": [
        {
          "code": "2130",
          "name": "의료용품 및 기타 의약 관련제품 제조업"
        }
      ]
    },
    {
      "code": "2049",
      "name": "그외 기타 화학제품 제조업",
      "children": []
    },
    {
      "code": "20491",
      "name": "감광재료 및 관련 화학제품 제조업",
      "children": []
    },
    {
      "code": "20491",
      "name": "사진용 화학제품 및 감광재료 제조업",
      "children": []
    },
    {
      "code": "20492",
      "name": "가공 및 정제염 제조업",
      "children": []
    },
    {
      "code": "20493",
      "name": "접착제 및 젤라틴 제조업",
      "children": []
    },
    {
      "code": "20494",
      "name": "화약 및 불꽃제품 제조업",
      "children": []
    },
    {
      "code": "20495",
      "name": "바이오 연료 및 혼합물 제조업",
      "children": []
    },
    {
      "code": "20499",
      "name": "그 외 기타 분류 안된 화학제품 제조업",
      "children": [
        {
          "code": "21301",
          "name": "제외 진단 시약 제조업"
        }
      ]
    },
    {
      "code": "20499",
      "name": "그외 기타 분류안된 화학제품 제조업",
      "children": [
        {
          "code": "20495",
          "name": "바이오 연료 및 혼합물 제조업"
        }
      ]
    },
    {
      "code": "205",
      "name": "화학섬유 제조업",
      "children": []
    },
    {
      "code": "2050",
      "name": "화학섬유 제조업",
      "children": []
    },
    {
      "code": "20501",
      "name": "합성섬유 제조업",
      "children": []
    },
    {
      "code": "20502",
      "name": "재생섬유 제조업",
      "children": []
    },
    {
      "code": "21",
      "name": "의료용 물질 및 의약품 제조업",
      "children": []
    },
    {
      "code": "211",
      "name": "기초 의약물질 및 생물학적 제제 제조업",
      "children": [
        {
          "code": "213",
          "name": "의료용품 및 기타 의약 관련제품 제조업"
        }
      ]
    },
    {
      "code": "2110",
      "name": "기초 의약물질 및 생물학적 제제 제조업",
      "children": [
        {
          "code": "2130",
          "name": "의료용품 및 기타 의약 관련제품 제조업"
        }
      ]
    },
    {
      "code": "21101",
      "name": "의약용 화합물 및 항생물질 제조업",
      "children": [
        {
          "code": "21100",
          "name": "기초 의약 물질 제조업"
        }
      ]
    },
    {
      "code": "21102",
      "name": "생물학적 제제 제조업",
      "children": [
        {
          "code": "21100",
          "name": "기초 의약 물질 제조업"
        },
        {
          "code": "21301",
          "name": "제외 진단 시약 제조업"
        }
      ]
    },
    {
      "code": "212",
      "name": "의약품 제조업",
      "children": []
    },
    {
      "code": "2121",
      "name": "완제 의약품 제조업",
      "children": []
    },
    {
      "code": "21210",
      "name": "완제 의약품 제조업",
      "children": [
        {
          "code": "21211",
          "name": "생물 의약품 제조업"
        },
        {
          "code": "21212",
          "name": "합성의약품 및 기타 완제 의약품 제조업"
        }
      ]
    },
    {
      "code": "2122",
      "name": "한의약품 제조업",
      "children": []
    },
    {
      "code": "21220",
      "name": "한의약품 제조업",
      "children": []
    },
    {
      "code": "2123",
      "name": "동물용 의약품 제조업",
      "children": []
    },
    {
      "code": "21230",
      "name": "동물용 의약품 제조업",
      "children": []
    },
    {
      "code": "213",
      "name": "의료용품 및 기타 의약 관련제품 제조업",
      "children": []
    },
    {
      "code": "213",
      "name": "의료용품 및 기타 의약관련제품 제조업",
      "children": []
    },
    {
      "code": "2130",
      "name": "의료용품 및 기타 의약 관련제품 제조업",
      "children": []
    },
    {
      "code": "2130",
      "name": "의료용품 및 기타 의약관련제품 제조업",
      "children": []
    },
    {
      "code": "21300",
      "name": "의료용품 및 기타 의약 관련제품 제조업",
      "children": [
        {
          "code": "21301",
          "name": "제외 진단 시약 제조업"
        },
        {
          "code": "21309",
          "name": "그 외 기타 의료용품 및 의약 관련제품 제조업"
        }
      ]
    },
    {
      "code": "21300",
      "name": "의료용품 및 기타 의약관련제품 제조업",
      "children": []
    },
    {
      "code": "22",
      "name": "고무 및 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "22",
      "name": "고무제품 및 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "221",
      "name": "고무제품 제조업",
      "children": []
    },
    {
      "code": "2211",
      "name": "고무 타이어 및 튜브 생산업",
      "children": []
    },
    {
      "code": "22111",
      "name": "타이어 및 튜브 제조업",
      "children": [
        {
          "code": "22110",
          "name": "고무 타이어 및 튜브 제조업"
        }
      ]
    },
    {
      "code": "22112",
      "name": "타이어 재생업",
      "children": [
        {
          "code": "22110",
          "name": "고무 타이어 및 튜브 제조업"
        }
      ]
    },
    {
      "code": "2219",
      "name": "기타 고무제품 제조업",
      "children": []
    },
    {
      "code": "22191",
      "name": "고무패킹류 제조업",
      "children": []
    },
    {
      "code": "22191",
      "name": "산업용 비경화고무제품 제조업",
      "children": [
        {
          "code": "22192",
          "name": "산업용 그 외 비경화 고무제품 제조업"
        }
      ]
    },
    {
      "code": "22192",
      "name": "고무의류 및 기타 위생용 고무제품 제조업",
      "children": [
        {
          "code": "22193",
          "name": "고무 의류 및 기타 위생용 비경화 고무제품 제조업"
        }
      ]
    },
    {
      "code": "22192",
      "name": "산업용 그 외 비경화 고무제품 제조업",
      "children": []
    },
    {
      "code": "22193",
      "name": "고무 의류 및 기타 위생용 비경화 고무제품 제조업",
      "children": []
    },
    {
      "code": "22199",
      "name": "그 외 기타 고무제품 제조업",
      "children": []
    },
    {
      "code": "22199",
      "name": "그외 기타 고무제품 제조업",
      "children": []
    },
    {
      "code": "222",
      "name": "플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "2221",
      "name": "1차 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "22211",
      "name": "플라스틱 선, 봉, 관 및 호스 제조업",
      "children": []
    },
    {
      "code": "22212",
      "name": "플라스틱 필름 제조업",
      "children": []
    },
    {
      "code": "22212",
      "name": "플라스틱 필름, 시트 및 판 제조업",
      "children": [
        {
          "code": "22213",
          "name": "플라스틱 시트 및 판 제조업"
        }
      ]
    },
    {
      "code": "22213",
      "name": "플라스틱 시트 및 판 제조업",
      "children": []
    },
    {
      "code": "22213",
      "name": "플라스틱 합성피혁 제조업",
      "children": [
        {
          "code": "22214",
          "name": "플라스틱 합성피혁 제조업"
        }
      ]
    },
    {
      "code": "22214",
      "name": "플라스틱 합성피혁 제조업",
      "children": []
    },
    {
      "code": "2222",
      "name": "건축용 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "22221",
      "name": "벽 및 바닥 피복용 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "22222",
      "name": "설치용 및 위생용 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "22222",
      "name": "저장용 및 위생용 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "22223",
      "name": "플라스틱 창호 제조업",
      "children": []
    },
    {
      "code": "22229",
      "name": "기타 건축용 플라스틱 조립제품 제조업",
      "children": []
    },
    {
      "code": "2223",
      "name": "포장용 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "22231",
      "name": "플라스틱 포대, 봉투 및 유사제품 제조업",
      "children": []
    },
    {
      "code": "22232",
      "name": "포장용 플라스틱 성형용기 제조업",
      "children": []
    },
    {
      "code": "2224",
      "name": "기계장비 조립용 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "22240",
      "name": "기계장비 조립용 플라스틱제품 제조업",
      "children": [
        {
          "code": "22241",
          "name": "운송장비 조립용 플라스틱제품 제조업"
        },
        {
          "code": "22249",
          "name": "기타 기계ㆍ장비 조립용 플라스틱제품 제조업"
        }
      ]
    },
    {
      "code": "22241",
      "name": "운송장비 조립용 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "22249",
      "name": "기타 기계·장비 조립용 플라스틱 제품 제조업",
      "children": []
    },
    {
      "code": "2225",
      "name": "플라스틱 발포 성형제품 제조업",
      "children": []
    },
    {
      "code": "22250",
      "name": "플라스틱 발포 성형제품 제조업",
      "children": [
        {
          "code": "22251",
          "name": "폴리스티렌 발포 성형제품 제조업"
        },
        {
          "code": "22259",
          "name": "기타 플라스틱 발포 성형제품 제조업"
        }
      ]
    },
    {
      "code": "22251",
      "name": "폴리스티렌 발포 성형제품 제조업",
      "children": []
    },
    {
      "code": "22259",
      "name": "기타 플라스틱 발포 성형제품 제조업",
      "children": []
    },
    {
      "code": "2229",
      "name": "기타 플라스틱제품 제조업",
      "children": []
    },
    {
      "code": "22291",
      "name": "플라스틱  적층, 도포 및 기타 표면처리 제품 제조업",
      "children": [
        {
          "code": "22292",
          "name": "플라스틱 적층, 도포 및 기타 표면처리 제품 제조업"
        }
      ]
    },
    {
      "code": "22291",
      "name": "플라스틱 접착처리 제품 제조업",
      "children": []
    },
    {
      "code": "22292",
      "name": "플라스틱 적층, 도포 및 기타 표면처리 제품 제조업",
      "children": []
    },
    {
      "code": "22299",
      "name": "그 외 기타 플라스틱 제품 제조업",
      "children": []
    },
    {
      "code": "22299",
      "name": "그외 기타 플라스틱 제품 제조업",
      "children": []
    },
    {
      "code": "23",
      "name": "비금속 광물제품 제조업",
      "children": [
        {
          "code": "19",
          "name": "코크스, 연탄 및 석유정제품 제조업"
        }
      ]
    },
    {
      "code": "231",
      "name": "유리 및 유리제품 제조업",
      "children": []
    },
    {
      "code": "2311",
      "name": "판유리 및 판유리 가공품 제조업",
      "children": []
    },
    {
      "code": "2311",
      "name": "판유리 제조업",
      "children": []
    },
    {
      "code": "23110",
      "name": "판유리 제조업",
      "children": [
        {
          "code": "23111",
          "name": "판유리 제조업"
        }
      ]
    },
    {
      "code": "23111",
      "name": "판유리 제조업",
      "children": []
    },
    {
      "code": "23112",
      "name": "안전유리 제조업",
      "children": []
    },
    {
      "code": "23119",
      "name": "기타 판유리 가공품 제조업",
      "children": []
    },
    {
      "code": "2312",
      "name": "산업용 유리 및 판유리 가공품 제조업",
      "children": [
        {
          "code": "2311",
          "name": "판유리 및 판유리 가공품 제조업"
        }
      ]
    },
    {
      "code": "2312",
      "name": "산업용 유리 제조업",
      "children": []
    },
    {
      "code": "23121",
      "name": "1차 유리제품, 유리섬유 및 광학용 유리 제조업",
      "children": []
    },
    {
      "code": "23121",
      "name": "유리섬유 및 광학용 유리 제조업",
      "children": []
    },
    {
      "code": "23122",
      "name": "디스플레이 장치용 유리 제조업",
      "children": []
    },
    {
      "code": "23122",
      "name": "판유리 가공품 제조업",
      "children": [
        {
          "code": "23112",
          "name": "안전유리 제조업"
        },
        {
          "code": "23119",
          "name": "기타 판유리 가공품 제조업"
        }
      ]
    },
    {
      "code": "23129",
      "name": "기타 산업용 유리제품 제조업",
      "children": [
        {
          "code": "23122",
          "name": "디스플레이 장치용 유리 제조업"
        }
      ]
    },
    {
      "code": "2319",
      "name": "기타 유리제품 제조업",
      "children": [
        {
          "code": "2312",
          "name": "산업용 유리 제조업"
        }
      ]
    },
    {
      "code": "23191",
      "name": "가정용 유리제품 제조업",
      "children": []
    },
    {
      "code": "23192",
      "name": "포장용 유리용기 제조업",
      "children": []
    },
    {
      "code": "23199",
      "name": "그 외 기타 유리제품 제조업",
      "children": []
    },
    {
      "code": "23199",
      "name": "그외 기타 유리제품 제조업",
      "children": [
        {
          "code": "23121",
          "name": "1차 유리제품, 유리섬유 및 광학용 유리 제조업"
        }
      ]
    },
    {
      "code": "232",
      "name": "내화, 비내화 요업제품 제조업",
      "children": []
    },
    {
      "code": "232",
      "name": "도자기 및 기타 요업제품 제조업",
      "children": []
    },
    {
      "code": "2321",
      "name": "내화 요업제품 제조업",
      "children": []
    },
    {
      "code": "2321",
      "name": "일반도자기 제조업",
      "children": [
        {
          "code": "2322",
          "name": "비내화 일반 도자기 제조업"
        }
      ]
    },
    {
      "code": "23211",
      "name": "가정용 및 장식용 도자기 제조업",
      "children": [
        {
          "code": "23221",
          "name": "가정용 및 장식용 도자기 제조업"
        }
      ]
    },
    {
      "code": "23211",
      "name": "정형 내화 요업제품 제조업",
      "children": []
    },
    {
      "code": "23212",
      "name": "부정형 내화 요업제품 제조업",
      "children": []
    },
    {
      "code": "23212",
      "name": "위생용 도자기 제조업",
      "children": [
        {
          "code": "23222",
          "name": "위생용 및 산업용 도자기 제조업"
        }
      ]
    },
    {
      "code": "23213",
      "name": "산업용 도자기 제조업",
      "children": [
        {
          "code": "23222",
          "name": "위생용 및 산업용 도자기 제조업"
        }
      ]
    },
    {
      "code": "23219",
      "name": "기타 일반 도자기 제조업",
      "children": [
        {
          "code": "23229",
          "name": "기타 일반 도자기 제조업"
        }
      ]
    },
    {
      "code": "2322",
      "name": "내화 요업제품 제조업",
      "children": [
        {
          "code": "2321",
          "name": "내화 요업제품 제조업"
        }
      ]
    },
    {
      "code": "2322",
      "name": "비내화 일반도자기 제조업",
      "children": []
    },
    {
      "code": "23221",
      "name": "가정용 및 장식용 도자기 제조업",
      "children": []
    },
    {
      "code": "23221",
      "name": "구조용 정형내화제품 제조업",
      "children": [
        {
          "code": "23211",
          "name": "정형 내화 요업제품 제조업"
        },
        {
          "code": "23212",
          "name": "부정형 내화 요업제품 제조업"
        }
      ]
    },
    {
      "code": "23222",
      "name": "위생용 및 산업용 도자기 제조업",
      "children": []
    },
    {
      "code": "23229",
      "name": "기타 내화요업제품 제조업",
      "children": [
        {
          "code": "23211",
          "name": "정형 내화 요업제품 제조업"
        },
        {
          "code": "23212",
          "name": "부정형 내화 요업제품 제조업"
        }
      ]
    },
    {
      "code": "23229",
      "name": "기타 일반 도자기 제조업",
      "children": []
    },
    {
      "code": "2323",
      "name": "건축용 비내화 요업제품 제조업",
      "children": []
    },
    {
      "code": "2323",
      "name": "구조용 비내화 요업제품 제조업",
      "children": []
    },
    {
      "code": "23231",
      "name": "점토 벽돌, 블록 및 유사 비내화 요업제품 제조업",
      "children": [
        {
          "code": "23232",
          "name": "타일 및 유사 비내화 요업제품 제조업"
        }
      ]
    },
    {
      "code": "23232",
      "name": "타일 및 유사 비내화 요업제품 제조업",
      "children": []
    },
    {
      "code": "23239",
      "name": "기타 건축용 비내화 요업제품 제조업",
      "children": []
    },
    {
      "code": "23239",
      "name": "기타 구조용 비내화 요업제품 제조업",
      "children": []
    },
    {
      "code": "233",
      "name": "시멘트, 석회, 플라스터 및 그 제품 제조업",
      "children": []
    },
    {
      "code": "2331",
      "name": "시멘트, 석회 및 플라스터 제조업",
      "children": []
    },
    {
      "code": "23311",
      "name": "시멘트 제조업",
      "children": []
    },
    {
      "code": "23312",
      "name": "석회 및 플라스터 제조업",
      "children": []
    },
    {
      "code": "2332",
      "name": "콘크리트, 레미콘 및 기타 시멘트, 플라스터 제품 제조업",
      "children": []
    },
    {
      "code": "2332",
      "name": "콘크리트, 시멘트 및 플라스터 제품 제조업",
      "children": []
    },
    {
      "code": "23321",
      "name": "비내화 모르타르 제조업",
      "children": []
    },
    {
      "code": "23322",
      "name": "레미콘 제조업",
      "children": []
    },
    {
      "code": "23323",
      "name": "플라스터 제품 제조업",
      "children": []
    },
    {
      "code": "23323",
      "name": "플라스터 혼합제품 제조업",
      "children": []
    },
    {
      "code": "23324",
      "name": "섬유시멘트 제품 제조업",
      "children": [
        {
          "code": "23325",
          "name": "콘크리트 관 및 기타 구조용 콘크리트제품 제조업"
        },
        {
          "code": "23329",
          "name": "그 외 기타 콘크리트 제품 및 유사 제품 제조업"
        }
      ]
    },
    {
      "code": "23324",
      "name": "콘크리트 타일, 기와, 벽돌 및 블록 제조업",
      "children": [
        {
          "code": "23326",
          "name": "인조대리석 제품 제조업"
        }
      ]
    },
    {
      "code": "23325",
      "name": "콘크리트 관 및 기타 구조용 콘크리트 제품 제조업",
      "children": [
        {
          "code": "23326",
          "name": "인조대리석 제품 제조업"
        }
      ]
    },
    {
      "code": "23325",
      "name": "콘크리트 타일, 기와, 벽돌 및 블록 제조업",
      "children": [
        {
          "code": "23324",
          "name": "콘크리트 타일, 기와, 벽돌 및 블록 제조업"
        }
      ]
    },
    {
      "code": "23326",
      "name": "콘크리트관 및 기타 구조용 콘크리트제품 제조업",
      "children": [
        {
          "code": "23325",
          "name": "콘크리트 관 및 기타 구조용 콘크리트제품 제조업"
        }
      ]
    },
    {
      "code": "23329",
      "name": "그 외 기타 콘크리트 제품 및 유사제품 제조업",
      "children": []
    },
    {
      "code": "23329",
      "name": "그외 기타 콘크리트 제품 및 유사제품 제조업",
      "children": []
    },
    {
      "code": "239",
      "name": "기타 비금속 광물제품 제조업",
      "children": [
        {
          "code": "192",
          "name": "석유 정제품 제조업"
        }
      ]
    },
    {
      "code": "2391",
      "name": "석제품 제조업",
      "children": []
    },
    {
      "code": "23911",
      "name": "건설용 석제품 제조업",
      "children": []
    },
    {
      "code": "23919",
      "name": "기타 석제품 제조업",
      "children": []
    },
    {
      "code": "2399",
      "name": "그 외 기타 비금속 광물제품 제조업",
      "children": []
    },
    {
      "code": "2399",
      "name": "그외 기타 비금속 광물제품 제조업",
      "children": [
        {
          "code": "1922",
          "name": "석유 정제물 재처리업"
        }
      ]
    },
    {
      "code": "23991",
      "name": "아스콘 제조업",
      "children": []
    },
    {
      "code": "23991",
      "name": "아스팔트 콘크리트 및 혼합제품 제조업",
      "children": []
    },
    {
      "code": "23992",
      "name": "연마재 제조업",
      "children": []
    },
    {
      "code": "23993",
      "name": "비금속광물 분쇄물 생산업",
      "children": []
    },
    {
      "code": "23994",
      "name": "석면, 암면 및 유사제품 제조업",
      "children": [
        {
          "code": "23999",
          "name": "그 외 기타 분류 안된 비금속 광물제품 제조업"
        }
      ]
    },
    {
      "code": "23994",
      "name": "암면 및 유사제품 제조업",
      "children": []
    },
    {
      "code": "23995",
      "name": "탄소섬유 제조업",
      "children": []
    },
    {
      "code": "23999",
      "name": "그 외 기타 분류 안된 비금속 광물제품 제조업",
      "children": []
    },
    {
      "code": "23999",
      "name": "그외 기타 분류안된 비금속 광물제품 제조업",
      "children": [
        {
          "code": "19229",
          "name": "기타 석유 정제물 재처리업"
        },
        {
          "code": "23991",
          "name": "아스팔트 콘크리트 및 혼합제품 제조업"
        },
        {
          "code": "23995",
          "name": "탄소섬유 제조업"
        }
      ]
    },
    {
      "code": "24",
      "name": "1차 금속 제조업",
      "children": []
    },
    {
      "code": "241",
      "name": "1차 철강 제조업",
      "children": []
    },
    {
      "code": "2411",
      "name": "제철, 제강 및 합금철 제조업",
      "children": []
    },
    {
      "code": "24111",
      "name": "제철업",
      "children": []
    },
    {
      "code": "24112",
      "name": "제강업",
      "children": []
    },
    {
      "code": "24113",
      "name": "합금철 제조업",
      "children": []
    },
    {
      "code": "24119",
      "name": "기타 제철 및 제강업",
      "children": [
        {
          "code": "24113",
          "name": "합금철 제조업"
        }
      ]
    },
    {
      "code": "2412",
      "name": "철강 압연, 압출 및 연신제품 제조업",
      "children": []
    },
    {
      "code": "24121",
      "name": "열간 압연 및 압출 제품 제조업",
      "children": []
    },
    {
      "code": "24122",
      "name": "냉간 압연 및 압출 제품 제조업",
      "children": []
    },
    {
      "code": "24123",
      "name": "철강선 제조업",
      "children": []
    },
    {
      "code": "2413",
      "name": "철강관 제조업",
      "children": []
    },
    {
      "code": "24131",
      "name": "주철관 제조업",
      "children": []
    },
    {
      "code": "24132",
      "name": "강관 제조업",
      "children": [
        {
          "code": "24133",
          "name": "강관 가공품 및 관 연결구류 제조업"
        }
      ]
    },
    {
      "code": "24133",
      "name": "강관 가공품 및 관 연결구류 제조업",
      "children": []
    },
    {
      "code": "2419",
      "name": "기타 1차 철강 제조업",
      "children": []
    },
    {
      "code": "24191",
      "name": "도금, 착색 및 기타 표면처리강재 제조업",
      "children": []
    },
    {
      "code": "24199",
      "name": "그 외 기타 1차 철강 제조업",
      "children": []
    },
    {
      "code": "24199",
      "name": "그외 기타 1차 철강 제조업",
      "children": []
    },
    {
      "code": "242",
      "name": "1차 비철금속 제조업",
      "children": []
    },
    {
      "code": "2421",
      "name": "비철금속 제련, 정련 및 합금 제조업",
      "children": []
    },
    {
      "code": "24211",
      "name": "동 제련, 정련 및 합금 제조업",
      "children": []
    },
    {
      "code": "24212",
      "name": "알루미늄 제련, 정련 및 합금 제조업",
      "children": []
    },
    {
      "code": "24213",
      "name": "연 및 아연 제련, 정련 및 합금 제조업",
      "children": []
    },
    {
      "code": "24219",
      "name": "기타 비철금속 제련, 정련 및 합금 제조업",
      "children": []
    },
    {
      "code": "2422",
      "name": "비철금속 압연, 압출 및 연신제품 제조업",
      "children": []
    },
    {
      "code": "24221",
      "name": "동 압연, 압출 및 연신제품 제조업",
      "children": []
    },
    {
      "code": "24222",
      "name": "알루미늄 압연, 압출 및 연신제품 제조업",
      "children": []
    },
    {
      "code": "24229",
      "name": "기타 비철금속 압연, 압출 및 연신 제품 제조업",
      "children": []
    },
    {
      "code": "24229",
      "name": "기타 비철금속 압연, 압출 및 연신제품 제조업",
      "children": []
    },
    {
      "code": "2429",
      "name": "기타 1차 비철금속 제조업",
      "children": []
    },
    {
      "code": "24290",
      "name": "기타 1차 비철금속 제조업",
      "children": []
    },
    {
      "code": "243",
      "name": "금속 주조업",
      "children": []
    },
    {
      "code": "2431",
      "name": "철강 주조업",
      "children": []
    },
    {
      "code": "24311",
      "name": "선철주물 주조업",
      "children": []
    },
    {
      "code": "24312",
      "name": "강주물 주조업",
      "children": []
    },
    {
      "code": "2432",
      "name": "비철금속 주조업",
      "children": []
    },
    {
      "code": "24321",
      "name": "알루미늄주물 주조업",
      "children": []
    },
    {
      "code": "24322",
      "name": "동주물 주조업",
      "children": [
        {
          "code": "24329",
          "name": "기타 비철금속 주조업"
        }
      ]
    },
    {
      "code": "24329",
      "name": "기타 비철금속 주조업",
      "children": []
    },
    {
      "code": "25",
      "name": "금속가공제품 제조업; 기계 및 가구 제외",
      "children": []
    },
    {
      "code": "25",
      "name": "금속가공제품 제조업;기계 및 가구 제외",
      "children": []
    },
    {
      "code": "251",
      "name": "구조용 금속제품, 탱크 및 증기발생기 제조업",
      "children": []
    },
    {
      "code": "2511",
      "name": "구조용 금속제품 제조업",
      "children": []
    },
    {
      "code": "25111",
      "name": "금속 문, 창, 셔터 및 관련제품 제조업",
      "children": []
    },
    {
      "code": "25112",
      "name": "구조용 금속 판제품 및 공작물 제조업",
      "children": []
    },
    {
      "code": "25112",
      "name": "구조용 금속판제품 및 금속공작물 제조업",
      "children": []
    },
    {
      "code": "25113",
      "name": "금속 조립구조재 제조업",
      "children": [
        {
          "code": "25114",
          "name": "수상 금속 골조 구조재 제조업"
        }
      ]
    },
    {
      "code": "25113",
      "name": "육상 금속 골조 구조재 제조업",
      "children": []
    },
    {
      "code": "25114",
      "name": "수상 금속 골조 구조재 제조업",
      "children": []
    },
    {
      "code": "25119",
      "name": "기타 구조용 금속제품 제조업",
      "children": []
    },
    {
      "code": "2512",
      "name": "금속탱크, 저장조 및 유사 용기 제조업",
      "children": []
    },
    {
      "code": "2512",
      "name": "산업용 난방보일러, 금속탱크 및 유사 용기 제조업",
      "children": []
    },
    {
      "code": "25121",
      "name": "산업용 난방보일러 및 방열기 제조업",
      "children": []
    },
    {
      "code": "25121",
      "name": "중앙난방보일러 및 방열기 제조업",
      "children": []
    },
    {
      "code": "25122",
      "name": "금속탱크 및 저장용기 제조업",
      "children": []
    },
    {
      "code": "25122",
      "name": "설치용 금속탱크 및 저장용기 제조업",
      "children": [
        {
          "code": "25123",
          "name": "압축 및 액화 가스 용기 제조업"
        }
      ]
    },
    {
      "code": "25123",
      "name": "압축 및 액화 가스용기 제조업",
      "children": []
    },
    {
      "code": "2513",
      "name": "핵반응기 및 증기 보일러 제조업",
      "children": []
    },
    {
      "code": "2513",
      "name": "핵반응기 및 증기발생기 제조업",
      "children": []
    },
    {
      "code": "25130",
      "name": "핵반응기 및 증기발생기 제조업",
      "children": []
    },
    {
      "code": "25130",
      "name": "핵반응기 및 증기보일러 제조업",
      "children": []
    },
    {
      "code": "252",
      "name": "무기 및 총포탄 제조업",
      "children": []
    },
    {
      "code": "2520",
      "name": "무기 및 총포탄 제조업",
      "children": []
    },
    {
      "code": "25200",
      "name": "무기 및 총포탄 제조업",
      "children": []
    },
    {
      "code": "259",
      "name": "기타 금속 가공제품 제조업",
      "children": []
    },
    {
      "code": "259",
      "name": "기타 금속가공제품 제조업",
      "children": []
    },
    {
      "code": "2591",
      "name": "금속 단조, 압형 및 분말야금 제품 제조업",
      "children": []
    },
    {
      "code": "25911",
      "name": "분말 야금제품 제조업",
      "children": []
    },
    {
      "code": "25911",
      "name": "분말야금제품 제조업",
      "children": []
    },
    {
      "code": "25912",
      "name": "금속 단조제품 제조업",
      "children": []
    },
    {
      "code": "25912",
      "name": "금속단조제품 제조업",
      "children": []
    },
    {
      "code": "25913",
      "name": "금속압형제품 제조업",
      "children": [
        {
          "code": "25914",
          "name": "그 외 금속 압형제품 제조업"
        }
      ]
    },
    {
      "code": "25913",
      "name": "자동차용 금속 압형제품 제조업",
      "children": []
    },
    {
      "code": "25914",
      "name": "그 외 금속 압형제품 제조업",
      "children": []
    },
    {
      "code": "2592",
      "name": "금속 열처리, 도금 및 기타 금속가공업",
      "children": []
    },
    {
      "code": "25921",
      "name": "금속 열처리업",
      "children": []
    },
    {
      "code": "25922",
      "name": "도금업",
      "children": []
    },
    {
      "code": "25923",
      "name": "도장 및 기타 피막처리업",
      "children": []
    },
    {
      "code": "25924",
      "name": "절삭가공 및 유사처리업",
      "children": []
    },
    {
      "code": "25929",
      "name": "그 외 기타 금속가공업",
      "children": []
    },
    {
      "code": "25929",
      "name": "그외 기타 금속가공업",
      "children": []
    },
    {
      "code": "2593",
      "name": "날붙이, 수공구 및 일반철물 제조업",
      "children": []
    },
    {
      "code": "25931",
      "name": "날붙이 제조업",
      "children": []
    },
    {
      "code": "25932",
      "name": "일반철물 제조업",
      "children": []
    },
    {
      "code": "25933",
      "name": "비동력식 수공구 제조업",
      "children": []
    },
    {
      "code": "25934",
      "name": "톱 및 호환성 공구 제조업",
      "children": []
    },
    {
      "code": "25934",
      "name": "톱 및 호환성공구 제조업",
      "children": []
    },
    {
      "code": "2594",
      "name": "금속파스너, 스프링 및 금속선 가공제품 제조업",
      "children": [
        {
          "code": "2599",
          "name": "그 외 기타 금속 가공제품 제조업"
        }
      ]
    },
    {
      "code": "25941",
      "name": "금속파스너 및 나사제품 제조업",
      "children": [
        {
          "code": "25942",
          "name": "그 외 금속 파스너 및 나사제품 제조업"
        },
        {
          "code": "25999",
          "name": "그 외 기타 분류 안된 금속 가공제품 제조업"
        }
      ]
    },
    {
      "code": "25941",
      "name": "볼트 및 너트류 제조업",
      "children": []
    },
    {
      "code": "25942",
      "name": "그 외 금속파스너 및 나사제품 제조업",
      "children": []
    },
    {
      "code": "25942",
      "name": "금속 스프링 제조업",
      "children": [
        {
          "code": "25943",
          "name": "금속 스프링 제조업"
        }
      ]
    },
    {
      "code": "25943",
      "name": "금속 스프링 제조업",
      "children": []
    },
    {
      "code": "25943",
      "name": "금속선 가공제품 제조업",
      "children": [
        {
          "code": "25944",
          "name": "금속선 가공제품 제조업"
        }
      ]
    },
    {
      "code": "25944",
      "name": "금속선 가공제품 제조업",
      "children": []
    },
    {
      "code": "2599",
      "name": "그 외 기타 금속가공제품 제조업",
      "children": []
    },
    {
      "code": "2599",
      "name": "그외 기타 금속가공제품 제조업",
      "children": []
    },
    {
      "code": "25991",
      "name": "금속 캔 및 기타 포장용기 제조업",
      "children": []
    },
    {
      "code": "25991",
      "name": "금속캔 및 기타 포장용기 제조업",
      "children": []
    },
    {
      "code": "25992",
      "name": "금고 제조업",
      "children": [
        {
          "code": "25999",
          "name": "그 외 기타 분류 안된 금속 가공제품 제조업"
        }
      ]
    },
    {
      "code": "25992",
      "name": "수동식 식품 가공기기 및 금속 주방용기 제조업",
      "children": []
    },
    {
      "code": "25993",
      "name": "금속 위생용품 제조업",
      "children": []
    },
    {
      "code": "25993",
      "name": "수동식 식품 가공기기 및 금속주방용기 제조업",
      "children": [
        {
          "code": "25992",
          "name": "수동식 식품 가공 기기 및 금속 주방용기 제조업"
        }
      ]
    },
    {
      "code": "25994",
      "name": "금속 표시판 제조업",
      "children": []
    },
    {
      "code": "25994",
      "name": "금속위생용품 제조업",
      "children": [
        {
          "code": "25993",
          "name": "금속 위생용품 제조업"
        }
      ]
    },
    {
      "code": "25995",
      "name": "금속표시판 제조업",
      "children": [
        {
          "code": "25994",
          "name": "금속 표시판 제조업"
        }
      ]
    },
    {
      "code": "25995",
      "name": "피복 및 충전 용접봉 제조업",
      "children": []
    },
    {
      "code": "25999",
      "name": "그 외 기타 분류 안된 금속 가공 제품 제조업",
      "children": []
    },
    {
      "code": "25999",
      "name": "그외 기타 분류안된 금속가공제품 제조업",
      "children": [
        {
          "code": "25995",
          "name": "피복 및 충전 용접봉 제조업"
        }
      ]
    },
    {
      "code": "26",
      "name": "전자부품, 컴퓨터, 영상, 음향 및 통신장비 제조업",
      "children": []
    },
    {
      "code": "261",
      "name": "반도체 제조업",
      "children": []
    },
    {
      "code": "2611",
      "name": "전자집적회로 제조업",
      "children": []
    },
    {
      "code": "26110",
      "name": "전자집적회로 제조업",
      "children": [
        {
          "code": "26111",
          "name": "메모리용 전자집적회로 제조업"
        },
        {
          "code": "26112",
          "name": "비메모리용 및 기타 전자집적회로 제조업"
        }
      ]
    },
    {
      "code": "26111",
      "name": "메모리용 전자집적회로 제조업",
      "children": []
    },
    {
      "code": "26112",
      "name": "비메모리용 및 기타 전자집적회로 제조업",
      "children": []
    },
    {
      "code": "2612",
      "name": "다이오드, 트랜지스터 및 유사 반도체소자 제조업",
      "children": []
    },
    {
      "code": "26120",
      "name": "다이오드, 트랜지스터 및 유사 반도체소자 제조업",
      "children": [
        {
          "code": "26121",
          "name": "발광 다이오드 제조업"
        },
        {
          "code": "26129",
          "name": "기타 반도체 소자 제조업"
        }
      ]
    },
    {
      "code": "26121",
      "name": "발광 다이오드 제조업",
      "children": []
    },
    {
      "code": "26129",
      "name": "기타 반도체소자 제조업",
      "children": []
    },
    {
      "code": "262",
      "name": "전자부품 제조업",
      "children": []
    },
    {
      "code": "2621",
      "name": "평판 디스플레이 제조업",
      "children": []
    },
    {
      "code": "2621",
      "name": "표시장치 제조업",
      "children": []
    },
    {
      "code": "26211",
      "name": "액정 평판 디스플레이 제조업",
      "children": []
    },
    {
      "code": "26211",
      "name": "액정 표시장치 제조업",
      "children": []
    },
    {
      "code": "26212",
      "name": "유기발광 표시장치 제조업",
      "children": []
    },
    {
      "code": "26219",
      "name": "기타 표시장치 제조업",
      "children": []
    },
    {
      "code": "26219",
      "name": "플라즈마 및 기타 평판 디스플레이 제조업",
      "children": [
        {
          "code": "26212",
          "name": "유기 발광 표시장치 제조업"
        }
      ]
    },
    {
      "code": "2622",
      "name": "인쇄회로기판 및 전자부품 실장기판 제조업",
      "children": []
    },
    {
      "code": "26221",
      "name": "인쇄회로기판 제조업",
      "children": [
        {
          "code": "26222",
          "name": "경성 인쇄회로기판 제조업"
        },
        {
          "code": "26223",
          "name": "연성 및 기타 인쇄회로기판 제조업"
        }
      ]
    },
    {
      "code": "26221",
      "name": "인쇄회로기판용 적층판 제조업",
      "children": []
    },
    {
      "code": "26222",
      "name": "경성 인쇄회로기판 제조업",
      "children": []
    },
    {
      "code": "26222",
      "name": "전자부품 실장기판 제조업",
      "children": [
        {
          "code": "26224",
          "name": "전자 부품 실장기판 제조업"
        }
      ]
    },
    {
      "code": "26223",
      "name": "연성 및 기타 인쇄회로기판 제조업",
      "children": []
    },
    {
      "code": "26224",
      "name": "전자부품 실장기판 제조업",
      "children": []
    },
    {
      "code": "2629",
      "name": "기타 전자부품 제조업",
      "children": []
    },
    {
      "code": "26291",
      "name": "전자관 제조업",
      "children": [
        {
          "code": "26299",
          "name": "그 외 기타 전자 부품 제조업"
        }
      ]
    },
    {
      "code": "26291",
      "name": "전자축전기 제조업",
      "children": []
    },
    {
      "code": "26292",
      "name": "전자저항기 제조업",
      "children": []
    },
    {
      "code": "26292",
      "name": "전자축전기 제조업",
      "children": [
        {
          "code": "26291",
          "name": "전자 축전기 제조업"
        }
      ]
    },
    {
      "code": "26293",
      "name": "전자저항기 제조업",
      "children": [
        {
          "code": "26292",
          "name": "전자 저항기 제조업"
        }
      ]
    },
    {
      "code": "26293",
      "name": "전자카드 제조업",
      "children": [
        {
          "code": "26292",
          "name": "전자저항기 및 전자카드 제조업"
        }
      ]
    },
    {
      "code": "26294",
      "name": "전자카드 제조업",
      "children": [
        {
          "code": "26293",
          "name": "전자카드 제조업"
        }
      ]
    },
    {
      "code": "26294",
      "name": "전자코일, 변성기 및 기타 전자 유도자 제조업",
      "children": [
        {
          "code": "26293",
          "name": "전자코일, 변성기 및 기타 전자 유도자 제조업"
        }
      ]
    },
    {
      "code": "26295",
      "name": "전자감지장치 제조업",
      "children": [
        {
          "code": "26294",
          "name": "전자감지장치 제조업"
        }
      ]
    },
    {
      "code": "26295",
      "name": "전자코일, 변성기 및 기타 전자유도자 제조업",
      "children": [
        {
          "code": "26294",
          "name": "전자코일, 변성기 및 기타 전자 유도자 제조업"
        }
      ]
    },
    {
      "code": "26296",
      "name": "전자접속카드 제조업",
      "children": [
        {
          "code": "26299",
          "name": "그 외 기타 전자 부품 제조업"
        }
      ]
    },
    {
      "code": "26299",
      "name": "그 외 기타 전자부품 제조업",
      "children": []
    },
    {
      "code": "26299",
      "name": "그외 기타 전자부품 제조업",
      "children": [
        {
          "code": "26295",
          "name": "전자 감지장치 제조업"
        }
      ]
    },
    {
      "code": "263",
      "name": "컴퓨터 및 주변장치 제조업",
      "children": []
    },
    {
      "code": "2631",
      "name": "컴퓨터 제조업",
      "children": []
    },
    {
      "code": "26310",
      "name": "컴퓨터 제조업",
      "children": []
    },
    {
      "code": "2632",
      "name": "기억장치 및 주변기기 제조업",
      "children": []
    },
    {
      "code": "26321",
      "name": "기억장치 제조업",
      "children": []
    },
    {
      "code": "26322",
      "name": "컴퓨터 모니터 제조업",
      "children": []
    },
    {
      "code": "26323",
      "name": "컴퓨터 프린터 제조업",
      "children": []
    },
    {
      "code": "26329",
      "name": "기타 주변기기 제조업",
      "children": []
    },
    {
      "code": "264",
      "name": "통신 및 방송 장비 제조업",
      "children": []
    },
    {
      "code": "2641",
      "name": "유선 통신장비 제조업",
      "children": []
    },
    {
      "code": "26410",
      "name": "유선 통신장비 제조업",
      "children": []
    },
    {
      "code": "2642",
      "name": "방송 및 무선 통신장비 제조업",
      "children": []
    },
    {
      "code": "26421",
      "name": "방송장비 제조업",
      "children": []
    },
    {
      "code": "26422",
      "name": "이동전화기 제조업",
      "children": []
    },
    {
      "code": "26429",
      "name": "기타 무선 통신장비 제조업",
      "children": []
    },
    {
      "code": "265",
      "name": "영상 및 음향기기 제조업",
      "children": []
    },
    {
      "code": "2651",
      "name": "텔레비전, 비디오 및 기타 영상기기 제조업",
      "children": []
    },
    {
      "code": "26511",
      "name": "텔레비전 제조업",
      "children": []
    },
    {
      "code": "26519",
      "name": "비디오 및 기타 영상기기 제조업",
      "children": []
    },
    {
      "code": "2652",
      "name": "오디오, 스피커 및 기타 음향기기 제조업",
      "children": []
    },
    {
      "code": "26521",
      "name": "라디오, 녹음 및 재생 기기 제조업",
      "children": []
    },
    {
      "code": "26529",
      "name": "기타 음향기기 제조업",
      "children": []
    },
    {
      "code": "266",
      "name": "마그네틱 및 광학 매체 제조업",
      "children": []
    },
    {
      "code": "2660",
      "name": "마그네틱 및 광학 매체 제조업",
      "children": []
    },
    {
      "code": "26600",
      "name": "마그네틱 및 광학 매체 제조업",
      "children": []
    },
    {
      "code": "27",
      "name": "의료, 정밀, 광학기기 및 시계 제조업",
      "children": []
    },
    {
      "code": "271",
      "name": "의료용 기기 제조업",
      "children": []
    },
    {
      "code": "2711",
      "name": "방사선 장치 및 전기식 진단 기기 제조업",
      "children": []
    },
    {
      "code": "2711",
      "name": "방사선장치 및 전기식 진단기기 제조업",
      "children": []
    },
    {
      "code": "27111",
      "name": "방사선 장치 제조업",
      "children": []
    },
    {
      "code": "27112",
      "name": "전기식 진단 및 요법 기기 제조업",
      "children": []
    },
    {
      "code": "2719",
      "name": "기타 의료용 기기 제조업",
      "children": []
    },
    {
      "code": "27191",
      "name": "치과용 기기 제조업",
      "children": []
    },
    {
      "code": "27192",
      "name": "정형외과용 및 신체보정용 기기 제조업",
      "children": [
        {
          "code": "27193",
          "name": "치과용 임플란트 제조업"
        },
        {
          "code": "27194",
          "name": "정형외과용 및 신체보정용 기기 제조업"
        }
      ]
    },
    {
      "code": "27193",
      "name": "안경 및 안경렌즈 제조업",
      "children": [
        {
          "code": "27195",
          "name": "안경 및 안경렌즈 제조업"
        }
      ]
    },
    {
      "code": "27193",
      "name": "의료용 가구 제조업",
      "children": [
        {
          "code": "27194",
          "name": "의료용 가구 제조업"
        }
      ]
    },
    {
      "code": "27194",
      "name": "의료용 가구 제조업",
      "children": [
        {
          "code": "27196",
          "name": "의료용 가구 제조업"
        }
      ]
    },
    {
      "code": "27199",
      "name": "그 외 기타 의료용 기기 제조업",
      "children": []
    },
    {
      "code": "27199",
      "name": "그외 기타 의료용 기기 제조업",
      "children": []
    },
    {
      "code": "272",
      "name": "측정, 시험, 항해, 제어 및 기타 정밀기기 제조업; 광학기기 제외",
      "children": []
    },
    {
      "code": "2721",
      "name": "측정, 시험, 항해, 제어 및 기타 정밀기기 제조업",
      "children": []
    },
    {
      "code": "27211",
      "name": "레이더, 항행용 무선기기 및 측량기구 제조업",
      "children": []
    },
    {
      "code": "27211",
      "name": "항행용 무선기기 및 측량기구 제조업",
      "children": []
    },
    {
      "code": "27212",
      "name": "전자기 측정, 시험 및 분석기구 제조업",
      "children": []
    },
    {
      "code": "27213",
      "name": "물질 검사, 측정 및 분석기구 제조업",
      "children": []
    },
    {
      "code": "27214",
      "name": "속도계 및 적산계기 제조업",
      "children": []
    },
    {
      "code": "27215",
      "name": "기기용 자동측정 및 제어장치 제조업",
      "children": []
    },
    {
      "code": "27216",
      "name": "산업처리공정 제어장비 제조업",
      "children": []
    },
    {
      "code": "27219",
      "name": "기타 측정, 시험, 항해, 제어 및 정밀기기 제조업",
      "children": []
    },
    {
      "code": "273",
      "name": "사진장비 및 광학기기 제조업",
      "children": []
    },
    {
      "code": "273",
      "name": "안경, 사진장비 및 기타 광학기기 제조업",
      "children": [
        {
          "code": "271",
          "name": "의료용 기기 제조업"
        }
      ]
    },
    {
      "code": "2730",
      "name": "사진장비 및 광학기기 제조업",
      "children": []
    },
    {
      "code": "27301",
      "name": "광학렌즈 및 광학요소 제조업",
      "children": []
    },
    {
      "code": "27302",
      "name": "사진기, 영사기 및 관련 장비 제조업",
      "children": [
        {
          "code": "27309",
          "name": "기타 광학기기 및 사진기 제조업"
        }
      ]
    },
    {
      "code": "27309",
      "name": "기타 광학기기 제조업",
      "children": []
    },
    {
      "code": "2731",
      "name": "안경 제조업",
      "children": [
        {
          "code": "2719",
          "name": "기타 의료용 기기 제조업"
        }
      ]
    },
    {
      "code": "27310",
      "name": "안경 제조업",
      "children": [
        {
          "code": "27193",
          "name": "안경 및 안경렌즈 제조업"
        }
      ]
    },
    {
      "code": "2732",
      "name": "광학기기 및 사진장비 제조업",
      "children": [
        {
          "code": "2719",
          "name": "기타 의료용 기기 제조업"
        },
        {
          "code": "2730",
          "name": "사진장비 및 광학기기 제조업"
        }
      ]
    },
    {
      "code": "27321",
      "name": "광학렌즈 및 광학요소 제조업",
      "children": [
        {
          "code": "27193",
          "name": "안경 및 안경렌즈 제조업"
        },
        {
          "code": "27301",
          "name": "광학 렌즈 및 광학 요소 제조업"
        }
      ]
    },
    {
      "code": "27322",
      "name": "사진기, 영사기 및 관련장비 제조업",
      "children": [
        {
          "code": "27302",
          "name": "사진기, 영사기 및 관련 장비 제조업"
        }
      ]
    },
    {
      "code": "27329",
      "name": "기타 광학기기 제조업",
      "children": [
        {
          "code": "27192",
          "name": "정형 외과용 및 신체 보정용 기기 제조업"
        },
        {
          "code": "27309",
          "name": "기타 광학 기기 제조업"
        }
      ]
    },
    {
      "code": "274",
      "name": "시계 및 시계부품 제조업",
      "children": [
        {
          "code": "272",
          "name": "측정, 시험, 항해, 제어 및 기타 정밀기기 제조업; 광학기기 제외"
        }
      ]
    },
    {
      "code": "2740",
      "name": "시계 및 시계부품 제조업",
      "children": [
        {
          "code": "2722",
          "name": "시계 및 시계부품 제조업"
        }
      ]
    },
    {
      "code": "27400",
      "name": "시계 및 시계부품 제조업",
      "children": [
        {
          "code": "27220",
          "name": "시계 및 시계부품 제조업"
        }
      ]
    },
    {
      "code": "27401",
      "name": "시계제조업",
      "children": [
        {
          "code": "27400",
          "name": "시계 및 시계 부품 제조업"
        }
      ]
    },
    {
      "code": "27402",
      "name": "시계부품 제조업",
      "children": [
        {
          "code": "27400",
          "name": "시계 및 시계 부품 제조업"
        }
      ]
    },
    {
      "code": "28",
      "name": "전기장비 제조업",
      "children": []
    },
    {
      "code": "281",
      "name": "전동기, 발전기 및 전기 변환 · 공급 · 제어 장치 제조업",
      "children": []
    },
    {
      "code": "281",
      "name": "전동기, 발전기 및 전기 변환ㆍ 공급ㆍ제어 장치 제조업",
      "children": []
    },
    {
      "code": "2811",
      "name": "전동기, 발전기 및 전기 변환장치 제조업",
      "children": []
    },
    {
      "code": "2811",
      "name": "전동기, 발전기 및 전기변환장치 제조업",
      "children": []
    },
    {
      "code": "28111",
      "name": "전동기 및 발전기 제조업",
      "children": []
    },
    {
      "code": "28112",
      "name": "변압기 제조업",
      "children": []
    },
    {
      "code": "28113",
      "name": "방전램프용 안정기 제조업",
      "children": [
        {
          "code": "28119",
          "name": "기타 전기 변환장치 제조업"
        }
      ]
    },
    {
      "code": "28114",
      "name": "에너지 저장장치 제조업",
      "children": [
        {
          "code": "28113",
          "name": "에너지 저장장치 제조업"
        }
      ]
    },
    {
      "code": "28119",
      "name": "기타 발전기 및 전기변환장치 제조업",
      "children": [
        {
          "code": "28114",
          "name": "에너지 저장장치 제조업"
        }
      ]
    },
    {
      "code": "28119",
      "name": "기타 전기 변환장치 제조업",
      "children": []
    },
    {
      "code": "2812",
      "name": "전기 공급 및 제어장치 제조업",
      "children": []
    },
    {
      "code": "2812",
      "name": "전기공급 및 전기제어 장치 제조업",
      "children": []
    },
    {
      "code": "28121",
      "name": "전기회로 개폐, 보호 및 접속 장치 제조업",
      "children": [
        {
          "code": "28122",
          "name": "전기회로 접속장치 제조업"
        }
      ]
    },
    {
      "code": "28121",
      "name": "전기회로 개폐, 보호장치 제조업",
      "children": []
    },
    {
      "code": "28122",
      "name": "배전반 및 전기자동제어반 제조업",
      "children": [
        {
          "code": "28123",
          "name": "배전반 및 전기 자동제어반 제조업"
        }
      ]
    },
    {
      "code": "28122",
      "name": "전기회로 접속장치 제조업",
      "children": []
    },
    {
      "code": "28123",
      "name": "배전반 및 전기 자동제어반 제조업",
      "children": []
    },
    {
      "code": "282",
      "name": "일차전지 및 축전지 제조업",
      "children": []
    },
    {
      "code": "2820",
      "name": "일차전지 및 축전지 제조업",
      "children": []
    },
    {
      "code": "28201",
      "name": "일차전지 제조업",
      "children": []
    },
    {
      "code": "28202",
      "name": "축전지 제조업",
      "children": [
        {
          "code": "28209",
          "name": "기타 이차전지 제조업"
        }
      ]
    },
    {
      "code": "283",
      "name": "절연선 및 케이블 제조업",
      "children": []
    },
    {
      "code": "2830",
      "name": "절연선 및 케이블 제조업",
      "children": []
    },
    {
      "code": "28301",
      "name": "광섬유 케이블 제조업",
      "children": []
    },
    {
      "code": "28302",
      "name": "기타 절연선 및 케이블 제조업",
      "children": []
    },
    {
      "code": "28303",
      "name": "절연 코드세트 및 기타 도체 제조업",
      "children": []
    },
    {
      "code": "284",
      "name": "전구 및 조명장치 제조업",
      "children": []
    },
    {
      "code": "2841",
      "name": "전구 및 램프 제조업",
      "children": []
    },
    {
      "code": "28410",
      "name": "전구 및 램프 제조업",
      "children": []
    },
    {
      "code": "2842",
      "name": "조명장치 제조업",
      "children": []
    },
    {
      "code": "28421",
      "name": "운송장비용 조명장치 제조업",
      "children": []
    },
    {
      "code": "28422",
      "name": "일반용 전기 조명장치 제조업",
      "children": []
    },
    {
      "code": "28423",
      "name": "전시 및 광고용 조명장치 제조업",
      "children": []
    },
    {
      "code": "28429",
      "name": "기타 조명장치 제조업",
      "children": []
    },
    {
      "code": "285",
      "name": "가정용 기기 제조업",
      "children": []
    },
    {
      "code": "2851",
      "name": "가정용 전기기기 제조업",
      "children": []
    },
    {
      "code": "28511",
      "name": "주방용 전기기기 제조업",
      "children": []
    },
    {
      "code": "28512",
      "name": "가정용 전기 난방기기 제조업",
      "children": []
    },
    {
      "code": "28519",
      "name": "기타 가정용 전기기기 제조업",
      "children": []
    },
    {
      "code": "2852",
      "name": "가정용 비전기식 조리 및 난방 기구 제조업",
      "children": []
    },
    {
      "code": "28520",
      "name": "가정용 비전기식 조리 및 난방 기구 제조업",
      "children": []
    },
    {
      "code": "289",
      "name": "기타 전기장비 제조업",
      "children": []
    },
    {
      "code": "2890",
      "name": "기타 전기장비 제조업",
      "children": []
    },
    {
      "code": "28901",
      "name": "전기경보 및 신호장치 제조업",
      "children": []
    },
    {
      "code": "28902",
      "name": "전기용 탄소제품 및 절연제품 제조업",
      "children": []
    },
    {
      "code": "28903",
      "name": "교통 신호장치 제조업",
      "children": []
    },
    {
      "code": "28909",
      "name": "그 외 기타 전기장비 제조업",
      "children": []
    },
    {
      "code": "28909",
      "name": "그외 기타 전기장비 제조업",
      "children": []
    },
    {
      "code": "29",
      "name": "기타 기계 및 장비 제조업",
      "children": []
    },
    {
      "code": "291",
      "name": "일반 목적용 기계 제조업",
      "children": []
    },
    {
      "code": "2911",
      "name": "내연기관 및 터빈 제조업; 항공기용 및 차량용 제외",
      "children": []
    },
    {
      "code": "29111",
      "name": "내연기관 제조업",
      "children": []
    },
    {
      "code": "29119",
      "name": "기타 기관 및 터빈 제조업",
      "children": []
    },
    {
      "code": "2912",
      "name": "유압기기 제조업",
      "children": []
    },
    {
      "code": "29120",
      "name": "유압기기 제조업",
      "children": []
    },
    {
      "code": "2913",
      "name": "펌프 및 압축기 제조업; 탭, 밸브 및 유사장치 제조 포함",
      "children": []
    },
    {
      "code": "29131",
      "name": "액체 펌프 제조업",
      "children": []
    },
    {
      "code": "29132",
      "name": "기체 펌프 및 압축기 제조업",
      "children": []
    },
    {
      "code": "29133",
      "name": "탭, 밸브 및 유사장치 제조업",
      "children": []
    },
    {
      "code": "2914",
      "name": "베어링, 기어 및 동력전달장치 제조업",
      "children": []
    },
    {
      "code": "29141",
      "name": "구름베어링 제조업",
      "children": []
    },
    {
      "code": "29141",
      "name": "볼베어링 및 롤러베어링 제조업",
      "children": []
    },
    {
      "code": "29142",
      "name": "기어 및 동력전달장치 제조업",
      "children": []
    },
    {
      "code": "2915",
      "name": "산업용 오븐, 노 및 노용 버너 제조업",
      "children": [
        {
          "code": "2917",
          "name": "냉각, 공기 조화, 여과, 증류 및 가스 발생기 제조업"
        }
      ]
    },
    {
      "code": "29150",
      "name": "산업용 오븐, 노 및 노용 버너 제조업",
      "children": [
        {
          "code": "29171",
          "name": "산업용 냉장 및 냉동장비 제조업"
        }
      ]
    },
    {
      "code": "2916",
      "name": "산업용 트럭, 승강기 및 물품취급장비 제조업",
      "children": []
    },
    {
      "code": "29161",
      "name": "산업용 트럭 및 적재기 제조업",
      "children": []
    },
    {
      "code": "29162",
      "name": "승강기 제조업",
      "children": []
    },
    {
      "code": "29163",
      "name": "컨베이어장치 제조업",
      "children": [
        {
          "code": "29169",
          "name": "기타 물품 취급장비 제조업"
        }
      ]
    },
    {
      "code": "29169",
      "name": "기타 물품 취급장비 제조업",
      "children": []
    },
    {
      "code": "29169",
      "name": "기타 물품취급장비 제조업",
      "children": []
    },
    {
      "code": "2917",
      "name": "냉각, 공기조화, 여과, 증류 및 가스발생기 제조업",
      "children": []
    },
    {
      "code": "29171",
      "name": "산업용 냉장 및 냉동 장비 제조업",
      "children": []
    },
    {
      "code": "29172",
      "name": "공기 조화장치 제조업",
      "children": [
        {
          "code": "29173",
          "name": "운송장비용 공기 조화장치 제조업"
        }
      ]
    },
    {
      "code": "29172",
      "name": "공기조화장치 제조업",
      "children": []
    },
    {
      "code": "29173",
      "name": "산업용 송풍기 및 배기장치 제조업",
      "children": [
        {
          "code": "29174",
          "name": "산업용 송풍기 및 배기장치 제조업"
        }
      ]
    },
    {
      "code": "29174",
      "name": "기체 여과기 제조업",
      "children": [
        {
          "code": "29175",
          "name": "기체 여과기 제조업"
        }
      ]
    },
    {
      "code": "29175",
      "name": "액체 여과기 제조업",
      "children": [
        {
          "code": "29176",
          "name": "액체 여과기 제조업"
        }
      ]
    },
    {
      "code": "29176",
      "name": "증류기, 열교환기 및 가스발생기 제조업",
      "children": [
        {
          "code": "29177",
          "name": "증류기, 열교환기 및 가스발생기 제조업"
        }
      ]
    },
    {
      "code": "29176",
      "name": "증류기,열교환기 및 가스발생기 제조업",
      "children": []
    },
    {
      "code": "2918",
      "name": "사무용 기계 및 장비 제조업",
      "children": []
    },
    {
      "code": "29180",
      "name": "사무용 기계 및 장비 제조업",
      "children": []
    },
    {
      "code": "2919",
      "name": "기타 일반 목적용 기계 제조업",
      "children": [
        {
          "code": "2917",
          "name": "냉각, 공기 조화, 여과, 증류 및 가스 발생기 제조업"
        }
      ]
    },
    {
      "code": "29191",
      "name": "일반저울 제조업",
      "children": [
        {
          "code": "29199",
          "name": "그 외 기타 일반목적용 기계 제조업"
        }
      ]
    },
    {
      "code": "29192",
      "name": "용기 세척, 포장 및 충전기 제조업",
      "children": [
        {
          "code": "29191",
          "name": "용기 세척, 포장 및 충전기 제조업"
        }
      ]
    },
    {
      "code": "29192",
      "name": "용기세척, 포장 및 충전기 제조업",
      "children": []
    },
    {
      "code": "29193",
      "name": "분사기 및 소화기 제조업",
      "children": [
        {
          "code": "29192",
          "name": "분사기 및 소화기 제조업"
        }
      ]
    },
    {
      "code": "29193",
      "name": "자동판매기 및 화폐교환기 제조업",
      "children": [
        {
          "code": "29199",
          "name": "그 외 기타 일반 목적용 기계 제조업"
        }
      ]
    },
    {
      "code": "29194",
      "name": "동력식 수지공구 제조업",
      "children": [
        {
          "code": "29193",
          "name": "동력식 수지공구 제조업"
        }
      ]
    },
    {
      "code": "29194",
      "name": "분사기 및 소화기  제조업",
      "children": [
        {
          "code": "29193",
          "name": "분사기 및 소화기 제조업"
        }
      ]
    },
    {
      "code": "29195",
      "name": "동력식 수지공구 제조업",
      "children": [
        {
          "code": "29194",
          "name": "동력식 수지 공구 제조업"
        }
      ]
    },
    {
      "code": "29199",
      "name": "그 외 기타 일반목적용 기계 제조업",
      "children": []
    },
    {
      "code": "29199",
      "name": "그외 기타 일반목적용 기계 제조업",
      "children": [
        {
          "code": "29176",
          "name": "증류기, 열 교환기 및 가스 발생기 제조업"
        }
      ]
    },
    {
      "code": "292",
      "name": "특수 목적용 기계 제조업",
      "children": []
    },
    {
      "code": "2921",
      "name": "농업 및 임업용 기계 제조업",
      "children": []
    },
    {
      "code": "29210",
      "name": "농업 및 임업용 기계 제조업",
      "children": []
    },
    {
      "code": "2922",
      "name": "가공 공작기계 제조업",
      "children": []
    },
    {
      "code": "2922",
      "name": "가공공작기계 제조업",
      "children": []
    },
    {
      "code": "29221",
      "name": "전자 응용 절삭기계 제조업",
      "children": []
    },
    {
      "code": "29221",
      "name": "전자응용 공작기계 제조업",
      "children": []
    },
    {
      "code": "29222",
      "name": "금속 절삭기계 제조업",
      "children": [
        {
          "code": "29223",
          "name": "금속 절삭기계 제조업"
        }
      ]
    },
    {
      "code": "29222",
      "name": "디지털 적층 성형기계 제조업",
      "children": []
    },
    {
      "code": "29223",
      "name": "금속 성형기계 제조업",
      "children": [
        {
          "code": "29222",
          "name": "디지털 적층 성형기계 제조업"
        },
        {
          "code": "29224",
          "name": "금속 성형기계 제조업"
        }
      ]
    },
    {
      "code": "29223",
      "name": "금속 절삭기계 제조업",
      "children": []
    },
    {
      "code": "29224",
      "name": "금속 성형기계 제조업",
      "children": []
    },
    {
      "code": "29229",
      "name": "기타 가공 공작기계 제조업",
      "children": []
    },
    {
      "code": "29229",
      "name": "기타 가공공작기계 제조업",
      "children": []
    },
    {
      "code": "2923",
      "name": "금속 주조 및 기타 야금용 기계 제조업",
      "children": []
    },
    {
      "code": "2923",
      "name": "금속주조 및 기타 야금용 기계 제조업",
      "children": []
    },
    {
      "code": "29230",
      "name": "금속 주조 및 기타 야금용 기계 제조업",
      "children": []
    },
    {
      "code": "2924",
      "name": "건설 및 광산용 기계장비 제조업",
      "children": []
    },
    {
      "code": "2924",
      "name": "건설 및 광업용 기계장비 제조업",
      "children": []
    },
    {
      "code": "29241",
      "name": "건설 및 채광용 기계장비 제조업",
      "children": []
    },
    {
      "code": "29241",
      "name": "토목공사 및 유사용 기계장비 제조업",
      "children": []
    },
    {
      "code": "29242",
      "name": "광물처리 및 취급장비 제조업",
      "children": []
    },
    {
      "code": "2925",
      "name": "음·식료품 및 담배 가공기계 제조업",
      "children": []
    },
    {
      "code": "2925",
      "name": "음ㆍ식료품 및 담배 가공기계 제조업",
      "children": []
    },
    {
      "code": "29250",
      "name": "음·식료품 및 담배 가공기계 제조업",
      "children": []
    },
    {
      "code": "29250",
      "name": "음ㆍ식료품 및 담배 가공기계 제조업",
      "children": []
    },
    {
      "code": "2926",
      "name": "섬유, 의복 및 가죽 가공기계 제조업",
      "children": []
    },
    {
      "code": "29261",
      "name": "산업용 섬유 세척, 염색, 정리 및 가공 기계 제조업",
      "children": []
    },
    {
      "code": "29261",
      "name": "산업용 섬유세척, 염색, 정리 및 가공 기계 제조업",
      "children": []
    },
    {
      "code": "29269",
      "name": "기타 섬유, 의복 및 가죽 가공 기계 제조업",
      "children": []
    },
    {
      "code": "2927",
      "name": "반도체 및 디스플레이 제조용 기계 제조업",
      "children": []
    },
    {
      "code": "2927",
      "name": "반도체 및 평판디스플레이 제조용 기계 제조업",
      "children": []
    },
    {
      "code": "29271",
      "name": "반도체 제조용 기계 제조업",
      "children": []
    },
    {
      "code": "29272",
      "name": "디스플레이 제조용 기계 제조업",
      "children": []
    },
    {
      "code": "29272",
      "name": "평판디스플레이 제조용 기계 제조업",
      "children": []
    },
    {
      "code": "2928",
      "name": "산업용 로봇 제조업",
      "children": []
    },
    {
      "code": "29280",
      "name": "산업용 로봇 제조업",
      "children": []
    },
    {
      "code": "2929",
      "name": "기타 특수 목적용 기계 제조업",
      "children": []
    },
    {
      "code": "2929",
      "name": "기타 특수목적용 기계 제조업",
      "children": [
        {
          "code": "2922",
          "name": "가공 공작기계 제조업"
        },
        {
          "code": "2926",
          "name": "섬유, 의복 및 가죽 가공기계 제조업"
        }
      ]
    },
    {
      "code": "29291",
      "name": "펄프 및 종이 가공용 기계 제조업",
      "children": [
        {
          "code": "29299",
          "name": "그 외 기타 특수목적용 기계 제조업"
        }
      ]
    },
    {
      "code": "29292",
      "name": "고무, 화학섬유 및 플라스틱 성형기 제조업",
      "children": [
        {
          "code": "29291",
          "name": "고무, 화학섬유 및 플라스틱 성형기 제조업"
        },
        {
          "code": "29222",
          "name": "디지털 적층 성형기계 제조업"
        }
      ]
    },
    {
      "code": "29293",
      "name": "인쇄 및 제책용 기계 제조업",
      "children": [
        {
          "code": "29292",
          "name": "인쇄 및 제책용 기계 제조업"
        }
      ]
    },
    {
      "code": "29294",
      "name": "주형 및 금형 제조업",
      "children": [
        {
          "code": "29293",
          "name": "주형 및 금형 제조업"
        }
      ]
    },
    {
      "code": "29299",
      "name": "그 외 기타 특수목적용 기계 제조업",
      "children": []
    },
    {
      "code": "29299",
      "name": "그외 기타 특수목적용 기계 제조업",
      "children": [
        {
          "code": "29261",
          "name": "산업용 섬유 세척, 염색, 정리 및 가공 기계 제조업"
        }
      ]
    },
    {
      "code": "3",
      "name": "어업",
      "children": []
    },
    {
      "code": "30",
      "name": "자동차 및 트레일러 제조업",
      "children": []
    },
    {
      "code": "301",
      "name": "자동차용 엔진 및 자동차 제조업",
      "children": []
    },
    {
      "code": "3011",
      "name": "자동차용 엔진 제조업",
      "children": []
    },
    {
      "code": "30110",
      "name": "자동차용 엔진 제조업",
      "children": []
    },
    {
      "code": "3012",
      "name": "자동차 제조업",
      "children": []
    },
    {
      "code": "30121",
      "name": "승용차 및 기타 여객용 자동차 제조업",
      "children": [
        {
          "code": "30122",
          "name": "전기 승용차 및 기타 여객용 전기 자동차 제조업"
        }
      ]
    },
    {
      "code": "30122",
      "name": "화물자동차 및 특수목적용 자동차 제조업",
      "children": [
        {
          "code": "30123",
          "name": "내연기관 화물자동차 및 특수목적용 자동차 제조업"
        },
        {
          "code": "30124",
          "name": "전기 화물자동차 및 특수목적용 전기 자동차 제조업"
        }
      ]
    },
    {
      "code": "302",
      "name": "자동차 차체 및 트레일러 제조업",
      "children": []
    },
    {
      "code": "3020",
      "name": "자동차 차체 및 트레일러 제조업",
      "children": []
    },
    {
      "code": "30201",
      "name": "차체 및 특장차 제조업",
      "children": [
        {
          "code": "30202",
          "name": "자동차 구조 및 장치 변경업"
        }
      ]
    },
    {
      "code": "30202",
      "name": "자동차 구조 및 장치 변경업",
      "children": []
    },
    {
      "code": "30202",
      "name": "트레일러 및 세미트레일러 제조업",
      "children": [
        {
          "code": "30203",
          "name": "트레일러 및 세미 트레일러 제조업"
        }
      ]
    },
    {
      "code": "30203",
      "name": "운송용 컨테이너 제조업",
      "children": []
    },
    {
      "code": "30203",
      "name": "트레일러 및 세미트레일러 제조업",
      "children": []
    },
    {
      "code": "303",
      "name": "자동차 부품 제조업",
      "children": [
        {
          "code": "304",
          "name": "자동차 재제조 부품 제조업"
        }
      ]
    },
    {
      "code": "303",
      "name": "자동차 신품 부품 제조업",
      "children": []
    },
    {
      "code": "3031",
      "name": "자동차 엔진용 부품 제조업",
      "children": [
        {
          "code": "3040",
          "name": "자동차 재제조 부품 제조업"
        }
      ]
    },
    {
      "code": "3031",
      "name": "자동차 엔진용 신품 부품 제조업",
      "children": []
    },
    {
      "code": "30310",
      "name": "자동차 엔진용 부품 제조업",
      "children": [
        {
          "code": "30400",
          "name": "자동차 재제조 부품 제조업"
        }
      ]
    },
    {
      "code": "30310",
      "name": "자동차 엔진용 신품 부품 제조업",
      "children": []
    },
    {
      "code": "3032",
      "name": "자동차 차체용 부품 제조업",
      "children": [
        {
          "code": "3039",
          "name": "자동차용 기타 신품 부품 제조업"
        },
        {
          "code": "3040",
          "name": "자동차 재제조 부품 제조업"
        }
      ]
    },
    {
      "code": "3032",
      "name": "자동차 차체용 신품 부품 제조업",
      "children": []
    },
    {
      "code": "30320",
      "name": "자동차 차체용 부품 제조업",
      "children": [
        {
          "code": "30399",
          "name": "그 외 자동차용 신품 부품 제조업"
        },
        {
          "code": "30400",
          "name": "자동차 재제조 부품 제조업"
        }
      ]
    },
    {
      "code": "30320",
      "name": "자동차 차체용 신품 부품 제조업",
      "children": []
    },
    {
      "code": "3033",
      "name": "자동차용 신품 동력전달장치 및 전기장치 제조업",
      "children": []
    },
    {
      "code": "30331",
      "name": "자동차용 신품 동력전달장치 제조업",
      "children": []
    },
    {
      "code": "30332",
      "name": "자동차용 신품 전기장치 제조업",
      "children": []
    },
    {
      "code": "3039",
      "name": "기타 자동차 부품 제조업",
      "children": [
        {
          "code": "3033",
          "name": "자동차용 신품 동력 전달장치 및 전기장치 제조업"
        },
        {
          "code": "3040",
          "name": "자동차 재제조 부품 제조업"
        }
      ]
    },
    {
      "code": "3039",
      "name": "자동차용 기타 신품 부품 제조업",
      "children": []
    },
    {
      "code": "30391",
      "name": "자동차용 동력전달장치 제조업",
      "children": [
        {
          "code": "30331",
          "name": "자동차용 신품 동력 전달장치 제조업"
        },
        {
          "code": "30400",
          "name": "자동차 재제조 부품 제조업"
        }
      ]
    },
    {
      "code": "30391",
      "name": "자동차용 신품 조향장치 및 현가 장치 제조업",
      "children": []
    },
    {
      "code": "30392",
      "name": "자동차용 신품 제동장치 제조업",
      "children": []
    },
    {
      "code": "30392",
      "name": "자동차용 전기장치 제조업",
      "children": [
        {
          "code": "30332",
          "name": "자동차용 신품 전기장치 제조업"
        },
        {
          "code": "30400",
          "name": "자동차 재제조 부품 제조업"
        }
      ]
    },
    {
      "code": "30393",
      "name": "자동차용 신품 의자 제조업",
      "children": []
    },
    {
      "code": "30399",
      "name": "그 외 자동차용 신품 부품 제조업",
      "children": []
    },
    {
      "code": "30399",
      "name": "그외 기타 자동차 부품 제조업",
      "children": [
        {
          "code": "30391",
          "name": "자동차용 신품 조향장치 및 현가장치 제조업"
        },
        {
          "code": "30392",
          "name": "자동차용 신품 제동장치 제조업"
        },
        {
          "code": "30400",
          "name": "자동차 재제조 부품 제조업"
        }
      ]
    },
    {
      "code": "304",
      "name": "자동차 재제조 부품 제조업",
      "children": []
    },
    {
      "code": "3040",
      "name": "자동차 재제조 부품 제조업",
      "children": []
    },
    {
      "code": "30400",
      "name": "자동차 재제조 부품 제조업",
      "children": []
    },
    {
      "code": "31",
      "name": "기타 운송장비 제조업",
      "children": []
    },
    {
      "code": "31",
      "name": "어로 어업",
      "children": []
    },
    {
      "code": "311",
      "name": "선박 및 보트 건조업",
      "children": []
    },
    {
      "code": "311",
      "name": "해면 어업",
      "children": []
    },
    {
      "code": "311",
      "name": "해수면 어업",
      "children": []
    },
    {
      "code": "3111",
      "name": "선박 건조업",
      "children": []
    },
    {
      "code": "3111",
      "name": "선박 및 수상 부유 구조물 건조업",
      "children": []
    },
    {
      "code": "3111",
      "name": "원양 어업",
      "children": []
    },
    {
      "code": "31111",
      "name": "강선 건조업",
      "children": [
        {
          "code": "31113",
          "name": "기타 선박 건조업"
        }
      ]
    },
    {
      "code": "31112",
      "name": "합성수지선 건조업",
      "children": []
    },
    {
      "code": "31113",
      "name": "기타 선박 건조업",
      "children": []
    },
    {
      "code": "31113",
      "name": "비철금속 선박 및 기타 항해용 선박 건조업",
      "children": []
    },
    {
      "code": "31114",
      "name": "선박 구성 부분품 제조업",
      "children": []
    },
    {
      "code": "31114",
      "name": "선박 구성부분품 제조업",
      "children": []
    },
    {
      "code": "31119",
      "name": "기타 선박 건조업",
      "children": [
        {
          "code": "31113",
          "name": "기타 선박 건조업"
        }
      ]
    },
    {
      "code": "3112",
      "name": "연근해 어업",
      "children": []
    },
    {
      "code": "3112",
      "name": "오락 및 스포츠용 보트 건조업",
      "children": []
    },
    {
      "code": "31120",
      "name": "오락 및 스포츠용 보트 건조업",
      "children": []
    },
    {
      "code": "312",
      "name": "내수면 어업",
      "children": []
    },
    {
      "code": "312",
      "name": "철도장비 제조업",
      "children": []
    },
    {
      "code": "3120",
      "name": "내수면 어업",
      "children": []
    },
    {
      "code": "3120",
      "name": "철도장비 제조업",
      "children": []
    },
    {
      "code": "31201",
      "name": "기관차 및 기타 철도차량 제조업",
      "children": []
    },
    {
      "code": "31202",
      "name": "철도차량 부품 및 관련 장치물 제조업",
      "children": []
    },
    {
      "code": "31202",
      "name": "철도차량부품 및 관련장치물 제조업",
      "children": []
    },
    {
      "code": "313",
      "name": "항공기, 우주선 및 부품 제조업",
      "children": []
    },
    {
      "code": "313",
      "name": "항공기,우주선 및 부품 제조업",
      "children": []
    },
    {
      "code": "3131",
      "name": "항공기, 우주선 및 보조장치 제조업",
      "children": []
    },
    {
      "code": "3131",
      "name": "항공기,우주선 및 보조장치 제조업",
      "children": []
    },
    {
      "code": "31310",
      "name": "항공기,우주선 및 보조장치 제조업",
      "children": [
        {
          "code": "31311",
          "name": "유인 항공기, 항공 우주선 및 보조장치 제조업"
        },
        {
          "code": "31312",
          "name": "무인 항공기 및 무인 비행장치 제조업"
        }
      ]
    },
    {
      "code": "31311",
      "name": "유인 항공기, 항공우주선 및 보조장치 제조업",
      "children": []
    },
    {
      "code": "31312",
      "name": "무인 항공기 및 무인 비행장치 제조업",
      "children": []
    },
    {
      "code": "3132",
      "name": "항공기용 엔진 및 부품 제조업",
      "children": []
    },
    {
      "code": "31321",
      "name": "항공기용 엔진 제조업",
      "children": []
    },
    {
      "code": "31322",
      "name": "항공기용 부품 제조업",
      "children": []
    },
    {
      "code": "319",
      "name": "그 외 기타 운송장비 제조업",
      "children": []
    },
    {
      "code": "319",
      "name": "그외 기타 운송장비 제조업",
      "children": []
    },
    {
      "code": "3191",
      "name": "전투용 차량 제조업",
      "children": []
    },
    {
      "code": "31910",
      "name": "전투용 차량 제조업",
      "children": []
    },
    {
      "code": "3192",
      "name": "모터사이클 제조업",
      "children": []
    },
    {
      "code": "31920",
      "name": "모터사이클 제조업",
      "children": [
        {
          "code": "31921",
          "name": "모터사이클 제조업"
        },
        {
          "code": "31922",
          "name": "개인용 전기식 이동수단 제조업"
        }
      ]
    },
    {
      "code": "3199",
      "name": "그 외 기타 분류 안된 운송장비 제조업",
      "children": []
    },
    {
      "code": "3199",
      "name": "그외 기타 분류안된 운송장비 제조업",
      "children": []
    },
    {
      "code": "31991",
      "name": "자전거 및 환자용 차량 제조업",
      "children": []
    },
    {
      "code": "31999",
      "name": "그 외 기타 달리 분류되지 않은 운송장비 제조업",
      "children": []
    },
    {
      "code": "31999",
      "name": "그외 기타 달리 분류되지 않은 운송장비 제조업",
      "children": []
    },
    {
      "code": "32",
      "name": "가구 제조업",
      "children": [
        {
          "code": "30",
          "name": "자동차 및 트레일러 제조업"
        },
        {
          "code": "31",
          "name": "기타 운송장비 제조업"
        }
      ]
    },
    {
      "code": "32",
      "name": "양식어업 및 어업관련 서비스업",
      "children": []
    },
    {
      "code": "320",
      "name": "가구 제조업",
      "children": [
        {
          "code": "303",
          "name": "자동차 신품 부품 제조업"
        },
        {
          "code": "312",
          "name": "철도장비 제조업"
        },
        {
          "code": "313",
          "name": "항공기, 우주선 및 부품 제조업"
        },
        {
          "code": "319",
          "name": "그 외 기타 운송장비 제조업"
        }
      ]
    },
    {
      "code": "3201",
      "name": "침대 및 내장가구 제조업",
      "children": [
        {
          "code": "3039",
          "name": "자동차용 기타 신품 부품 제조업"
        },
        {
          "code": "3120",
          "name": "철도장비 제조업"
        },
        {
          "code": "3132",
          "name": "항공기용 엔진 및 부품 제조업"
        },
        {
          "code": "3192",
          "name": "모터사이클 제조업"
        }
      ]
    },
    {
      "code": "32011",
      "name": "매트리스 및 침대 제조업",
      "children": []
    },
    {
      "code": "32011",
      "name": "운송장비용 의자 제조업",
      "children": [
        {
          "code": "30393",
          "name": "자동차용 신품 의자 제조업"
        },
        {
          "code": "31202",
          "name": "철도 차량 부품 및 관련 장치물 제조업"
        },
        {
          "code": "31322",
          "name": "항공기용 부품 제조업"
        },
        {
          "code": "31920",
          "name": "모터사이클 제조업"
        }
      ]
    },
    {
      "code": "32012",
      "name": "매트리스 및 침대 제조업",
      "children": [
        {
          "code": "32011",
          "name": "매트리스 및 침대 제조업"
        }
      ]
    },
    {
      "code": "32019",
      "name": "소파 및 기타 내장가구 제조업",
      "children": []
    },
    {
      "code": "3202",
      "name": "목재가구 제조업",
      "children": []
    },
    {
      "code": "32021",
      "name": "주방용 및 음식점용 목재가구 제조업",
      "children": []
    },
    {
      "code": "32022",
      "name": "나전칠기가구 제조업",
      "children": [
        {
          "code": "32029",
          "name": "기타 목재 가구 제조업"
        }
      ]
    },
    {
      "code": "32029",
      "name": "기타 목재가구 제조업",
      "children": []
    },
    {
      "code": "3209",
      "name": "기타 가구 제조업",
      "children": []
    },
    {
      "code": "32091",
      "name": "금속 가구 제조업",
      "children": []
    },
    {
      "code": "32099",
      "name": "그 외 기타 가구 제조업",
      "children": []
    },
    {
      "code": "32099",
      "name": "그외 기타 가구 제조업",
      "children": []
    },
    {
      "code": "321",
      "name": "양식 어업",
      "children": []
    },
    {
      "code": "3211",
      "name": "해면 양식 어업",
      "children": []
    },
    {
      "code": "3211",
      "name": "해수면 양식 어업",
      "children": []
    },
    {
      "code": "3212",
      "name": "내수면 양식 어업",
      "children": []
    },
    {
      "code": "3213",
      "name": "수산물 부화 및 수산종자 생산업",
      "children": []
    },
    {
      "code": "3213",
      "name": "수산물 부화 및 종묘 생산업",
      "children": []
    },
    {
      "code": "322",
      "name": "어업 관련 서비스업",
      "children": []
    },
    {
      "code": "3220",
      "name": "어업 관련 서비스업",
      "children": []
    },
    {
      "code": "33",
      "name": "기타 제품 제조업",
      "children": [
        {
          "code": "18",
          "name": "인쇄 및 기록매체 복제업"
        },
        {
          "code": "31",
          "name": "기타 운송장비 제조업"
        }
      ]
    },
    {
      "code": "331",
      "name": "귀금속 및 장신용품 제조업",
      "children": []
    },
    {
      "code": "3311",
      "name": "귀금속 및 관련제품 제조업",
      "children": []
    },
    {
      "code": "33110",
      "name": "귀금속 및 관련제품 제조업",
      "children": []
    },
    {
      "code": "3312",
      "name": "모조 귀금속 및 모조 장신용품 제조업",
      "children": []
    },
    {
      "code": "33120",
      "name": "모조 귀금속 및 모조 장신용품 제조업",
      "children": []
    },
    {
      "code": "332",
      "name": "악기 제조업",
      "children": []
    },
    {
      "code": "3320",
      "name": "악기 제조업",
      "children": []
    },
    {
      "code": "3320",
      "name": "악기제조업",
      "children": []
    },
    {
      "code": "33201",
      "name": "건반 악기 제조업",
      "children": []
    },
    {
      "code": "33201",
      "name": "피아노 제조업",
      "children": []
    },
    {
      "code": "33202",
      "name": "전자 악기 제조업",
      "children": [
        {
          "code": "33209",
          "name": "기타 악기 및 전자 악기 제조업"
        }
      ]
    },
    {
      "code": "33202",
      "name": "현악기 제조업",
      "children": [
        {
          "code": "33209",
          "name": "기타 악기 제조업"
        }
      ]
    },
    {
      "code": "33203",
      "name": "전자악기 제조업",
      "children": [
        {
          "code": "33202",
          "name": "전자 악기 제조업"
        }
      ]
    },
    {
      "code": "33204",
      "name": "국악기 제조업",
      "children": [
        {
          "code": "33209",
          "name": "기타 악기 제조업"
        }
      ]
    },
    {
      "code": "33209",
      "name": "기타 악기 제조업",
      "children": [
        {
          "code": "33201",
          "name": "건반 악기 제조업"
        }
      ]
    },
    {
      "code": "333",
      "name": "운동 및 경기용구 제조업",
      "children": []
    },
    {
      "code": "3330",
      "name": "운동 및 경기용구 제조업",
      "children": []
    },
    {
      "code": "33301",
      "name": "체조, 육상 및 체력단련용 장비 제조업",
      "children": []
    },
    {
      "code": "33302",
      "name": "놀이터용 장비 제조업",
      "children": []
    },
    {
      "code": "33303",
      "name": "낚시 및 수렵용구 제조업",
      "children": []
    },
    {
      "code": "33309",
      "name": "기타 운동 및 경기용구 제조업",
      "children": []
    },
    {
      "code": "334",
      "name": "인형, 장난감 및 오락용품 제조업",
      "children": []
    },
    {
      "code": "334",
      "name": "인형,장난감 및 오락용품 제조업",
      "children": [
        {
          "code": "333",
          "name": "운동 및 경기용구 제조업"
        }
      ]
    },
    {
      "code": "3340",
      "name": "인형, 장난감 및 오락용품 제조업",
      "children": []
    },
    {
      "code": "3340",
      "name": "인형,장난감 및 오락용품 제조업",
      "children": [
        {
          "code": "3330",
          "name": "운동 및 경기용구 제조업"
        }
      ]
    },
    {
      "code": "33401",
      "name": "인형 및 장난감 제조업",
      "children": []
    },
    {
      "code": "33402",
      "name": "영상게임기 제조업",
      "children": []
    },
    {
      "code": "33409",
      "name": "기타 오락용품 제조업",
      "children": [
        {
          "code": "33309",
          "name": "기타 운동 및 경기용구 제조업"
        }
      ]
    },
    {
      "code": "339",
      "name": "그 외 기타 제품 제조업",
      "children": []
    },
    {
      "code": "339",
      "name": "그외 기타 제품 제조업",
      "children": [
        {
          "code": "181",
          "name": "인쇄 및 인쇄관련 산업"
        },
        {
          "code": "319",
          "name": "그 외 기타 운송장비 제조업"
        }
      ]
    },
    {
      "code": "3391",
      "name": "간판 및 광고물 제조업",
      "children": []
    },
    {
      "code": "33910",
      "name": "간판 및 광고물 제조업",
      "children": []
    },
    {
      "code": "3392",
      "name": "사무 및 회화용품 제조업",
      "children": []
    },
    {
      "code": "33920",
      "name": "사무 및 회화용품 제조업",
      "children": []
    },
    {
      "code": "3393",
      "name": "가발, 장식용품 및 교시용 모형 제조업",
      "children": [
        {
          "code": "1811",
          "name": "인쇄업"
        }
      ]
    },
    {
      "code": "3393",
      "name": "가발, 장식용품 및 전시용 모형 제조업",
      "children": []
    },
    {
      "code": "33931",
      "name": "가발 및 유사 제품 제조업",
      "children": []
    },
    {
      "code": "33932",
      "name": "전시용 모형 제조업",
      "children": []
    },
    {
      "code": "33932",
      "name": "조화 및 모조장식품 제조업",
      "children": []
    },
    {
      "code": "33933",
      "name": "표구 및 전사처리 제조업",
      "children": [
        {
          "code": "18119",
          "name": "기타 인쇄업"
        }
      ]
    },
    {
      "code": "33933",
      "name": "표구처리업",
      "children": []
    },
    {
      "code": "33934",
      "name": "교시용 모형 제조업",
      "children": [
        {
          "code": "33932",
          "name": "전시용 모형 제조업"
        }
      ]
    },
    {
      "code": "3399",
      "name": "그 외 기타 분류 안된 제품 제조업",
      "children": []
    },
    {
      "code": "3399",
      "name": "그외 기타 분류안된 제품 제조업",
      "children": [
        {
          "code": "3199",
          "name": "그 외 기타 분류 안된 운송장비 제조업"
        }
      ]
    },
    {
      "code": "33991",
      "name": "단추 및 유사 파스너 제조업",
      "children": []
    },
    {
      "code": "33991",
      "name": "우산 및 지팡이 제조업",
      "children": [
        {
          "code": "33999",
          "name": "그 외 기타 달리 분류되지 않은 제품 제조업"
        }
      ]
    },
    {
      "code": "33992",
      "name": "단추 및 유사 파스너 제조업",
      "children": [
        {
          "code": "33991",
          "name": "단추 및 유사 파스너 제조업"
        }
      ]
    },
    {
      "code": "33992",
      "name": "라이터, 연소물 및 흡연용품 제조업",
      "children": []
    },
    {
      "code": "33993",
      "name": "라이터, 연소물 및 흡연용품 제조업",
      "children": [
        {
          "code": "33992",
          "name": "라이터, 연소물 및 흡연용품 제조업"
        }
      ]
    },
    {
      "code": "33993",
      "name": "비 및 솔 제조업",
      "children": []
    },
    {
      "code": "33994",
      "name": "비 및 솔 제조업",
      "children": [
        {
          "code": "33993",
          "name": "비 및 솔 제조업"
        }
      ]
    },
    {
      "code": "33999",
      "name": "그 외 기타 달리 분류되지 않은 제품 제조업",
      "children": []
    },
    {
      "code": "33999",
      "name": "그외 기타 달리 분류되지 않은 제품 제조업",
      "children": [
        {
          "code": "31991",
          "name": "자전거 및 환자용 차량 제조업"
        }
      ]
    },
    {
      "code": "34",
      "name": "산업용 기계 및 장비 수리업",
      "children": []
    },
    {
      "code": "340",
      "name": "산업용 기계 및 장비 수리업",
      "children": []
    },
    {
      "code": "3401",
      "name": "일반 기계류 수리업",
      "children": []
    },
    {
      "code": "34011",
      "name": "건설·광업용 기계 및 장비 수리업",
      "children": []
    },
    {
      "code": "34019",
      "name": "기타 일반 기계 및 장비 수리업",
      "children": []
    },
    {
      "code": "3402",
      "name": "전기·전자 및 정밀기기 수리업",
      "children": []
    },
    {
      "code": "34020",
      "name": "전기·전자 및 정밀기기 수리업",
      "children": []
    },
    {
      "code": "35",
      "name": "전기, 가스, 증기 및 공기조절 공급업",
      "children": []
    },
    {
      "code": "351",
      "name": "전기업",
      "children": []
    },
    {
      "code": "3511",
      "name": "발전업",
      "children": []
    },
    {
      "code": "35111",
      "name": "원자력 발전업",
      "children": []
    },
    {
      "code": "35112",
      "name": "수력 발전업",
      "children": []
    },
    {
      "code": "35113",
      "name": "화력 발전업",
      "children": []
    },
    {
      "code": "35114",
      "name": "태양력 발전업",
      "children": []
    },
    {
      "code": "35119",
      "name": "기타 발전업",
      "children": [
        {
          "code": "35115",
          "name": "풍력 발전업"
        },
        {
          "code": "35114",
          "name": "태양력 발전업"
        }
      ]
    },
    {
      "code": "3512",
      "name": "송전 및 배전업",
      "children": [
        {
          "code": "3513",
          "name": "전기 판매업"
        }
      ]
    },
    {
      "code": "35120",
      "name": "송전 및 배전업",
      "children": [
        {
          "code": "35130",
          "name": "전기 판매업"
        }
      ]
    },
    {
      "code": "3513",
      "name": "전기 판매업",
      "children": []
    },
    {
      "code": "35130",
      "name": "전기 판매업",
      "children": []
    },
    {
      "code": "352",
      "name": "가스 제조 및 배관공급업",
      "children": []
    },
    {
      "code": "352",
      "name": "연료용 가스 제조 및 배관공급업",
      "children": []
    },
    {
      "code": "3520",
      "name": "가스 제조 및 배관공급업",
      "children": []
    },
    {
      "code": "3520",
      "name": "연료용 가스 제조 및 배관공급업",
      "children": []
    },
    {
      "code": "35200",
      "name": "가스 제조 및 배관공급업",
      "children": []
    },
    {
      "code": "35200",
      "name": "연료용 가스 제조 및 배관공급업",
      "children": []
    },
    {
      "code": "353",
      "name": "증기, 냉·온수 및 공기조절 공급업",
      "children": []
    },
    {
      "code": "353",
      "name": "증기, 냉온수 및 공기조절 공급업",
      "children": []
    },
    {
      "code": "3530",
      "name": "증기, 냉·온수 및 공기조절 공급업",
      "children": []
    },
    {
      "code": "3530",
      "name": "증기, 냉온수 및 공기조절 공급업",
      "children": []
    },
    {
      "code": "35300",
      "name": "증기, 냉·온수 및 공기조절 공급업",
      "children": []
    },
    {
      "code": "35300",
      "name": "증기, 냉온수 및 공기조절 공급업",
      "children": []
    },
    {
      "code": "36",
      "name": "수도사업",
      "children": []
    },
    {
      "code": "36",
      "name": "수도업",
      "children": []
    },
    {
      "code": "360",
      "name": "수도사업",
      "children": []
    },
    {
      "code": "360",
      "name": "수도업",
      "children": []
    },
    {
      "code": "3601",
      "name": "생활용수 공급업",
      "children": []
    },
    {
      "code": "36010",
      "name": "생활용수 공급업",
      "children": []
    },
    {
      "code": "3602",
      "name": "산업용수 공급업",
      "children": []
    },
    {
      "code": "36020",
      "name": "산업용수 공급업",
      "children": []
    },
    {
      "code": "37",
      "name": "하수, 폐수 및 분뇨 처리업",
      "children": []
    },
    {
      "code": "370",
      "name": "하수, 폐수 및 분뇨 처리업",
      "children": []
    },
    {
      "code": "3701",
      "name": "하수 및 폐수 처리업",
      "children": []
    },
    {
      "code": "37011",
      "name": "하수 처리업",
      "children": []
    },
    {
      "code": "37012",
      "name": "폐수 처리업",
      "children": []
    },
    {
      "code": "3702",
      "name": "분뇨 및 축산분뇨 처리업",
      "children": []
    },
    {
      "code": "3702",
      "name": "분뇨 처리업",
      "children": []
    },
    {
      "code": "37021",
      "name": "분뇨 처리업",
      "children": []
    },
    {
      "code": "37021",
      "name": "사람 분뇨 처리업",
      "children": []
    },
    {
      "code": "37022",
      "name": "축산 분뇨 처리업",
      "children": []
    },
    {
      "code": "37022",
      "name": "축산분뇨 처리업",
      "children": []
    },
    {
      "code": "38",
      "name": "폐기물 수집, 운반, 처리 및 원료 재생업",
      "children": []
    },
    {
      "code": "38",
      "name": "폐기물 수집운반, 처리 및 원료재생업",
      "children": []
    },
    {
      "code": "381",
      "name": "폐기물 수집, 운반업",
      "children": []
    },
    {
      "code": "381",
      "name": "폐기물 수집운반업",
      "children": []
    },
    {
      "code": "3811",
      "name": "지정 외 폐기물 수집, 운반업",
      "children": []
    },
    {
      "code": "3811",
      "name": "지정외 폐기물 수집운반업",
      "children": []
    },
    {
      "code": "38110",
      "name": "지정 외 폐기물 수집, 운반업",
      "children": []
    },
    {
      "code": "38110",
      "name": "지정외 폐기물 수집운반업",
      "children": []
    },
    {
      "code": "3812",
      "name": "지정 폐기물 수집, 운반업",
      "children": []
    },
    {
      "code": "3812",
      "name": "지정 폐기물 수집운반업",
      "children": []
    },
    {
      "code": "38120",
      "name": "지정 폐기물 수집, 운반업",
      "children": []
    },
    {
      "code": "38120",
      "name": "지정 폐기물 수집운반업",
      "children": []
    },
    {
      "code": "3813",
      "name": "건설 폐기물 수집, 운반업",
      "children": []
    },
    {
      "code": "3813",
      "name": "건설 폐기물 수집운반업",
      "children": []
    },
    {
      "code": "38130",
      "name": "건설 폐기물 수집, 운반업",
      "children": []
    },
    {
      "code": "38130",
      "name": "건설 폐기물 수집운반업",
      "children": []
    },
    {
      "code": "382",
      "name": "폐기물 처리업",
      "children": []
    },
    {
      "code": "3821",
      "name": "지정 외 폐기물 처리업",
      "children": []
    },
    {
      "code": "3821",
      "name": "지정외 폐기물 처리업",
      "children": []
    },
    {
      "code": "38210",
      "name": "지정 외 폐기물 처리업",
      "children": []
    },
    {
      "code": "38210",
      "name": "지정외 폐기물 처리업",
      "children": []
    },
    {
      "code": "3822",
      "name": "지정 폐기물 처리업",
      "children": []
    },
    {
      "code": "38220",
      "name": "지정 폐기물 처리업",
      "children": []
    },
    {
      "code": "3823",
      "name": "건설 폐기물 처리업",
      "children": []
    },
    {
      "code": "38230",
      "name": "건설 폐기물 처리업",
      "children": []
    },
    {
      "code": "3824",
      "name": "방사성 폐기물 수집, 운반 및 처리업",
      "children": []
    },
    {
      "code": "3824",
      "name": "방사성 폐기물 수집운반 및 처리업",
      "children": []
    },
    {
      "code": "38240",
      "name": "방사성 폐기물 수집, 운반 및 처리업",
      "children": []
    },
    {
      "code": "38240",
      "name": "방사성 폐기물 수집운반 및 처리업",
      "children": []
    },
    {
      "code": "383",
      "name": "금속 및 비금속 원료 재생업",
      "children": []
    },
    {
      "code": "383",
      "name": "해체, 선별 및 원료 재생업",
      "children": []
    },
    {
      "code": "3830",
      "name": "금속 및 비금속 원료 재생업",
      "children": [
        {
          "code": "3831",
          "name": "금속류 해체, 선별 및 원료 재생업"
        },
        {
          "code": "3832",
          "name": "비금속류 해체, 선별 및 원료 재생업"
        }
      ]
    },
    {
      "code": "38301",
      "name": "금속원료 재생업",
      "children": [
        {
          "code": "38311",
          "name": "금속류 해체 및 선별업"
        },
        {
          "code": "38312",
          "name": "금속류 원료 재생업"
        }
      ]
    },
    {
      "code": "38302",
      "name": "비금속원료 재생업",
      "children": [
        {
          "code": "38321",
          "name": "비금속류 해체 및 선별업"
        },
        {
          "code": "38322",
          "name": "비금속류 원료 재생업"
        }
      ]
    },
    {
      "code": "3831",
      "name": "금속류 해체, 선별 및 원료 재생업",
      "children": []
    },
    {
      "code": "38311",
      "name": "금속류 해체 및 선별업",
      "children": []
    },
    {
      "code": "38312",
      "name": "금속류 원료 재생업",
      "children": []
    },
    {
      "code": "3832",
      "name": "비금속류 해체, 선별 및 원료 재생업",
      "children": []
    },
    {
      "code": "38321",
      "name": "비금속류 해체 및 선별업",
      "children": []
    },
    {
      "code": "38322",
      "name": "비금속류 원료 재생업",
      "children": []
    },
    {
      "code": "39",
      "name": "환경 정화 및 복원업",
      "children": []
    },
    {
      "code": "390",
      "name": "환경 정화 및 복원업",
      "children": []
    },
    {
      "code": "3900",
      "name": "환경 정화 및 복원업",
      "children": []
    },
    {
      "code": "39001",
      "name": "토양 및 지하수 정화업",
      "children": []
    },
    {
      "code": "39009",
      "name": "기타 환경 정화 및 복원업",
      "children": []
    },
    {
      "code": "41",
      "name": "종합 건설업",
      "children": [
        {
          "code": "42",
          "name": "전문직별 공사업"
        }
      ]
    },
    {
      "code": "411",
      "name": "건물 건설업",
      "children": []
    },
    {
      "code": "4111",
      "name": "주거용 건물 건설업",
      "children": []
    },
    {
      "code": "41111",
      "name": "단독 및 연립주택 건설업",
      "children": [
        {
          "code": "41119",
          "name": "기타 공동 주택 건설업"
        }
      ]
    },
    {
      "code": "41111",
      "name": "단독 주택 건설업",
      "children": []
    },
    {
      "code": "41112",
      "name": "아파트 건설업",
      "children": []
    },
    {
      "code": "41119",
      "name": "기타 공동 주택 건설업",
      "children": []
    },
    {
      "code": "4112",
      "name": "비주거용 건물 건설업",
      "children": []
    },
    {
      "code": "41121",
      "name": "사무 및 상업용 건물 건설업",
      "children": [
        {
          "code": "41129",
          "name": "기타 비주거용 건물 건설업"
        }
      ]
    },
    {
      "code": "41121",
      "name": "사무·상업용 및 공공기관용 건물 건설업",
      "children": []
    },
    {
      "code": "41122",
      "name": "공업 및 유사 산업용 건물 건설업",
      "children": [
        {
          "code": "41129",
          "name": "기타 비주거용 건물 건설업"
        }
      ]
    },
    {
      "code": "41122",
      "name": "제조업 및 유사 산업용 건물 건설업",
      "children": []
    },
    {
      "code": "41129",
      "name": "기타 비주거용 건물 건설업",
      "children": []
    },
    {
      "code": "412",
      "name": "토목 건설업",
      "children": [
        {
          "code": "421",
          "name": "기반조성 및 시설물 축조관련 전문공사업"
        }
      ]
    },
    {
      "code": "4121",
      "name": "지반조성 건설업",
      "children": []
    },
    {
      "code": "41210",
      "name": "지반조성 건설업",
      "children": []
    },
    {
      "code": "4122",
      "name": "토목시설물 건설업",
      "children": [
        {
          "code": "4121",
          "name": "지반조성 건설업"
        },
        {
          "code": "4213",
          "name": "시설물 축조 관련 전문공사업"
        }
      ]
    },
    {
      "code": "41221",
      "name": "도로 건설업",
      "children": []
    },
    {
      "code": "41222",
      "name": "교량, 터널 및 철도 건설업",
      "children": [
        {
          "code": "41229",
          "name": "기타 토목 시설물 건설업"
        }
      ]
    },
    {
      "code": "41223",
      "name": "수로, 댐 및 급 · 배수시설 건설업",
      "children": [
        {
          "code": "41210",
          "name": "지반조성 건설업"
        },
        {
          "code": "42136",
          "name": "수중 공사업"
        }
      ]
    },
    {
      "code": "41223",
      "name": "항만, 수로, 댐 및 유사 구조물 건설업",
      "children": []
    },
    {
      "code": "41224",
      "name": "폐기물처리 및 오염방지시설 건설업",
      "children": []
    },
    {
      "code": "41224",
      "name": "환경설비 건설업",
      "children": []
    },
    {
      "code": "41225",
      "name": "산업생산시설 종합건설업",
      "children": []
    },
    {
      "code": "41225",
      "name": "산업플랜트 건설업",
      "children": []
    },
    {
      "code": "41226",
      "name": "조경 건설업",
      "children": []
    },
    {
      "code": "41229",
      "name": "기타 토목시설물 건설업",
      "children": []
    },
    {
      "code": "42",
      "name": "전문직별 공사업",
      "children": [
        {
          "code": "41",
          "name": "종합 건설업"
        }
      ]
    },
    {
      "code": "421",
      "name": "기반조성 및 시설물 축조관련 전문공사업",
      "children": [
        {
          "code": "412",
          "name": "토목 건설업"
        },
        {
          "code": "425",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "4211",
      "name": "건물 및 구축물 해체 공사업",
      "children": [
        {
          "code": "4250",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42110",
      "name": "건물 및 구축물 해체 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "4212",
      "name": "기반조성 관련 전문공사업",
      "children": [
        {
          "code": "4122",
          "name": "토목 시설물 건설업"
        },
        {
          "code": "4250",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42121",
      "name": "토공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42122",
      "name": "보링, 그라우팅 및 관정 공사업",
      "children": []
    },
    {
      "code": "42122",
      "name": "보링, 그라우팅 및 굴정 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42123",
      "name": "파일공사 및 축조관련 기초 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42129",
      "name": "기타 기반조성 관련 전문공사업",
      "children": [
        {
          "code": "41223",
          "name": "항만, 수로, 댐 및 유사 구조물 건설업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "4213",
      "name": "시설물 축조 관련 전문공사업",
      "children": [
        {
          "code": "4219",
          "name": "기타 시설물 축조 관련 전문공사업"
        },
        {
          "code": "4250",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42131",
      "name": "철골 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42131",
      "name": "철골 및 관련 구조물 공사업",
      "children": []
    },
    {
      "code": "42132",
      "name": "철근 및 철근콘크리트 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42132",
      "name": "콘크리트 및 철근 공사업",
      "children": []
    },
    {
      "code": "42133",
      "name": "조적 및 석 공사업",
      "children": [
        {
          "code": "42191",
          "name": "조적 및 석 공사업"
        }
      ]
    },
    {
      "code": "42133",
      "name": "조적 및 석축 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42134",
      "name": "포장 공사업",
      "children": [
        {
          "code": "42192",
          "name": "포장 공사업"
        },
        {
          "code": "42132",
          "name": "콘크리트 및 철근 공사업"
        },
        {
          "code": "42133",
          "name": "조적 및 석공사업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42135",
      "name": "철도궤도 전문공사업",
      "children": [
        {
          "code": "42193",
          "name": "철도궤도 전문공사업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42136",
      "name": "수중 공사업",
      "children": [
        {
          "code": "42194",
          "name": "수중 공사업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42137",
      "name": "비계 및 형틀 공사업",
      "children": [
        {
          "code": "42195",
          "name": "비계 및 형틀 공사업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42138",
      "name": "지붕, 내·외벽 축조 관련 전문 공사업",
      "children": [
        {
          "code": "42196",
          "name": "지붕, 내·외벽 축조 관련 전문 공사업"
        }
      ]
    },
    {
      "code": "42139",
      "name": "기타 시설물 축조관련 전문공사업",
      "children": [
        {
          "code": "42138",
          "name": "지붕, 내ㆍ외벽 축조 관련 전문공사업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42139",
      "name": "기타 옥외 시설물 축조 관련 전문공사업",
      "children": [
        {
          "code": "42199",
          "name": "기타 옥외 시설물 축조 관련 전문공사업"
        }
      ]
    },
    {
      "code": "422",
      "name": "건물설비 설치 공사업",
      "children": [
        {
          "code": "421",
          "name": "기반조성 및 시설물 축조관련 전문공사업"
        },
        {
          "code": "425",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "4220",
      "name": "건물설비 설치 공사업",
      "children": [
        {
          "code": "4213",
          "name": "시설물 축조 관련 전문공사업"
        },
        {
          "code": "4250",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42201",
      "name": "배관 및 냉·난방 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42201",
      "name": "배관 및 냉ㆍ난방 공사업",
      "children": []
    },
    {
      "code": "42202",
      "name": "건물용 기계·장비 설치 공사업",
      "children": [
        {
          "code": "42203",
          "name": "승강설비 설치 공사업"
        }
      ]
    },
    {
      "code": "42202",
      "name": "건물용 기계장비 설치 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42203",
      "name": "방음 및 내화 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42203",
      "name": "방음, 방진 및 내화 공사업",
      "children": [
        {
          "code": "42204",
          "name": "방음, 방진 및 내화 공사업"
        }
      ]
    },
    {
      "code": "42204",
      "name": "소방시설 공사업",
      "children": [
        {
          "code": "42205",
          "name": "소방시설 공사업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42209",
      "name": "기타 건물 관련설비 설치 공사업",
      "children": []
    },
    {
      "code": "42209",
      "name": "기타 건물설비 설치 공사업",
      "children": [
        {
          "code": "42139",
          "name": "기타 옥외 시설물 축조관련 전문공사업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "423",
      "name": "전기 및 통신 공사업",
      "children": [
        {
          "code": "425",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "4231",
      "name": "전기 공사업",
      "children": [
        {
          "code": "4250",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42311",
      "name": "일반전기 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42312",
      "name": "내부 전기배선 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "4232",
      "name": "통신 공사업",
      "children": [
        {
          "code": "4231",
          "name": "전기 공사업"
        },
        {
          "code": "4250",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42321",
      "name": "일반 통신 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42322",
      "name": "내부 통신배선 공사업",
      "children": [
        {
          "code": "42312",
          "name": "내부 전기배선 공사업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "424",
      "name": "실내건축 및 건축마무리 공사업",
      "children": [
        {
          "code": "421",
          "name": "기반조성 및 시설물 축조관련 전문공사업"
        },
        {
          "code": "422",
          "name": "건물설비 설치 공사업"
        },
        {
          "code": "425",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "4241",
      "name": "도장, 도배 및 내장 공사업",
      "children": [
        {
          "code": "4250",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42411",
      "name": "도장 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42412",
      "name": "도배, 실내장식 및 내장 목공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "4242",
      "name": "유리 및 창호 공사업",
      "children": [
        {
          "code": "4250",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42420",
      "name": "유리 및 창호 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "4249",
      "name": "기타 건축마무리 공사업",
      "children": [
        {
          "code": "4213",
          "name": "시설물 축조 관련 전문공사업"
        },
        {
          "code": "4220",
          "name": "건물설비 설치 공사업"
        },
        {
          "code": "4250",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42491",
      "name": "미장, 타일 및 방수 공사업",
      "children": [
        {
          "code": "42139",
          "name": "기타 옥외 시설물 축조관련 전문공사업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42492",
      "name": "건물용 금속공작물 설치 공사업",
      "children": [
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "42499",
      "name": "그 외 기타 건축 마무리 공사업",
      "children": []
    },
    {
      "code": "42499",
      "name": "그외 기타 건축마무리 공사업",
      "children": [
        {
          "code": "42209",
          "name": "기타 건물 관련설비 설치 공사업"
        },
        {
          "code": "42500",
          "name": "시설물 유지관리 공사업"
        }
      ]
    },
    {
      "code": "425",
      "name": "건설장비 운영업",
      "children": [
        {
          "code": "426",
          "name": "건설장비 운영업"
        }
      ]
    },
    {
      "code": "425",
      "name": "시설물 유지관리 공사업",
      "children": []
    },
    {
      "code": "4250",
      "name": "건설장비 운영업",
      "children": [
        {
          "code": "4260",
          "name": "건설장비 운영업"
        }
      ]
    },
    {
      "code": "4250",
      "name": "시설물 유지관리 공사업",
      "children": []
    },
    {
      "code": "42500",
      "name": "건설장비 운영업",
      "children": [
        {
          "code": "42600",
          "name": "건설장비 운영업"
        }
      ]
    },
    {
      "code": "42500",
      "name": "시설물 유지관리 공사업",
      "children": []
    },
    {
      "code": "426",
      "name": "건설장비 운영업",
      "children": []
    },
    {
      "code": "4260",
      "name": "건설장비 운영업",
      "children": []
    },
    {
      "code": "42600",
      "name": "건설장비 운영업",
      "children": []
    },
    {
      "code": "45",
      "name": "자동차 및 부품 판매업",
      "children": []
    },
    {
      "code": "451",
      "name": "자동차 판매업",
      "children": []
    },
    {
      "code": "4511",
      "name": "자동차 신품 판매업",
      "children": []
    },
    {
      "code": "45110",
      "name": "자동차 신품 판매업",
      "children": []
    },
    {
      "code": "4512",
      "name": "중고 자동차 판매업",
      "children": []
    },
    {
      "code": "45120",
      "name": "중고 자동차 판매업",
      "children": []
    },
    {
      "code": "452",
      "name": "자동차 부품 및 내장품 판매업",
      "children": []
    },
    {
      "code": "4521",
      "name": "자동차 신품 부품 및 내장품 판매업",
      "children": []
    },
    {
      "code": "4521",
      "name": "자동차신품 부품 및 내장품 판매업",
      "children": []
    },
    {
      "code": "45211",
      "name": "자동차 신품 타이어 및 튜브 판매업",
      "children": []
    },
    {
      "code": "45211",
      "name": "자동차 타이어 및 튜브 판매업",
      "children": []
    },
    {
      "code": "45212",
      "name": "자동차용 전용 신품 부품 판매업",
      "children": []
    },
    {
      "code": "45213",
      "name": "자동차 내장용 신품 전기·전자· 정밀 기기 판매업",
      "children": []
    },
    {
      "code": "45219",
      "name": "기타 자동차 신품 부품 및 내장품 판매업",
      "children": []
    },
    {
      "code": "45219",
      "name": "기타 자동차신품 부품 및 내장품 판매업",
      "children": [
        {
          "code": "45212",
          "name": "자동차용 전용 신품 부품 판매업"
        },
        {
          "code": "45213",
          "name": "자동차 내장용 신품 전기ㆍ전자ㆍ정밀기기 판매업"
        }
      ]
    },
    {
      "code": "4522",
      "name": "자동차 중고 부품 및 내장품 판매업",
      "children": []
    },
    {
      "code": "4522",
      "name": "자동차중고 부품 및 내장품 판매업",
      "children": []
    },
    {
      "code": "45220",
      "name": "자동차 중고 부품 및 내장품 판매업",
      "children": []
    },
    {
      "code": "45220",
      "name": "자동차중고 부품 및 내장품 판매업",
      "children": []
    },
    {
      "code": "453",
      "name": "모터사이클 및 부품 판매업",
      "children": [
        {
          "code": "451",
          "name": "자동차 판매업"
        }
      ]
    },
    {
      "code": "4530",
      "name": "모터사이클 및 부품 판매업",
      "children": [
        {
          "code": "4511",
          "name": "자동차 신품 판매업"
        }
      ]
    },
    {
      "code": "45301",
      "name": "모터사이클 및 부품 도매업",
      "children": [
        {
          "code": "45110",
          "name": "자동차 신품 판매업"
        }
      ]
    },
    {
      "code": "45302",
      "name": "모터사이클 및 부품 소매업",
      "children": [
        {
          "code": "45110",
          "name": "자동차 신품 판매업"
        }
      ]
    },
    {
      "code": "46",
      "name": "도매 및 상품 중개업",
      "children": []
    },
    {
      "code": "46",
      "name": "도매 및 상품중개업",
      "children": []
    },
    {
      "code": "461",
      "name": "상품 중개업",
      "children": []
    },
    {
      "code": "4610",
      "name": "상품 중개업",
      "children": []
    },
    {
      "code": "46101",
      "name": "산업용 농·축산물, 섬유 원료 및 동물 중개업",
      "children": []
    },
    {
      "code": "46101",
      "name": "산업용 농축산물 및 산동물 중개업",
      "children": []
    },
    {
      "code": "46102",
      "name": "음·식료품 및 담배 중개업",
      "children": []
    },
    {
      "code": "46102",
      "name": "음ㆍ식료품 및 담배 중개업",
      "children": []
    },
    {
      "code": "46103",
      "name": "섬유, 의복, 신발 및 가죽제품 중개업",
      "children": []
    },
    {
      "code": "46104",
      "name": "기계장비 중개업",
      "children": [
        {
          "code": "46106",
          "name": "기계 및 장비 중개업"
        }
      ]
    },
    {
      "code": "46104",
      "name": "목재 및 건축자재 중개업",
      "children": []
    },
    {
      "code": "46105",
      "name": "상품종합 중개업",
      "children": [
        {
          "code": "46104",
          "name": "목재 및 건축자재 중개업"
        },
        {
          "code": "46106",
          "name": "기계 및 장비 중개업"
        },
        {
          "code": "46109",
          "name": "상품 종합 중개업"
        }
      ]
    },
    {
      "code": "46105",
      "name": "연료, 광물, 1차 금속, 비료 및 화학제품 중개업",
      "children": []
    },
    {
      "code": "46106",
      "name": "기계 및 장비 중개업",
      "children": []
    },
    {
      "code": "46107",
      "name": "그 외 기타 특정 상품 중개업",
      "children": []
    },
    {
      "code": "46109",
      "name": "기타 상품 중개업",
      "children": [
        {
          "code": "46104",
          "name": "목재 및 건축자재 중개업"
        },
        {
          "code": "46105",
          "name": "연료, 광물, 1차 금속, 비료 및 화학제품 중개업"
        },
        {
          "code": "46106",
          "name": "기계 및 장비 중개업"
        },
        {
          "code": "46107",
          "name": "그 외 기타 특정 상품 중개업"
        }
      ]
    },
    {
      "code": "46109",
      "name": "상품 종합 중개업",
      "children": []
    },
    {
      "code": "462",
      "name": "산업용 농·축산물 및 동·식물 도매업",
      "children": []
    },
    {
      "code": "462",
      "name": "산업용 농축산물 및 산동물 도매업",
      "children": []
    },
    {
      "code": "4620",
      "name": "산업용 농·축산물 및 동·식물 도매업",
      "children": []
    },
    {
      "code": "4620",
      "name": "산업용 농축산물 및 산동물 도매업",
      "children": []
    },
    {
      "code": "46201",
      "name": "곡물 도매업",
      "children": [
        {
          "code": "46204",
          "name": "화훼류 및 식물 도매업"
        }
      ]
    },
    {
      "code": "46201",
      "name": "곡물 및 유지작물 도매업",
      "children": []
    },
    {
      "code": "46202",
      "name": "종자 및 묘목 도매업",
      "children": []
    },
    {
      "code": "46203",
      "name": "사료 도매업",
      "children": []
    },
    {
      "code": "46204",
      "name": "화초 및 산식물 도매업",
      "children": []
    },
    {
      "code": "46204",
      "name": "화훼류 및 식물 도매업",
      "children": []
    },
    {
      "code": "46205",
      "name": "산동물 도매업",
      "children": []
    },
    {
      "code": "46205",
      "name": "육지동물 및 애완동물 도매업",
      "children": []
    },
    {
      "code": "46209",
      "name": "기타 산업용 농산물 도매업",
      "children": []
    },
    {
      "code": "46209",
      "name": "기타 산업용 농산물 및 산동물 도매업",
      "children": []
    },
    {
      "code": "463",
      "name": "음·식료품 및 담배 도매업",
      "children": [
        {
          "code": "462",
          "name": "산업용 농ㆍ축산물 및 동ㆍ식물 도매업"
        },
        {
          "code": "467",
          "name": "기타 전문 도매업"
        }
      ]
    },
    {
      "code": "463",
      "name": "음ㆍ식료품 및 담배 도매업",
      "children": []
    },
    {
      "code": "4631",
      "name": "비가공 식품 도매업",
      "children": [
        {
          "code": "4620",
          "name": "산업용 농ㆍ축산물 및 동ㆍ식물 도매업"
        },
        {
          "code": "4673",
          "name": "화학 물질 및 화학제품 도매업"
        }
      ]
    },
    {
      "code": "4631",
      "name": "신선식품 및 단순 가공식품 도매업",
      "children": []
    },
    {
      "code": "46311",
      "name": "과실 및 채소 도매업",
      "children": [
        {
          "code": "46312",
          "name": "채소류, 서류 및 향신작물류 도매업"
        }
      ]
    },
    {
      "code": "46311",
      "name": "과실류 도매업",
      "children": []
    },
    {
      "code": "46312",
      "name": "육류 도매업",
      "children": [
        {
          "code": "46313",
          "name": "육류 도매업"
        }
      ]
    },
    {
      "code": "46312",
      "name": "채소류, 서류 및 향신작물류 도매업",
      "children": []
    },
    {
      "code": "46313",
      "name": "수산물 도매업",
      "children": [
        {
          "code": "46205",
          "name": "육지 동물 및 애완 동물 도매업"
        },
        {
          "code": "46314",
          "name": "건어물 및 젓갈류 도매업"
        },
        {
          "code": "46315",
          "name": "신선, 냉동 및 기타 수산물 도매업"
        }
      ]
    },
    {
      "code": "46313",
      "name": "육류 도매업",
      "children": []
    },
    {
      "code": "46314",
      "name": "건어물 및 젓갈류 도매업",
      "children": []
    },
    {
      "code": "46315",
      "name": "신선, 냉동 및 기타 수산물 도매업",
      "children": []
    },
    {
      "code": "46319",
      "name": "기타 비가공 식품 도매업",
      "children": [
        {
          "code": "46209",
          "name": "기타 산업용 농산물 도매업"
        },
        {
          "code": "46739",
          "name": "기타 화학 물질 및 화학제품 도매업"
        }
      ]
    },
    {
      "code": "46319",
      "name": "기타 신선식품 및 단순 가공식품 도매업",
      "children": []
    },
    {
      "code": "4632",
      "name": "가공식품 도매업",
      "children": []
    },
    {
      "code": "46321",
      "name": "육류 가공식품 도매업",
      "children": []
    },
    {
      "code": "46322",
      "name": "수산물 가공식품 도매업",
      "children": []
    },
    {
      "code": "46323",
      "name": "빵 및 과자 도매업",
      "children": []
    },
    {
      "code": "46323",
      "name": "빵류, 과자류, 당류, 초콜릿 도매업",
      "children": []
    },
    {
      "code": "46324",
      "name": "낙농품 도매업",
      "children": []
    },
    {
      "code": "46324",
      "name": "낙농품 및 동·식물성 유지 도매업",
      "children": []
    },
    {
      "code": "46325",
      "name": "커피 및 차류 도매업",
      "children": []
    },
    {
      "code": "46326",
      "name": "조미료 도매업",
      "children": []
    },
    {
      "code": "46329",
      "name": "기타 가공식품 도매업",
      "children": [
        {
          "code": "46324",
          "name": "낙농품 및 동ㆍ식물성 유지 도매업"
        },
        {
          "code": "46325",
          "name": "커피 및 차류 도매업"
        },
        {
          "code": "46326",
          "name": "조미료 도매업"
        }
      ]
    },
    {
      "code": "4633",
      "name": "음료 및 담배 도매업",
      "children": []
    },
    {
      "code": "46331",
      "name": "주류 도매업",
      "children": []
    },
    {
      "code": "46332",
      "name": "비알코올음료 도매업",
      "children": []
    },
    {
      "code": "46332",
      "name": "비알콜음료 도매업",
      "children": []
    },
    {
      "code": "46333",
      "name": "담배 도매업",
      "children": []
    },
    {
      "code": "464",
      "name": "가정용품 도매업",
      "children": [
        {
          "code": "465",
          "name": "기계장비 및 관련 물품 도매업"
        },
        {
          "code": "467",
          "name": "기타 전문 도매업"
        }
      ]
    },
    {
      "code": "464",
      "name": "생활용품 도매업",
      "children": []
    },
    {
      "code": "4641",
      "name": "가정용 섬유, 의복 및 의복액세서리 도매업",
      "children": []
    },
    {
      "code": "4641",
      "name": "생활용 섬유제품, 의복, 의복 액세 서리 및 모피제품 도매업",
      "children": []
    },
    {
      "code": "46411",
      "name": "가정용 섬유 및 실 도매업",
      "children": []
    },
    {
      "code": "46411",
      "name": "생활용 섬유 및 실 도매업",
      "children": []
    },
    {
      "code": "46412",
      "name": "커튼 및 침구용품 도매업",
      "children": []
    },
    {
      "code": "46413",
      "name": "남녀용 겉옷 및 셔츠 도매업",
      "children": []
    },
    {
      "code": "46413",
      "name": "셔츠 및 외의 도매업",
      "children": []
    },
    {
      "code": "46414",
      "name": "유아용 의류 도매업",
      "children": []
    },
    {
      "code": "46415",
      "name": "내의 도매업",
      "children": [
        {
          "code": "46417",
          "name": "의복 액세서리 및 모조 장신구 도매업"
        }
      ]
    },
    {
      "code": "46415",
      "name": "속옷 및 잠옷 도매업",
      "children": []
    },
    {
      "code": "46416",
      "name": "가죽 및 모피제품 도매업",
      "children": [
        {
          "code": "46417",
          "name": "의복 액세서리 및 모조 장신구 도매업"
        }
      ]
    },
    {
      "code": "46417",
      "name": "의복 액세서리 및 모조 장신구 도매업",
      "children": []
    },
    {
      "code": "46417",
      "name": "의복액세서리 및 모조장신품 도매업",
      "children": []
    },
    {
      "code": "46419",
      "name": "기타 가정용 섬유 및 직물제품 도매업",
      "children": []
    },
    {
      "code": "46419",
      "name": "기타 생활용 섬유 및 직물제품 도매업",
      "children": []
    },
    {
      "code": "4642",
      "name": "신발 도매업",
      "children": []
    },
    {
      "code": "46420",
      "name": "신발 도매업",
      "children": []
    },
    {
      "code": "4643",
      "name": "생활용 가구, 조명기구 및 비전기식 생활용 기기 도매업",
      "children": []
    },
    {
      "code": "4643",
      "name": "조명기구, 가정용 가구 및 비전기식 가정용기기 도매업",
      "children": [
        {
          "code": "4646",
          "name": "음반 및 비디오물, 악기, 오락 및 경기용품 도매업"
        },
        {
          "code": "4652",
          "name": "가전제품, 통신장비 및 부품 도매업"
        },
        {
          "code": "4659",
          "name": "기타 기계 및 장비 도매업"
        },
        {
          "code": "4679",
          "name": "재생용 재료 및 기타 상품 전문 도매업"
        }
      ]
    },
    {
      "code": "46431",
      "name": "가정용 가구 도매업",
      "children": []
    },
    {
      "code": "46431",
      "name": "생활용 가구 도매업",
      "children": []
    },
    {
      "code": "46432",
      "name": "전구, 램프 및 조명장치 도매업",
      "children": []
    },
    {
      "code": "46432",
      "name": "전구·램프 및 조명장치 도매업",
      "children": [
        {
          "code": "46595",
          "name": "전기용 기계ㆍ장비 및 관련 기자재 도매업"
        }
      ]
    },
    {
      "code": "46433",
      "name": "가정용 요업제품, 비전기식 주방용품 및 날붙이 도매업",
      "children": [
        {
          "code": "46521",
          "name": "가전제품 및 부품 도매업"
        }
      ]
    },
    {
      "code": "46433",
      "name": "생활용 유리ㆍ요업ㆍ목재ㆍ금속 제품 및 날붙이 도매업",
      "children": []
    },
    {
      "code": "46439",
      "name": "기타 비전기식 가정용 기기 및 기구 도매업",
      "children": [
        {
          "code": "46465",
          "name": "자전거 및 기타 운송장비 도매업"
        },
        {
          "code": "46799",
          "name": "그 외 기타 상품 전문 도매업"
        }
      ]
    },
    {
      "code": "46439",
      "name": "기타 비전기식 생활용 기기 및 기구 도매업",
      "children": []
    },
    {
      "code": "4644",
      "name": "의약품, 의료용품 및 화장품 도매업",
      "children": []
    },
    {
      "code": "46441",
      "name": "의약품 도매업",
      "children": []
    },
    {
      "code": "46442",
      "name": "의료용품 도매업",
      "children": []
    },
    {
      "code": "46443",
      "name": "화장품 도매업",
      "children": []
    },
    {
      "code": "46443",
      "name": "화장품 및 화장용품 도매업",
      "children": []
    },
    {
      "code": "46444",
      "name": "비누 및 세정제 도매업",
      "children": []
    },
    {
      "code": "4645",
      "name": "생활용 포장ㆍ위생용품, 문구용품 및 출판 인쇄물 도매업",
      "children": []
    },
    {
      "code": "4645",
      "name": "종이, 인쇄물 및 문구용품 도매업",
      "children": []
    },
    {
      "code": "46451",
      "name": "생활용 포장 및 위생용품, 봉투 및 유사 제품 도매업",
      "children": []
    },
    {
      "code": "46451",
      "name": "종이제품 도매업",
      "children": []
    },
    {
      "code": "46452",
      "name": "문구용품 도매업",
      "children": []
    },
    {
      "code": "46452",
      "name": "문구용품, 회화용품, 사무용품 도매업",
      "children": []
    },
    {
      "code": "46453",
      "name": "서적, 잡지 및 기타 인쇄물 도매업",
      "children": []
    },
    {
      "code": "46453",
      "name": "서적, 잡지 및 신문 도매업",
      "children": []
    },
    {
      "code": "4646",
      "name": "오락, 취미 및 경기용품 도매업",
      "children": []
    },
    {
      "code": "4646",
      "name": "음반 및 비디오물, 악기, 오락 및 경기용품 도매업",
      "children": []
    },
    {
      "code": "46461",
      "name": "음반 및 비디오물 도매업",
      "children": []
    },
    {
      "code": "46462",
      "name": "악기 도매업",
      "children": []
    },
    {
      "code": "46463",
      "name": "장난감 및 취미, 오락용품 도매업",
      "children": []
    },
    {
      "code": "46463",
      "name": "장난감 및 취미용품 도매업",
      "children": []
    },
    {
      "code": "46464",
      "name": "운동 및 경기용품 도매업",
      "children": []
    },
    {
      "code": "46465",
      "name": "자전거 및 기타 운송장비 도매업",
      "children": []
    },
    {
      "code": "4649",
      "name": "가방, 시계, 안경 및 기타 생활용품 도매업",
      "children": []
    },
    {
      "code": "4649",
      "name": "기타 가정용품 도매업",
      "children": []
    },
    {
      "code": "46491",
      "name": "가방 및 보호용 케이스 도매업",
      "children": []
    },
    {
      "code": "46491",
      "name": "가방 및 여행용품 도매업",
      "children": []
    },
    {
      "code": "46492",
      "name": "시계 및 귀금속제품 도매업",
      "children": []
    },
    {
      "code": "46493",
      "name": "사진장비 및 광학용품 도매업",
      "children": []
    },
    {
      "code": "46493",
      "name": "안경, 사진장비 및 광학용품 도매업",
      "children": []
    },
    {
      "code": "46499",
      "name": "그 외 기타 생활용품 도매업",
      "children": []
    },
    {
      "code": "46499",
      "name": "그외 기타 가정용품 도매업",
      "children": []
    },
    {
      "code": "465",
      "name": "기계장비 및 관련 물품 도매업",
      "children": []
    },
    {
      "code": "4651",
      "name": "컴퓨터 및 주변장치, 소프트웨어 도매업",
      "children": []
    },
    {
      "code": "46510",
      "name": "컴퓨터 및 주변장치, 소프트웨어 도매업",
      "children": []
    },
    {
      "code": "4652",
      "name": "가전제품, 통신장비 및 부품 도매업",
      "children": []
    },
    {
      "code": "46521",
      "name": "가전제품 및 부품 도매업",
      "children": []
    },
    {
      "code": "46522",
      "name": "통신·방송장비 및 부품 도매업",
      "children": []
    },
    {
      "code": "46522",
      "name": "통신장비 및 부품 도매업",
      "children": []
    },
    {
      "code": "4653",
      "name": "산업용 기계 및 장비 도매업",
      "children": [
        {
          "code": "4659",
          "name": "기타 기계 및 장비 도매업"
        }
      ]
    },
    {
      "code": "46531",
      "name": "농림업용 기계 및 장비 도매업",
      "children": []
    },
    {
      "code": "46531",
      "name": "농업용 기계 및 장비 도매업",
      "children": []
    },
    {
      "code": "46532",
      "name": "건설·광업용 기계 및 장비 도매업",
      "children": [
        {
          "code": "46599",
          "name": "그 외 기타 기계 및 장비 도매업"
        }
      ]
    },
    {
      "code": "46532",
      "name": "건설ㆍ광업용 기계 및 장비 도매업",
      "children": []
    },
    {
      "code": "46533",
      "name": "공작기계 도매업",
      "children": [
        {
          "code": "46539",
          "name": "기타 산업용 기계 및 장비 도매업"
        }
      ]
    },
    {
      "code": "46533",
      "name": "공작용 기계 및 장비 도매업",
      "children": []
    },
    {
      "code": "46539",
      "name": "기타 산업용 기계 및 장비 도매업",
      "children": []
    },
    {
      "code": "4659",
      "name": "기타 기계 및 장비 도매업",
      "children": []
    },
    {
      "code": "46591",
      "name": "사무용 가구 및 기기 도매업",
      "children": []
    },
    {
      "code": "46592",
      "name": "의료, 정밀 및 과학기기 도매업",
      "children": [
        {
          "code": "46593",
          "name": "정밀 기기 및 과학 기기 도매업"
        }
      ]
    },
    {
      "code": "46592",
      "name": "의료기기 도매업",
      "children": []
    },
    {
      "code": "46593",
      "name": "수송용 기계 및 장비 도매업",
      "children": [
        {
          "code": "46594",
          "name": "수송용 운송장비 도매업"
        }
      ]
    },
    {
      "code": "46593",
      "name": "정밀기기 및 과학기기 도매업",
      "children": []
    },
    {
      "code": "46594",
      "name": "수송용 운송장비 도매업",
      "children": []
    },
    {
      "code": "46594",
      "name": "전기용 기계장비 및 관련 기자재 도매업",
      "children": [
        {
          "code": "46595",
          "name": "전기용 기계ㆍ장비 및 관련 기자재 도매업"
        },
        {
          "code": "46596",
          "name": "전지 및 케이블 도매업"
        }
      ]
    },
    {
      "code": "46595",
      "name": "전기용 기계·장비 및 관련 기자재 도매업",
      "children": []
    },
    {
      "code": "46596",
      "name": "전지 및 케이블 도매업",
      "children": []
    },
    {
      "code": "46599",
      "name": "그 외 기타 기계 및 장비 도매업",
      "children": []
    },
    {
      "code": "46599",
      "name": "그외 기타 기계 및 장비 도매업",
      "children": []
    },
    {
      "code": "466",
      "name": "건축자재, 철물 및 난방장치 도매업",
      "children": []
    },
    {
      "code": "4661",
      "name": "일반 건축자재 도매업",
      "children": []
    },
    {
      "code": "46611",
      "name": "원목 및 건축관련 목재품 도매업",
      "children": []
    },
    {
      "code": "46611",
      "name": "원목 및 건축관련 목제품 도매업",
      "children": []
    },
    {
      "code": "46612",
      "name": "골재, 벽돌 및 시멘트 도매업",
      "children": []
    },
    {
      "code": "46613",
      "name": "유리 및 창호 도매업",
      "children": []
    },
    {
      "code": "4662",
      "name": "냉·난방장치 및 철물, 수공구 도매업",
      "children": []
    },
    {
      "code": "4662",
      "name": "철물 및 냉·난방장치 도매업",
      "children": []
    },
    {
      "code": "46621",
      "name": "배관 및 냉·난방장치 도매업",
      "children": []
    },
    {
      "code": "46621",
      "name": "배관 및 냉ㆍ난방장치 도매업",
      "children": []
    },
    {
      "code": "46622",
      "name": "철물 및 수공구 도매업",
      "children": []
    },
    {
      "code": "46622",
      "name": "철물, 금속 파스너 및 수공구 도매업",
      "children": []
    },
    {
      "code": "4669",
      "name": "기타 건축자재 도매업",
      "children": [
        {
          "code": "4661",
          "name": "일반 건축자재 도매업"
        }
      ]
    },
    {
      "code": "46691",
      "name": "도료 도매업",
      "children": []
    },
    {
      "code": "46692",
      "name": "벽지 및 장판류 도매업",
      "children": []
    },
    {
      "code": "46699",
      "name": "그 외 기타 건축자재 도매업",
      "children": []
    },
    {
      "code": "46699",
      "name": "그외 기타 건축자재 도매업",
      "children": [
        {
          "code": "46612",
          "name": "골재, 벽돌 및 시멘트 도매업"
        }
      ]
    },
    {
      "code": "467",
      "name": "기타 전문 도매업",
      "children": []
    },
    {
      "code": "4671",
      "name": "연료 및 관련제품 도매업",
      "children": []
    },
    {
      "code": "4671",
      "name": "연료, 연료용 광물 및 관련제품 도매업",
      "children": []
    },
    {
      "code": "46711",
      "name": "고체연료 및 관련제품 도매업",
      "children": []
    },
    {
      "code": "46712",
      "name": "액체연료 및 관련제품 도매업",
      "children": []
    },
    {
      "code": "46713",
      "name": "기체연료 및 관련제품 도매업",
      "children": []
    },
    {
      "code": "4672",
      "name": "1차 금속제품 및 금속광물 도매업",
      "children": []
    },
    {
      "code": "46721",
      "name": "1차 금속제품 도매업",
      "children": []
    },
    {
      "code": "46722",
      "name": "금속광물 도매업",
      "children": []
    },
    {
      "code": "4673",
      "name": "화학물질 및 화학제품 도매업",
      "children": []
    },
    {
      "code": "46731",
      "name": "염료, 안료 및 관련제품 도매업",
      "children": []
    },
    {
      "code": "46732",
      "name": "비료 및 농약 도매업",
      "children": []
    },
    {
      "code": "46733",
      "name": "플라스틱물질 및 합성고무 도매업",
      "children": []
    },
    {
      "code": "46733",
      "name": "합성고무 및 플라스틱물질 도매업",
      "children": []
    },
    {
      "code": "46739",
      "name": "기타 화학물질 및 화학제품 도매업",
      "children": []
    },
    {
      "code": "4674",
      "name": "방직용 섬유, 사 및 직물 도매업",
      "children": []
    },
    {
      "code": "4674",
      "name": "방직용 섬유, 실 및 직물 도매업",
      "children": []
    },
    {
      "code": "46741",
      "name": "방직용 섬유 및 사 도매업",
      "children": []
    },
    {
      "code": "46741",
      "name": "방직용 섬유 및 실 도매업",
      "children": []
    },
    {
      "code": "46742",
      "name": "직물 도매업",
      "children": []
    },
    {
      "code": "4675",
      "name": "종이 원지, 판지, 종이상자 도매업",
      "children": []
    },
    {
      "code": "46750",
      "name": "종이 원지, 판지, 종이상자 도매업",
      "children": []
    },
    {
      "code": "4679",
      "name": "재생용 재료 및 기타 상품 전문 도매업",
      "children": [
        {
          "code": "4675",
          "name": "종이 원지, 판지, 종이상자 도매업"
        }
      ]
    },
    {
      "code": "46791",
      "name": "재생용 재료 수집 및 판매업",
      "children": []
    },
    {
      "code": "46799",
      "name": "그 외 기타 상품 전문 도매업",
      "children": []
    },
    {
      "code": "46799",
      "name": "그외 기타 상품 전문 도매업",
      "children": [
        {
          "code": "46750",
          "name": "종이 원지, 판지, 종이상자 도매업"
        }
      ]
    },
    {
      "code": "468",
      "name": "상품 종합 도매업",
      "children": []
    },
    {
      "code": "4680",
      "name": "상품 종합 도매업",
      "children": []
    },
    {
      "code": "46800",
      "name": "상품 종합 도매업",
      "children": []
    },
    {
      "code": "47",
      "name": "소매업; 자동차 제외",
      "children": []
    },
    {
      "code": "471",
      "name": "종합 소매업",
      "children": []
    },
    {
      "code": "4711",
      "name": "대형 종합 소매업",
      "children": [
        {
          "code": "4713",
          "name": "면세점"
        }
      ]
    },
    {
      "code": "47111",
      "name": "백화점",
      "children": []
    },
    {
      "code": "47112",
      "name": "대형 마트",
      "children": []
    },
    {
      "code": "47119",
      "name": "기타 대형 종합 소매업",
      "children": [
        {
          "code": "47112",
          "name": "대형 마트"
        },
        {
          "code": "47130",
          "name": "면세점"
        }
      ]
    },
    {
      "code": "4712",
      "name": "음·식료품 위주 종합 소매업",
      "children": []
    },
    {
      "code": "4712",
      "name": "음ㆍ식료품 위주 종합 소매업",
      "children": []
    },
    {
      "code": "47121",
      "name": "슈퍼마켓",
      "children": []
    },
    {
      "code": "47122",
      "name": "체인화 편의점",
      "children": []
    },
    {
      "code": "47129",
      "name": "기타 음·식료품 위주 종합 소매업",
      "children": []
    },
    {
      "code": "47129",
      "name": "기타 음ㆍ식료품 위주 종합 소매업",
      "children": []
    },
    {
      "code": "4713",
      "name": "면세점",
      "children": []
    },
    {
      "code": "47130",
      "name": "면세점",
      "children": []
    },
    {
      "code": "4719",
      "name": "그 외 기타 종합 소매업",
      "children": []
    },
    {
      "code": "4719",
      "name": "그외 기타 종합 소매업",
      "children": [
        {
          "code": "4713",
          "name": "면세점"
        }
      ]
    },
    {
      "code": "47190",
      "name": "그 외 기타 종합 소매업",
      "children": []
    },
    {
      "code": "47190",
      "name": "그외 기타 종합 소매업",
      "children": [
        {
          "code": "47130",
          "name": "면세점"
        }
      ]
    },
    {
      "code": "472",
      "name": "음·식료품 및 담배 소매업",
      "children": [
        {
          "code": "478",
          "name": "기타 상품 전문 소매업"
        }
      ]
    },
    {
      "code": "472",
      "name": "음ㆍ식료품 및 담배 소매업",
      "children": []
    },
    {
      "code": "4721",
      "name": "식료품 소매업",
      "children": [
        {
          "code": "4722",
          "name": "가공식품 소매업"
        },
        {
          "code": "4785",
          "name": "그 외 기타 상품 전문 소매업"
        }
      ]
    },
    {
      "code": "47211",
      "name": "곡물 소매업",
      "children": []
    },
    {
      "code": "47211",
      "name": "곡물, 곡분 및 가축 사료 소매업",
      "children": []
    },
    {
      "code": "47212",
      "name": "육류 소매업",
      "children": []
    },
    {
      "code": "47213",
      "name": "건어물 및 젓갈류 소매업",
      "children": []
    },
    {
      "code": "47213",
      "name": "수산물 소매업",
      "children": [
        {
          "code": "47214",
          "name": "신선, 냉동 및 기타 수산물 소매업"
        }
      ]
    },
    {
      "code": "47214",
      "name": "과실 및 채소 소매업",
      "children": [
        {
          "code": "47215",
          "name": "채소, 과실 및 뿌리작물 소매업"
        }
      ]
    },
    {
      "code": "47214",
      "name": "신선, 냉동 및 기타 수산물 소매업",
      "children": []
    },
    {
      "code": "47215",
      "name": "빵 및 과자류 소매업",
      "children": [
        {
          "code": "47216",
          "name": "빵류, 과자류 및 당류 소매업"
        }
      ]
    },
    {
      "code": "47215",
      "name": "채소, 과실 및 뿌리작물 소매업",
      "children": []
    },
    {
      "code": "47216",
      "name": "건강보조식품 소매업",
      "children": [
        {
          "code": "47217",
          "name": "건강 보조식품 소매업"
        }
      ]
    },
    {
      "code": "47216",
      "name": "빵류, 과자류 및 당류 소매업",
      "children": [
        {
          "code": "47221",
          "name": "빵류, 과자류 및 당류 소매업"
        }
      ]
    },
    {
      "code": "47217",
      "name": "건강보조식품 소매업",
      "children": [
        {
          "code": "47222",
          "name": "건강보조식품 소매업"
        }
      ]
    },
    {
      "code": "47218",
      "name": "조리 반찬류 소매업",
      "children": [
        {
          "code": "47223",
          "name": "조리 반찬류 소매업"
        }
      ]
    },
    {
      "code": "47219",
      "name": "기타 식료품 소매업",
      "children": [
        {
          "code": "47229",
          "name": "기타 가공식품 소매업"
        },
        {
          "code": "47218",
          "name": "조리 반찬류 소매업"
        },
        {
          "code": "47859",
          "name": "그 외 기타 분류 안된 상품 전문 소매업"
        }
      ]
    },
    {
      "code": "4722",
      "name": "음료 및 담배 소매업",
      "children": [
        {
          "code": "4723",
          "name": "음료 및 담배 소매업"
        }
      ]
    },
    {
      "code": "47221",
      "name": "음료 소매업",
      "children": [
        {
          "code": "47231",
          "name": "음료 소매업"
        }
      ]
    },
    {
      "code": "47222",
      "name": "담배 소매업",
      "children": [
        {
          "code": "47232",
          "name": "담배 소매업"
        }
      ]
    },
    {
      "code": "473",
      "name": "가전제품 및 정보통신장비 소매업",
      "children": []
    },
    {
      "code": "473",
      "name": "정보통신장비 소매업",
      "children": []
    },
    {
      "code": "4731",
      "name": "컴퓨터 및 주변장치, 소프트웨어 및 통신기기 소매업",
      "children": []
    },
    {
      "code": "47311",
      "name": "컴퓨터 및 주변장치, 소프트웨어 소매업",
      "children": []
    },
    {
      "code": "47312",
      "name": "통신기기 소매업",
      "children": []
    },
    {
      "code": "4732",
      "name": "가전제품 소매업",
      "children": []
    },
    {
      "code": "47320",
      "name": "가전제품 소매업",
      "children": []
    },
    {
      "code": "474",
      "name": "섬유, 의복, 신발 및 가죽제품 소매업",
      "children": [
        {
          "code": "475",
          "name": "기타 생활용품 소매업"
        }
      ]
    },
    {
      "code": "4741",
      "name": "섬유, 직물, 의복 및 의복액세서리 소매업",
      "children": [
        {
          "code": "4742",
          "name": "섬유, 직물 및 의복 액세서리 소매업"
        }
      ]
    },
    {
      "code": "4741",
      "name": "의복 소매업",
      "children": []
    },
    {
      "code": "47411",
      "name": "가정용 직물제품 소매업",
      "children": [
        {
          "code": "47421",
          "name": "가정용 직물제품 소매업"
        }
      ]
    },
    {
      "code": "47411",
      "name": "남자용 겉옷 소매업",
      "children": []
    },
    {
      "code": "47412",
      "name": "여자용 겉옷 소매업",
      "children": []
    },
    {
      "code": "47412",
      "name": "한복 소매업",
      "children": [
        {
          "code": "47415",
          "name": "한복 소매업"
        }
      ]
    },
    {
      "code": "47413",
      "name": "남녀용 정장 소매업",
      "children": [
        {
          "code": "47411",
          "name": "남자용 겉옷 소매업"
        },
        {
          "code": "47412",
          "name": "여자용 겉옷 소매업"
        }
      ]
    },
    {
      "code": "47413",
      "name": "속옷 및 잠옷 소매업",
      "children": []
    },
    {
      "code": "47414",
      "name": "셔츠 및 블라우스 소매업",
      "children": []
    },
    {
      "code": "47414",
      "name": "유아용 의류 소매업",
      "children": [
        {
          "code": "47417",
          "name": "유아용 의류 소매업"
        }
      ]
    },
    {
      "code": "47415",
      "name": "내의 소매업",
      "children": [
        {
          "code": "47413",
          "name": "속옷 및 잠옷 소매업"
        }
      ]
    },
    {
      "code": "47415",
      "name": "한복 소매업",
      "children": []
    },
    {
      "code": "47416",
      "name": "가죽 및 모피의복 소매업",
      "children": []
    },
    {
      "code": "47416",
      "name": "셔츠 및 기타 의복 소매업",
      "children": [
        {
          "code": "47414",
          "name": "셔츠 및 블라우스 소매업"
        },
        {
          "code": "47419",
          "name": "기타 의복 소매업"
        }
      ]
    },
    {
      "code": "47417",
      "name": "유아용 의류 소매업",
      "children": []
    },
    {
      "code": "47419",
      "name": "기타 섬유, 직물 및 의복액세서리 소매업",
      "children": [
        {
          "code": "47422",
          "name": "의복 액세서리 및 모조 장신구 소매업"
        },
        {
          "code": "47429",
          "name": "섬유 원단, 실 및 기타 섬유제품 소매업"
        }
      ]
    },
    {
      "code": "47419",
      "name": "기타 의복 소매업",
      "children": []
    },
    {
      "code": "4742",
      "name": "섬유, 직물 및 의복액세서리 소매업",
      "children": []
    },
    {
      "code": "4742",
      "name": "신발 소매업",
      "children": [
        {
          "code": "4743",
          "name": "신발 소매업"
        }
      ]
    },
    {
      "code": "47420",
      "name": "신발 소매업",
      "children": [
        {
          "code": "47430",
          "name": "신발 소매업"
        }
      ]
    },
    {
      "code": "47421",
      "name": "가정용 직물제품 소매업",
      "children": []
    },
    {
      "code": "47422",
      "name": "의복 액세서리 및 모조 장신구 소매업",
      "children": []
    },
    {
      "code": "47429",
      "name": "섬유 원단, 실 및 기타 섬유제품 소매업",
      "children": []
    },
    {
      "code": "4743",
      "name": "가방 및 기타 가죽제품 소매업",
      "children": [
        {
          "code": "4744",
          "name": "가방 및 기타 가죽제품 소매업"
        },
        {
          "code": "4759",
          "name": "그 외 기타 가정용품 소매업"
        }
      ]
    },
    {
      "code": "4743",
      "name": "신발 소매업",
      "children": []
    },
    {
      "code": "47430",
      "name": "가방 및 기타 가죽제품 소매업",
      "children": [
        {
          "code": "47440",
          "name": "가방 및 기타 가죽제품 소매업"
        },
        {
          "code": "47599",
          "name": "그 외 기타 분류 안된 가정용품 소매업"
        }
      ]
    },
    {
      "code": "47430",
      "name": "신발 소매업",
      "children": []
    },
    {
      "code": "4744",
      "name": "가방 및 기타 가죽제품 소매업",
      "children": []
    },
    {
      "code": "47440",
      "name": "가방 및 기타 가죽제품 소매업",
      "children": []
    },
    {
      "code": "475",
      "name": "기타 가정용품 소매업",
      "children": [
        {
          "code": "473",
          "name": "가전제품 및 정보 통신장비 소매업"
        },
        {
          "code": "476",
          "name": "문화, 오락 및 여가 용품 소매업"
        },
        {
          "code": "478",
          "name": "기타 상품 전문 소매업"
        }
      ]
    },
    {
      "code": "475",
      "name": "기타 생활용품 소매업",
      "children": []
    },
    {
      "code": "4751",
      "name": "철물, 공구, 창호 및 건설자재 소매업",
      "children": []
    },
    {
      "code": "4751",
      "name": "철물, 페인트, 유리 및 건설자재 소매업",
      "children": [
        {
          "code": "4759",
          "name": "그 외 기타 가정용품 소매업"
        }
      ]
    },
    {
      "code": "47511",
      "name": "철물 및 난방용구 소매업",
      "children": []
    },
    {
      "code": "47512",
      "name": "공구 소매업",
      "children": []
    },
    {
      "code": "47512",
      "name": "기계공구 소매업",
      "children": []
    },
    {
      "code": "47513",
      "name": "벽지 및 장판류 소매업",
      "children": []
    },
    {
      "code": "47513",
      "name": "벽지, 마루덮개 및 장판류 소매업",
      "children": []
    },
    {
      "code": "47519",
      "name": "페인트, 유리 및 기타 건설자재 소매업",
      "children": [
        {
          "code": "47592",
          "name": "주방용품 및 가정용 유리, 요업제품 소매업"
        }
      ]
    },
    {
      "code": "47519",
      "name": "페인트, 창호 및 기타 건설자재 소매업",
      "children": []
    },
    {
      "code": "4752",
      "name": "가구 소매업",
      "children": []
    },
    {
      "code": "47520",
      "name": "가구 소매업",
      "children": []
    },
    {
      "code": "4759",
      "name": "그 외 기타 가정용품 소매업",
      "children": []
    },
    {
      "code": "4759",
      "name": "그외 기타 가정용품 소매업",
      "children": [
        {
          "code": "4732",
          "name": "가전제품 소매업"
        },
        {
          "code": "4751",
          "name": "철물, 공구, 창호 및 건설자재 소매업"
        },
        {
          "code": "4763",
          "name": "운동용품 및 자전거 소매업"
        },
        {
          "code": "4785",
          "name": "그 외 기타 상품 전문 소매업"
        }
      ]
    },
    {
      "code": "47591",
      "name": "전기용품 및 조명장치 소매업",
      "children": []
    },
    {
      "code": "47592",
      "name": "식탁 및 주방용품 소매업",
      "children": []
    },
    {
      "code": "47592",
      "name": "주방용품 및 가정용 유리, 요업 제품 소매업",
      "children": []
    },
    {
      "code": "47593",
      "name": "악기 소매업",
      "children": []
    },
    {
      "code": "47599",
      "name": "그 외 기타 분류 안된 가정용품 소매업",
      "children": []
    },
    {
      "code": "47599",
      "name": "그외 기타 분류안된 가정용품 소매업",
      "children": [
        {
          "code": "47320",
          "name": "가전제품 소매업"
        },
        {
          "code": "47512",
          "name": "공구 소매업"
        },
        {
          "code": "47592",
          "name": "주방용품 및 가정용 유리, 요업제품 소매업"
        },
        {
          "code": "47632",
          "name": "자전거 및 기타 운송장비 소매업"
        },
        {
          "code": "47859",
          "name": "그 외 기타 분류 안된 상품 전문 소매업"
        }
      ]
    },
    {
      "code": "476",
      "name": "문화, 오락 및 여가 용품 소매업",
      "children": []
    },
    {
      "code": "4761",
      "name": "서적 및 문구용품 소매업",
      "children": []
    },
    {
      "code": "47611",
      "name": "서적 및 잡지류 소매업",
      "children": []
    },
    {
      "code": "47611",
      "name": "서적, 신문 및 잡지류 소매업",
      "children": []
    },
    {
      "code": "47612",
      "name": "문구용품 및 회화용품 소매업",
      "children": []
    },
    {
      "code": "47612",
      "name": "문구용품 소매업",
      "children": [
        {
          "code": "47611",
          "name": "서적, 신문 및 잡지류 소매업"
        }
      ]
    },
    {
      "code": "4762",
      "name": "음반 및 비디오물 소매업",
      "children": []
    },
    {
      "code": "47620",
      "name": "음반 및 비디오물 소매업",
      "children": []
    },
    {
      "code": "4763",
      "name": "스포츠용품 소매업",
      "children": []
    },
    {
      "code": "4763",
      "name": "운동용품 및 자전거 소매업",
      "children": []
    },
    {
      "code": "47631",
      "name": "운동 및 경기용품 소매업",
      "children": []
    },
    {
      "code": "47632",
      "name": "자전거 및 기타 운송장비 소매업",
      "children": []
    },
    {
      "code": "4764",
      "name": "게임용구, 인형 및 장난감 소매업",
      "children": []
    },
    {
      "code": "47640",
      "name": "게임용구, 인형 및 장난감 소매업",
      "children": []
    },
    {
      "code": "477",
      "name": "연료 소매업",
      "children": []
    },
    {
      "code": "4771",
      "name": "운송장비용 연료 소매업",
      "children": []
    },
    {
      "code": "4771",
      "name": "차량용 연료 소매업",
      "children": []
    },
    {
      "code": "47711",
      "name": "운송장비용 주유소 운영업",
      "children": []
    },
    {
      "code": "47711",
      "name": "차량용 주유소 운영업",
      "children": []
    },
    {
      "code": "47712",
      "name": "운송장비용 가스 충전업",
      "children": [
        {
          "code": "47713",
          "name": "운송장비용 기타 가스 충전업"
        }
      ]
    },
    {
      "code": "47712",
      "name": "차량용 가스 충전업",
      "children": []
    },
    {
      "code": "4772",
      "name": "가정용 연료 소매업",
      "children": []
    },
    {
      "code": "47721",
      "name": "가정용 고체연료 소매업",
      "children": []
    },
    {
      "code": "47722",
      "name": "가정용 액체연료 소매업",
      "children": []
    },
    {
      "code": "47723",
      "name": "가정용 가스연료 소매업",
      "children": []
    },
    {
      "code": "478",
      "name": "기타 상품 전문 소매업",
      "children": []
    },
    {
      "code": "4781",
      "name": "의약품, 의료용 기구, 화장품 및 방향제 소매업",
      "children": []
    },
    {
      "code": "47811",
      "name": "의약품 및 의료용품 소매업",
      "children": []
    },
    {
      "code": "47812",
      "name": "의료용 기구 소매업",
      "children": []
    },
    {
      "code": "47813",
      "name": "화장품 및 방향제 소매업",
      "children": []
    },
    {
      "code": "47813",
      "name": "화장품, 비누 및 방향제 소매업",
      "children": []
    },
    {
      "code": "4782",
      "name": "사무용 기기, 사진장비 및 정밀기기 소매업",
      "children": []
    },
    {
      "code": "4782",
      "name": "사무용 기기, 안경, 사진장비 및 정밀기기 소매업",
      "children": []
    },
    {
      "code": "47821",
      "name": "사무용 기기 소매업",
      "children": []
    },
    {
      "code": "47822",
      "name": "안경 및 렌즈 소매업",
      "children": []
    },
    {
      "code": "47822",
      "name": "안경 소매업",
      "children": []
    },
    {
      "code": "47823",
      "name": "사진기 및 사진용품 소매업",
      "children": []
    },
    {
      "code": "47829",
      "name": "기타 광학 및 정밀 기기 소매업",
      "children": []
    },
    {
      "code": "4783",
      "name": "시계 및 귀금속 소매업",
      "children": []
    },
    {
      "code": "47830",
      "name": "시계 및 귀금속 소매업",
      "children": []
    },
    {
      "code": "4784",
      "name": "예술품 및 선물용품 소매업",
      "children": []
    },
    {
      "code": "4784",
      "name": "예술품, 기념품 및 장식용품 소매업",
      "children": []
    },
    {
      "code": "47841",
      "name": "예술품 및 골동품 소매업",
      "children": []
    },
    {
      "code": "47842",
      "name": "관광 민예품 및 선물용품 소매업",
      "children": []
    },
    {
      "code": "47842",
      "name": "기념품, 관광 민예품 및 장식용품 소매업",
      "children": []
    },
    {
      "code": "4785",
      "name": "그 외 기타 상품 전문 소매업",
      "children": []
    },
    {
      "code": "4785",
      "name": "그외 기타 상품 전문 소매업",
      "children": []
    },
    {
      "code": "47851",
      "name": "화초 및 산식물 소매업",
      "children": []
    },
    {
      "code": "47851",
      "name": "화초 및 식물 소매업",
      "children": []
    },
    {
      "code": "47852",
      "name": "애완용 동물 및 관련용품 소매업",
      "children": []
    },
    {
      "code": "47859",
      "name": "그 외 기타 분류 안된 상품 전문 소매업",
      "children": []
    },
    {
      "code": "47859",
      "name": "그외 기타 분류안된 상품 전문 소매업",
      "children": []
    },
    {
      "code": "4786",
      "name": "중고 상품 소매업",
      "children": []
    },
    {
      "code": "4786",
      "name": "중고상품 소매업",
      "children": []
    },
    {
      "code": "47861",
      "name": "중고 가구 소매업",
      "children": []
    },
    {
      "code": "47861",
      "name": "중고가구 소매업",
      "children": []
    },
    {
      "code": "47862",
      "name": "중고 가전제품 및 통신장비 소매업",
      "children": []
    },
    {
      "code": "47862",
      "name": "중고 가전제품 소매업",
      "children": []
    },
    {
      "code": "47869",
      "name": "기타 중고 상품 소매업",
      "children": []
    },
    {
      "code": "47869",
      "name": "기타 중고상품 소매업",
      "children": []
    },
    {
      "code": "479",
      "name": "무점포 소매업",
      "children": []
    },
    {
      "code": "4791",
      "name": "통신 판매업",
      "children": []
    },
    {
      "code": "47911",
      "name": "전자상거래 소매 중개업",
      "children": []
    },
    {
      "code": "47911",
      "name": "전자상거래업",
      "children": [
        {
          "code": "47912",
          "name": "전자상거래 소매업"
        }
      ]
    },
    {
      "code": "47912",
      "name": "전자상거래 소매업",
      "children": []
    },
    {
      "code": "47919",
      "name": "기타 통신 판매업",
      "children": []
    },
    {
      "code": "4792",
      "name": "노점 및 유사이동 소매업",
      "children": []
    },
    {
      "code": "47920",
      "name": "노점 및 유사이동 소매업",
      "children": []
    },
    {
      "code": "4799",
      "name": "기타 무점포 소매업",
      "children": []
    },
    {
      "code": "47991",
      "name": "자동판매기 운영업",
      "children": []
    },
    {
      "code": "47992",
      "name": "계약배달 판매업",
      "children": []
    },
    {
      "code": "47993",
      "name": "방문 판매업",
      "children": []
    },
    {
      "code": "47999",
      "name": "그 외 기타 무점포 소매업",
      "children": []
    },
    {
      "code": "47999",
      "name": "그외 기타 무점포 소매업",
      "children": []
    },
    {
      "code": "49",
      "name": "육상운송 및 파이프라인 운송업",
      "children": []
    },
    {
      "code": "491",
      "name": "철도 운송업",
      "children": []
    },
    {
      "code": "491",
      "name": "철도운송업",
      "children": []
    },
    {
      "code": "4910",
      "name": "철도 운송업",
      "children": []
    },
    {
      "code": "4910",
      "name": "철도운송업",
      "children": []
    },
    {
      "code": "49100",
      "name": "철도운송업",
      "children": [
        {
          "code": "49101",
          "name": "철도 여객 운송업"
        },
        {
          "code": "49102",
          "name": "철도 화물 운송업"
        }
      ]
    },
    {
      "code": "49101",
      "name": "철도 여객 운송업",
      "children": []
    },
    {
      "code": "49102",
      "name": "철도 화물 운송업",
      "children": []
    },
    {
      "code": "492",
      "name": "육상 여객 운송업",
      "children": []
    },
    {
      "code": "4921",
      "name": "도시 정기 육상 여객 운송업",
      "children": []
    },
    {
      "code": "49211",
      "name": "도시철도 운송업",
      "children": []
    },
    {
      "code": "49212",
      "name": "시내버스 운송업",
      "children": []
    },
    {
      "code": "49219",
      "name": "기타 도시 정기 육상 여객 운송업",
      "children": []
    },
    {
      "code": "4922",
      "name": "시외버스 운송업",
      "children": []
    },
    {
      "code": "49220",
      "name": "시외버스 운송업",
      "children": []
    },
    {
      "code": "4923",
      "name": "부정기 여객 육상 운송업",
      "children": []
    },
    {
      "code": "4923",
      "name": "부정기 육상 여객 운송업",
      "children": []
    },
    {
      "code": "49231",
      "name": "택시 운송업",
      "children": []
    },
    {
      "code": "49232",
      "name": "전세버스 운송업",
      "children": []
    },
    {
      "code": "49233",
      "name": "장의차량 운영업",
      "children": []
    },
    {
      "code": "49233",
      "name": "특수여객자동차 운송업",
      "children": []
    },
    {
      "code": "49239",
      "name": "기타 부정기 여객 육상 운송업",
      "children": []
    },
    {
      "code": "493",
      "name": "도로 화물 운송업",
      "children": []
    },
    {
      "code": "4930",
      "name": "도로 화물 운송업",
      "children": []
    },
    {
      "code": "49301",
      "name": "일반 화물자동차 운송업",
      "children": [
        {
          "code": "49302",
          "name": "개인 화물자동차 운송업"
        }
      ]
    },
    {
      "code": "49302",
      "name": "용달 화물자동차 운송업",
      "children": [
        {
          "code": "49301",
          "name": "일반 화물자동차 운송업"
        }
      ]
    },
    {
      "code": "49303",
      "name": "개별 화물자동차 운송업",
      "children": [
        {
          "code": "49301",
          "name": "일반 화물자동차 운송업"
        },
        {
          "code": "49302",
          "name": "개인 화물자동차 운송업"
        }
      ]
    },
    {
      "code": "49309",
      "name": "기타 도로화물 운송업",
      "children": []
    },
    {
      "code": "4931",
      "name": "화물자동차 운송업",
      "children": [
        {
          "code": "4930",
          "name": "도로 화물 운송업"
        }
      ]
    },
    {
      "code": "49311",
      "name": "일반 화물자동차 운송업",
      "children": [
        {
          "code": "49301",
          "name": "일반 화물 자동차 운송업"
        }
      ]
    },
    {
      "code": "49312",
      "name": "용달 및 개별 화물자동차 운송업",
      "children": [
        {
          "code": "49302",
          "name": "용달 화물 자동차 운송업"
        },
        {
          "code": "49303",
          "name": "개별 화물 자동차 운송업"
        }
      ]
    },
    {
      "code": "4939",
      "name": "기타 도로화물 운송업",
      "children": [
        {
          "code": "4930",
          "name": "도로 화물 운송업"
        }
      ]
    },
    {
      "code": "49390",
      "name": "기타 도로화물 운송업",
      "children": [
        {
          "code": "49309",
          "name": "기타 도로 화물 운송업"
        }
      ]
    },
    {
      "code": "494",
      "name": "소화물 전문 운송업",
      "children": []
    },
    {
      "code": "4940",
      "name": "소화물 전문 운송업",
      "children": []
    },
    {
      "code": "49401",
      "name": "택배업",
      "children": []
    },
    {
      "code": "49402",
      "name": "늘찬 배달업",
      "children": []
    },
    {
      "code": "495",
      "name": "파이프라인 운송업",
      "children": []
    },
    {
      "code": "4950",
      "name": "파이프라인 운송업",
      "children": []
    },
    {
      "code": "49500",
      "name": "파이프라인 운송업",
      "children": []
    },
    {
      "code": "5",
      "name": "석탄, 원유 및 천연가스 광업",
      "children": []
    },
    {
      "code": "50",
      "name": "수상 운송업",
      "children": [
        {
          "code": "52",
          "name": "창고 및 운송관련 서비스업"
        }
      ]
    },
    {
      "code": "501",
      "name": "해상 운송업",
      "children": []
    },
    {
      "code": "5011",
      "name": "외항 운송업",
      "children": []
    },
    {
      "code": "50111",
      "name": "외항 여객 운송업",
      "children": []
    },
    {
      "code": "50112",
      "name": "외항 화물 운송업",
      "children": []
    },
    {
      "code": "5012",
      "name": "내항 운송업",
      "children": []
    },
    {
      "code": "50121",
      "name": "내항 여객 운송업",
      "children": []
    },
    {
      "code": "50122",
      "name": "내항 화물 운송업",
      "children": []
    },
    {
      "code": "5013",
      "name": "기타 해상 운송업",
      "children": []
    },
    {
      "code": "50130",
      "name": "기타 해상 운송업",
      "children": []
    },
    {
      "code": "502",
      "name": "내륙 수상 및 항만 내 운송업",
      "children": []
    },
    {
      "code": "502",
      "name": "내륙 수상 및 항만내 운송업",
      "children": [
        {
          "code": "529",
          "name": "기타 운송관련 서비스업"
        }
      ]
    },
    {
      "code": "5020",
      "name": "내륙 수상 및 항만 내 운송업",
      "children": []
    },
    {
      "code": "5020",
      "name": "내륙 수상 및 항만내 운송업",
      "children": [
        {
          "code": "5294",
          "name": "화물 취급업"
        }
      ]
    },
    {
      "code": "50201",
      "name": "내륙 수상 여객 및 화물 운송업",
      "children": [
        {
          "code": "50209",
          "name": "기타 내륙 수상 여객 및 화물 운송업"
        }
      ]
    },
    {
      "code": "50201",
      "name": "내륙 수상 여객 운송업",
      "children": []
    },
    {
      "code": "50202",
      "name": "내륙 수상 화물 운송업",
      "children": [
        {
          "code": "50201",
          "name": "내륙 수상 여객 및 화물 운송업"
        }
      ]
    },
    {
      "code": "50202",
      "name": "항만 내 여객 운송업",
      "children": [
        {
          "code": "50201",
          "name": "항만 내 여객 운송업"
        }
      ]
    },
    {
      "code": "50203",
      "name": "항만내 운송업",
      "children": [
        {
          "code": "50202",
          "name": "항만 내 여객 운송업"
        },
        {
          "code": "52942",
          "name": "수상 화물 취급업"
        }
      ]
    },
    {
      "code": "50209",
      "name": "기타 내륙 수상 및 항만내 운송업",
      "children": []
    },
    {
      "code": "50209",
      "name": "기타 내륙 수상 운송업",
      "children": []
    },
    {
      "code": "51",
      "name": "석탄 광업",
      "children": []
    },
    {
      "code": "51",
      "name": "항공 운송업",
      "children": []
    },
    {
      "code": "510",
      "name": "석탄 광업",
      "children": []
    },
    {
      "code": "5100",
      "name": "석탄 광업",
      "children": []
    },
    {
      "code": "511",
      "name": "정기 항공 운송업",
      "children": [
        {
          "code": "512",
          "name": "항공 화물 운송업"
        }
      ]
    },
    {
      "code": "511",
      "name": "항공 여객 운송업",
      "children": []
    },
    {
      "code": "5110",
      "name": "정기 항공 운송업",
      "children": [
        {
          "code": "5120",
          "name": "항공 화물 운송업"
        }
      ]
    },
    {
      "code": "5110",
      "name": "항공 여객 운송업",
      "children": []
    },
    {
      "code": "51100",
      "name": "정기 항공 운송업",
      "children": [
        {
          "code": "51200",
          "name": "항공 화물 운송업"
        }
      ]
    },
    {
      "code": "51100",
      "name": "항공 여객 운송업",
      "children": []
    },
    {
      "code": "512",
      "name": "부정기 항공 운송업",
      "children": [
        {
          "code": "511",
          "name": "항공 여객 운송업"
        }
      ]
    },
    {
      "code": "512",
      "name": "항공 화물 운송업",
      "children": []
    },
    {
      "code": "5120",
      "name": "부정기 항공 운송업",
      "children": [
        {
          "code": "5110",
          "name": "항공 여객 운송업"
        }
      ]
    },
    {
      "code": "5120",
      "name": "항공 화물 운송업",
      "children": []
    },
    {
      "code": "51200",
      "name": "부정기 항공 운송업",
      "children": [
        {
          "code": "51100",
          "name": "항공 여객 운송업"
        }
      ]
    },
    {
      "code": "51200",
      "name": "항공 화물 운송업",
      "children": []
    },
    {
      "code": "52",
      "name": "원유 및 천연가스 채굴업",
      "children": []
    },
    {
      "code": "52",
      "name": "창고 및 운송관련 서비스업",
      "children": [
        {
          "code": "46",
          "name": "도매 및 상품 중개업"
        }
      ]
    },
    {
      "code": "520",
      "name": "원유 및 천연가스 채굴업",
      "children": []
    },
    {
      "code": "5200",
      "name": "원유 및 천연가스 채굴업",
      "children": []
    },
    {
      "code": "521",
      "name": "보관 및 창고업",
      "children": []
    },
    {
      "code": "5210",
      "name": "보관 및 창고업",
      "children": []
    },
    {
      "code": "52101",
      "name": "일반 창고업",
      "children": []
    },
    {
      "code": "52102",
      "name": "냉장 및 냉동 창고업",
      "children": []
    },
    {
      "code": "52103",
      "name": "농산물 창고업",
      "children": []
    },
    {
      "code": "52104",
      "name": "위험물품 보관업",
      "children": []
    },
    {
      "code": "52109",
      "name": "기타 보관 및 창고업",
      "children": []
    },
    {
      "code": "529",
      "name": "기타 운송관련 서비스업",
      "children": [
        {
          "code": "461",
          "name": "상품 중개업"
        }
      ]
    },
    {
      "code": "5291",
      "name": "육상 운송지원 서비스업",
      "children": []
    },
    {
      "code": "52911",
      "name": "철도 운송지원 서비스업",
      "children": []
    },
    {
      "code": "52912",
      "name": "여객 자동차 터미널 운영업",
      "children": []
    },
    {
      "code": "52913",
      "name": "물류 터미널 운영업",
      "children": []
    },
    {
      "code": "52913",
      "name": "화물 자동차 터미널 운영업",
      "children": []
    },
    {
      "code": "52914",
      "name": "도로 및 관련시설 운영업",
      "children": []
    },
    {
      "code": "52915",
      "name": "주차장 운영업",
      "children": []
    },
    {
      "code": "52919",
      "name": "기타 육상 운송지원 서비스업",
      "children": []
    },
    {
      "code": "5292",
      "name": "수상 운송지원 서비스업",
      "children": []
    },
    {
      "code": "52921",
      "name": "항구 및 기타 해상 터미널 운영업",
      "children": []
    },
    {
      "code": "52929",
      "name": "기타 수상 운송지원 서비스업",
      "children": [
        {
          "code": "52922",
          "name": "선박관리업"
        }
      ]
    },
    {
      "code": "5293",
      "name": "항공 운송지원 서비스업",
      "children": []
    },
    {
      "code": "52931",
      "name": "공항 운영업",
      "children": []
    },
    {
      "code": "52939",
      "name": "기타 항공 운송지원 서비스업",
      "children": []
    },
    {
      "code": "5294",
      "name": "화물 취급업",
      "children": []
    },
    {
      "code": "52941",
      "name": "항공 및 육상 화물 취급업",
      "children": []
    },
    {
      "code": "52942",
      "name": "수상 화물 취급업",
      "children": []
    },
    {
      "code": "5299",
      "name": "그 외 기타 운송관련 서비스업",
      "children": []
    },
    {
      "code": "5299",
      "name": "그외 기타 운송관련 서비스업",
      "children": [
        {
          "code": "4610",
          "name": "상품 중개업"
        }
      ]
    },
    {
      "code": "52991",
      "name": "통관 대리 및 관련서비스업",
      "children": []
    },
    {
      "code": "52991",
      "name": "화물운송 중개, 대리 및 관련서비스업",
      "children": [
        {
          "code": "52992",
          "name": "화물 운송 중개, 대리 및 관련 서비스업"
        }
      ]
    },
    {
      "code": "52992",
      "name": "화물운송 중개, 대리 및 관련 서비스업",
      "children": []
    },
    {
      "code": "52992",
      "name": "화물포장, 검수 및 형량 서비스업",
      "children": [
        {
          "code": "52993",
          "name": "화물 포장, 검수 및 계량 서비스업"
        }
      ]
    },
    {
      "code": "52993",
      "name": "화물 포장, 검수 및 계량 서비스업",
      "children": []
    },
    {
      "code": "52999",
      "name": "그 외 기타 분류 안된 운송 관련 서비스업",
      "children": []
    },
    {
      "code": "52999",
      "name": "그외 기타 분류안된 운송관련 서비스업",
      "children": [
        {
          "code": "46106",
          "name": "기계 및 장비 중개업"
        }
      ]
    },
    {
      "code": "55",
      "name": "숙박업",
      "children": [
        {
          "code": "85",
          "name": "교육 서비스업"
        }
      ]
    },
    {
      "code": "551",
      "name": "숙박시설 운영업",
      "children": [
        {
          "code": "856",
          "name": "기타 교육기관"
        }
      ]
    },
    {
      "code": "551",
      "name": "일반 및 생활 숙박시설 운영업",
      "children": []
    },
    {
      "code": "5510",
      "name": "일반 및 생활 숙박시설 운영업",
      "children": []
    },
    {
      "code": "55101",
      "name": "호텔업",
      "children": []
    },
    {
      "code": "55102",
      "name": "여관업",
      "children": []
    },
    {
      "code": "55103",
      "name": "휴양콘도 운영업",
      "children": []
    },
    {
      "code": "55104",
      "name": "민박업",
      "children": []
    },
    {
      "code": "55109",
      "name": "기타 일반 및 생활 숙박시설 운영업",
      "children": [
        {
          "code": "55105",
          "name": "야영장업"
        }
      ]
    },
    {
      "code": "5511",
      "name": "관광숙박시설 운영업",
      "children": [
        {
          "code": "5510",
          "name": "일반 및 생활 숙박시설 운영업"
        },
        {
          "code": "8561",
          "name": "스포츠 및 레크리에이션 교육기관"
        }
      ]
    },
    {
      "code": "55111",
      "name": "호텔업",
      "children": [
        {
          "code": "55101",
          "name": "호텔업"
        }
      ]
    },
    {
      "code": "55112",
      "name": "여관업",
      "children": [
        {
          "code": "55102",
          "name": "여관업"
        }
      ]
    },
    {
      "code": "55113",
      "name": "휴양콘도 운영업",
      "children": [
        {
          "code": "55103",
          "name": "휴양 콘도 운영업"
        }
      ]
    },
    {
      "code": "55114",
      "name": "청소년수련시설 운영업",
      "children": [
        {
          "code": "85614",
          "name": "청소년 수련시설 운영업"
        }
      ]
    },
    {
      "code": "55119",
      "name": "기타 관광숙박시설 운영업",
      "children": [
        {
          "code": "55104",
          "name": "민박업"
        },
        {
          "code": "55109",
          "name": "기타 일반 및 생활 숙박시설 운영업"
        },
        {
          "code": "85614",
          "name": "청소년 수련시설 운영업"
        }
      ]
    },
    {
      "code": "559",
      "name": "기타 숙박업",
      "children": []
    },
    {
      "code": "5590",
      "name": "기타 숙박업",
      "children": []
    },
    {
      "code": "55901",
      "name": "기숙사 및 고시원 운영업",
      "children": []
    },
    {
      "code": "55901",
      "name": "기숙사 운영업",
      "children": []
    },
    {
      "code": "55909",
      "name": "그 외 기타 숙박업",
      "children": []
    },
    {
      "code": "55909",
      "name": "그외 기타 숙박업",
      "children": [
        {
          "code": "55901",
          "name": "기숙사 및 고시원 운영업"
        }
      ]
    },
    {
      "code": "56",
      "name": "음식점 및 주점업",
      "children": []
    },
    {
      "code": "561",
      "name": "음식점업",
      "children": [
        {
          "code": "562",
          "name": "주점 및 비알코올 음료점업"
        }
      ]
    },
    {
      "code": "5611",
      "name": "일반 음식점업",
      "children": [
        {
          "code": "5612",
          "name": "외국식 음식점업"
        }
      ]
    },
    {
      "code": "5611",
      "name": "한식 음식점업",
      "children": []
    },
    {
      "code": "56111",
      "name": "한식 음식점업",
      "children": [
        {
          "code": "56112",
          "name": "한식 면 요리 전문점"
        },
        {
          "code": "56113",
          "name": "한식 육류 요리 전문점"
        },
        {
          "code": "56114",
          "name": "한식 해산물 요리 전문점"
        }
      ]
    },
    {
      "code": "56111",
      "name": "한식 일반 음식점업",
      "children": []
    },
    {
      "code": "56112",
      "name": "중식 음식점업",
      "children": [
        {
          "code": "56121",
          "name": "중식 음식점업"
        }
      ]
    },
    {
      "code": "56112",
      "name": "한식 면요리 전문점",
      "children": []
    },
    {
      "code": "56113",
      "name": "일식 음식점업",
      "children": [
        {
          "code": "56122",
          "name": "일식 음식점업"
        }
      ]
    },
    {
      "code": "56113",
      "name": "한식 육류요리 전문점",
      "children": []
    },
    {
      "code": "56114",
      "name": "서양식 음식점업",
      "children": [
        {
          "code": "56123",
          "name": "서양식 음식점업"
        }
      ]
    },
    {
      "code": "56114",
      "name": "한식 해산물요리 전문점",
      "children": []
    },
    {
      "code": "56119",
      "name": "기타 외국식 음식점업",
      "children": [
        {
          "code": "56129",
          "name": "기타 외국식 음식점업"
        }
      ]
    },
    {
      "code": "5612",
      "name": "기관구내식당업",
      "children": [
        {
          "code": "5613",
          "name": "기관 구내식당업"
        }
      ]
    },
    {
      "code": "5612",
      "name": "외국식 음식점업",
      "children": []
    },
    {
      "code": "56120",
      "name": "기관구내식당업",
      "children": [
        {
          "code": "56130",
          "name": "기관 구내식당업"
        }
      ]
    },
    {
      "code": "56121",
      "name": "중식 음식점업",
      "children": []
    },
    {
      "code": "56122",
      "name": "일식 음식점업",
      "children": []
    },
    {
      "code": "56123",
      "name": "서양식 음식점업",
      "children": []
    },
    {
      "code": "56129",
      "name": "기타 외국식 음식점업",
      "children": []
    },
    {
      "code": "5613",
      "name": "기관 구내식당업",
      "children": []
    },
    {
      "code": "5613",
      "name": "출장 및 이동 음식업",
      "children": [
        {
          "code": "5614",
          "name": "출장 및 이동 음식점업"
        },
        {
          "code": "5622",
          "name": "비알코올 음료점업"
        }
      ]
    },
    {
      "code": "56130",
      "name": "기관 구내식당업",
      "children": []
    },
    {
      "code": "56131",
      "name": "출장 음식 서비스업",
      "children": [
        {
          "code": "56141",
          "name": "출장 음식 서비스업"
        }
      ]
    },
    {
      "code": "56132",
      "name": "이동 음식업",
      "children": [
        {
          "code": "56142",
          "name": "이동 음식점업"
        },
        {
          "code": "56229",
          "name": "기타 비알코올 음료점업"
        }
      ]
    },
    {
      "code": "5614",
      "name": "출장 및 이동 음식점업",
      "children": []
    },
    {
      "code": "56141",
      "name": "출장 음식 서비스업",
      "children": []
    },
    {
      "code": "56142",
      "name": "이동 음식점업",
      "children": []
    },
    {
      "code": "5619",
      "name": "기타 간이 음식점업",
      "children": [
        {
          "code": "5615",
          "name": "제과점업"
        },
        {
          "code": "5616",
          "name": "피자, 햄버거 및 치킨 전문점"
        }
      ]
    },
    {
      "code": "5619",
      "name": "기타 음식점업",
      "children": [
        {
          "code": "5611",
          "name": "한식 음식점업"
        }
      ]
    },
    {
      "code": "56191",
      "name": "제과점업",
      "children": [
        {
          "code": "56150",
          "name": "제과점업"
        },
        {
          "code": "56194",
          "name": "김밥 및 기타 간이 음식점업"
        }
      ]
    },
    {
      "code": "56192",
      "name": "피자, 햄버거, 샌드위치 및 유사 음식점업",
      "children": [
        {
          "code": "56161",
          "name": "피자, 햄버거, 샌드위치 및 유사 음식점업"
        }
      ]
    },
    {
      "code": "56193",
      "name": "치킨 전문점",
      "children": [
        {
          "code": "56162",
          "name": "치킨 전문점"
        }
      ]
    },
    {
      "code": "56194",
      "name": "김밥 및 기타 간이 음식점업",
      "children": [
        {
          "code": "56191",
          "name": "김밥 및 기타 간이 음식점업"
        }
      ]
    },
    {
      "code": "56194",
      "name": "분식 및 김밥 전문점",
      "children": [
        {
          "code": "56111",
          "name": "한식 일반 음식점업"
        },
        {
          "code": "56112",
          "name": "한식 면 요리 전문점"
        },
        {
          "code": "56113",
          "name": "한식 육류 요리 전문점"
        },
        {
          "code": "56199",
          "name": "간이 음식 포장 판매 전문점"
        }
      ]
    },
    {
      "code": "56199",
      "name": "간이음식 포장 판매 전문점",
      "children": []
    },
    {
      "code": "56199",
      "name": "그외 기타 음식점업",
      "children": []
    },
    {
      "code": "562",
      "name": "주점 및 비알코올 음료점업",
      "children": []
    },
    {
      "code": "562",
      "name": "주점 및 비알콜음료점업",
      "children": []
    },
    {
      "code": "5621",
      "name": "주점업",
      "children": []
    },
    {
      "code": "56211",
      "name": "일반 유흥주점업",
      "children": []
    },
    {
      "code": "56211",
      "name": "일반유흥 주점업",
      "children": []
    },
    {
      "code": "56212",
      "name": "무도 유흥주점업",
      "children": []
    },
    {
      "code": "56212",
      "name": "무도유흥 주점업",
      "children": []
    },
    {
      "code": "56213",
      "name": "생맥주 전문점",
      "children": []
    },
    {
      "code": "56219",
      "name": "기타 주점업",
      "children": [
        {
          "code": "56213",
          "name": "생맥주 전문점"
        }
      ]
    },
    {
      "code": "5622",
      "name": "비알코올 음료점업",
      "children": []
    },
    {
      "code": "5622",
      "name": "비알콜 음료점업",
      "children": []
    },
    {
      "code": "56220",
      "name": "비알콜 음료점업",
      "children": [
        {
          "code": "56221",
          "name": "커피 전문점"
        },
        {
          "code": "56229",
          "name": "기타 비알코올 음료점업"
        }
      ]
    },
    {
      "code": "56221",
      "name": "커피 전문점",
      "children": []
    },
    {
      "code": "56229",
      "name": "기타 비알코올 음료점업",
      "children": []
    },
    {
      "code": "58",
      "name": "출판업",
      "children": []
    },
    {
      "code": "581",
      "name": "서적, 잡지 및 기타 인쇄물 출판업",
      "children": []
    },
    {
      "code": "5811",
      "name": "서적 출판업",
      "children": []
    },
    {
      "code": "58111",
      "name": "교과서 및 학습서적 출판업",
      "children": []
    },
    {
      "code": "58112",
      "name": "만화 출판업",
      "children": []
    },
    {
      "code": "58113",
      "name": "일반 서적 출판업",
      "children": []
    },
    {
      "code": "58119",
      "name": "기타 서적 출판업",
      "children": [
        {
          "code": "58113",
          "name": "일반 서적 출판업"
        }
      ]
    },
    {
      "code": "5812",
      "name": "신문, 잡지 및 정기간행물 출판업",
      "children": []
    },
    {
      "code": "58121",
      "name": "신문 발행업",
      "children": []
    },
    {
      "code": "58122",
      "name": "잡지 및 정기간행물 발행업",
      "children": []
    },
    {
      "code": "58123",
      "name": "정기 광고간행물 발행업",
      "children": []
    },
    {
      "code": "5819",
      "name": "기타 인쇄물 출판업",
      "children": []
    },
    {
      "code": "58190",
      "name": "기타 인쇄물 출판업",
      "children": []
    },
    {
      "code": "582",
      "name": "소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "5821",
      "name": "게임 소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "58211",
      "name": "온라인·모바일 게임 소프트웨어 개발 및 공급업",
      "children": [
        {
          "code": "58212",
          "name": "모바일 게임 소프트웨어 개발 및 공급업"
        }
      ]
    },
    {
      "code": "58211",
      "name": "유선 온라인 게임 소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "58212",
      "name": "모바일 게임 소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "58219",
      "name": "기타 게임 소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "5822",
      "name": "시스템·응용 소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "5822",
      "name": "시스템ㆍ응용 소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "58221",
      "name": "시스템  소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "58221",
      "name": "시스템 소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "58222",
      "name": "응용 소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "58222",
      "name": "응용소프트웨어 개발 및 공급업",
      "children": []
    },
    {
      "code": "59",
      "name": "영상·오디오 기록물 제작 및 배급업",
      "children": []
    },
    {
      "code": "59",
      "name": "영상ㆍ오디오 기록물 제작 및 배급업",
      "children": []
    },
    {
      "code": "591",
      "name": "영화, 비디오물, 방송프로그램 제작 및 배급업",
      "children": []
    },
    {
      "code": "5911",
      "name": "영화, 비디오물 및 방송프로그램 제작업",
      "children": []
    },
    {
      "code": "59111",
      "name": "일반 영화 및 비디오물 제작업",
      "children": []
    },
    {
      "code": "59112",
      "name": "애니메이션 영화 및 비디오물 제작업",
      "children": []
    },
    {
      "code": "59113",
      "name": "광고 영화 및 비디오물 제작업",
      "children": []
    },
    {
      "code": "59114",
      "name": "방송 프로그램 제작업",
      "children": []
    },
    {
      "code": "5912",
      "name": "영화, 비디오물 및 방송프로그램 제작 관련 서비스업",
      "children": []
    },
    {
      "code": "59120",
      "name": "영화, 비디오물 및 방송프로그램 제작 관련 서비스업",
      "children": []
    },
    {
      "code": "5913",
      "name": "영화, 비디오물 및 방송프로그램 배급업",
      "children": []
    },
    {
      "code": "59130",
      "name": "영화, 비디오물 및 방송프로그램 배급업",
      "children": []
    },
    {
      "code": "5914",
      "name": "영화 및 비디오물 상영업",
      "children": []
    },
    {
      "code": "59141",
      "name": "영화관 운영업",
      "children": []
    },
    {
      "code": "59142",
      "name": "비디오물 감상실 운영업",
      "children": []
    },
    {
      "code": "592",
      "name": "오디오물 출판 및 원판 녹음업",
      "children": []
    },
    {
      "code": "5920",
      "name": "오디오물 출판 및 원판 녹음업",
      "children": []
    },
    {
      "code": "59201",
      "name": "음악 및 기타 오디오물 출판업",
      "children": []
    },
    {
      "code": "59202",
      "name": "녹음시설 운영업",
      "children": []
    },
    {
      "code": "6",
      "name": "금속 광업",
      "children": []
    },
    {
      "code": "60",
      "name": "방송업",
      "children": []
    },
    {
      "code": "601",
      "name": "라디오 방송업",
      "children": []
    },
    {
      "code": "6010",
      "name": "라디오 방송업",
      "children": []
    },
    {
      "code": "60100",
      "name": "라디오 방송업",
      "children": []
    },
    {
      "code": "602",
      "name": "텔레비전 방송업",
      "children": []
    },
    {
      "code": "6021",
      "name": "지상파 방송업",
      "children": []
    },
    {
      "code": "60210",
      "name": "지상파 방송업",
      "children": []
    },
    {
      "code": "6022",
      "name": "유선, 위성 및 기타 방송업",
      "children": []
    },
    {
      "code": "60221",
      "name": "프로그램 공급업",
      "children": []
    },
    {
      "code": "60222",
      "name": "유선 방송업",
      "children": []
    },
    {
      "code": "60222",
      "name": "유선방송업",
      "children": []
    },
    {
      "code": "60229",
      "name": "위성 및 기타 방송업",
      "children": []
    },
    {
      "code": "61",
      "name": "우편 및 통신업",
      "children": []
    },
    {
      "code": "61",
      "name": "철 광업",
      "children": []
    },
    {
      "code": "61",
      "name": "통신업",
      "children": []
    },
    {
      "code": "610",
      "name": "철 광업",
      "children": []
    },
    {
      "code": "6100",
      "name": "철 광업",
      "children": []
    },
    {
      "code": "611",
      "name": "공영 우편업",
      "children": []
    },
    {
      "code": "611",
      "name": "우편업",
      "children": []
    },
    {
      "code": "6110",
      "name": "공영 우편업",
      "children": []
    },
    {
      "code": "6110",
      "name": "우편업",
      "children": []
    },
    {
      "code": "61100",
      "name": "공영 우편업",
      "children": []
    },
    {
      "code": "61100",
      "name": "우편업",
      "children": []
    },
    {
      "code": "612",
      "name": "전기 통신업",
      "children": []
    },
    {
      "code": "612",
      "name": "전기통신업",
      "children": []
    },
    {
      "code": "6121",
      "name": "유선 통신업",
      "children": []
    },
    {
      "code": "6121",
      "name": "유선통신업",
      "children": []
    },
    {
      "code": "61210",
      "name": "유선 통신업",
      "children": []
    },
    {
      "code": "61210",
      "name": "유선통신업",
      "children": []
    },
    {
      "code": "6122",
      "name": "무선 및 위성 통신업",
      "children": []
    },
    {
      "code": "6122",
      "name": "무선통신업",
      "children": []
    },
    {
      "code": "61220",
      "name": "무선 및 위성 통신업",
      "children": []
    },
    {
      "code": "61220",
      "name": "무선통신업",
      "children": []
    },
    {
      "code": "6123",
      "name": "위성통신업",
      "children": [
        {
          "code": "6122",
          "name": "무선 및 위성 통신업"
        }
      ]
    },
    {
      "code": "61230",
      "name": "위성통신업",
      "children": [
        {
          "code": "61220",
          "name": "무선 및 위성 통신업"
        }
      ]
    },
    {
      "code": "6129",
      "name": "기타 전기 통신업",
      "children": []
    },
    {
      "code": "6129",
      "name": "기타 전기통신업",
      "children": []
    },
    {
      "code": "61291",
      "name": "통신 재판매업",
      "children": []
    },
    {
      "code": "61299",
      "name": "그 외 기타 전기 통신업",
      "children": []
    },
    {
      "code": "61299",
      "name": "그외 기타 전기 통신업",
      "children": []
    },
    {
      "code": "62",
      "name": "비철금속 광업",
      "children": []
    },
    {
      "code": "62",
      "name": "컴퓨터 프로그래밍, 시스템 통합 및 관리업",
      "children": []
    },
    {
      "code": "620",
      "name": "비철금속 광업",
      "children": []
    },
    {
      "code": "620",
      "name": "컴퓨터 프로그래밍, 시스템 통합 및 관리업",
      "children": []
    },
    {
      "code": "6200",
      "name": "비철금속 광업",
      "children": []
    },
    {
      "code": "6201",
      "name": "컴퓨터 프로그래밍 서비스업",
      "children": []
    },
    {
      "code": "62010",
      "name": "컴퓨터 프로그래밍 서비스업",
      "children": []
    },
    {
      "code": "6202",
      "name": "컴퓨터시스템 통합 자문, 구축 및 관리업",
      "children": []
    },
    {
      "code": "62021",
      "name": "컴퓨터시스템 통합 자문 및 구축 서비스업",
      "children": []
    },
    {
      "code": "62022",
      "name": "컴퓨터시설 관리업",
      "children": []
    },
    {
      "code": "6209",
      "name": "기타 정보기술 및 컴퓨터운영 관련 서비스업",
      "children": []
    },
    {
      "code": "62090",
      "name": "기타 정보기술 및 컴퓨터운영 관련 서비스업",
      "children": []
    },
    {
      "code": "621",
      "name": "우라늄 및 토륨 광업",
      "children": [
        {
          "code": "620",
          "name": "비철금속 광업"
        }
      ]
    },
    {
      "code": "6210",
      "name": "우라늄 및 토륨 광업",
      "children": [
        {
          "code": "6200",
          "name": "비철금속 광업"
        }
      ]
    },
    {
      "code": "629",
      "name": "기타 비철금속 광업",
      "children": [
        {
          "code": "620",
          "name": "비철금속 광업"
        }
      ]
    },
    {
      "code": "6291",
      "name": "금·은 및 백금 광업",
      "children": [
        {
          "code": "6200",
          "name": "비철금속 광업"
        }
      ]
    },
    {
      "code": "6292",
      "name": "연 및 아연 광업",
      "children": [
        {
          "code": "6200",
          "name": "비철금속 광업"
        }
      ]
    },
    {
      "code": "6299",
      "name": "그외 기타 비철금속 광업",
      "children": [
        {
          "code": "6200",
          "name": "비철금속 광업"
        }
      ]
    },
    {
      "code": "63",
      "name": "정보서비스업",
      "children": [
        {
          "code": "60",
          "name": "방송 및 영상·오디오물 제공 서비스업"
        }
      ]
    },
    {
      "code": "631",
      "name": "자료처리, 호스팅, 포털 및 기타 인터넷 정보매개 서비스업",
      "children": [
        {
          "code": "603",
          "name": "영상·오디오물 제공 서비스업"
        }
      ]
    },
    {
      "code": "631",
      "name": "자료처리, 호스팅, 포털 및 기타 인터넷 정보매개서비스업",
      "children": []
    },
    {
      "code": "6311",
      "name": "자료 처리, 호스팅 및 관련 서비스업",
      "children": [
        {
          "code": "6031",
          "name": "영상물 제공 서비스업"
        },
        {
          "code": "6032",
          "name": "오디오물 제공 서비스업"
        }
      ]
    },
    {
      "code": "6311",
      "name": "자료처리, 호스팅 및 관련 서비스업",
      "children": []
    },
    {
      "code": "63111",
      "name": "자료 처리업",
      "children": []
    },
    {
      "code": "63112",
      "name": "호스팅 및 관련 서비스업",
      "children": [
        {
          "code": "60310",
          "name": "영상물 제공 서비스업"
        },
        {
          "code": "60320",
          "name": "오디오물 제공 서비스업"
        }
      ]
    },
    {
      "code": "6312",
      "name": "포털 및 기타 인터넷 정보매개 서비스업",
      "children": []
    },
    {
      "code": "63120",
      "name": "포털 및 기타 인터넷 정보매개 서비스업",
      "children": []
    },
    {
      "code": "639",
      "name": "기타 정보 서비스업",
      "children": [
        {
          "code": "603",
          "name": "영상·오디오물 제공 서비스업"
        }
      ]
    },
    {
      "code": "6391",
      "name": "뉴스 제공업",
      "children": []
    },
    {
      "code": "63910",
      "name": "뉴스 제공업",
      "children": []
    },
    {
      "code": "6399",
      "name": "그 외 기타 정보 서비스업",
      "children": [
        {
          "code": "6031",
          "name": "영상물 제공 서비스업"
        },
        {
          "code": "6032",
          "name": "오디오물 제공 서비스업"
        }
      ]
    },
    {
      "code": "6399",
      "name": "그외 기타 정보 서비스업",
      "children": []
    },
    {
      "code": "63991",
      "name": "데이터베이스 및 온라인정보 제공업",
      "children": [
        {
          "code": "60310",
          "name": "영상물 제공 서비스업"
        },
        {
          "code": "60320",
          "name": "오디오물 제공 서비스업"
        }
      ]
    },
    {
      "code": "63999",
      "name": "그 외 기타 정보 서비스업",
      "children": [
        {
          "code": "63992",
          "name": "가상자산 매매 및 중개업"
        }
      ]
    },
    {
      "code": "63999",
      "name": "그외 기타 정보 서비스업",
      "children": []
    },
    {
      "code": "64",
      "name": "금융업",
      "children": []
    },
    {
      "code": "641",
      "name": "은행 및 저축기관",
      "children": []
    },
    {
      "code": "6411",
      "name": "중앙은행",
      "children": []
    },
    {
      "code": "64110",
      "name": "중앙은행",
      "children": []
    },
    {
      "code": "6412",
      "name": "일반은행",
      "children": []
    },
    {
      "code": "64121",
      "name": "국내은행",
      "children": []
    },
    {
      "code": "64122",
      "name": "외국은행",
      "children": []
    },
    {
      "code": "6413",
      "name": "신용조합 및 저축기관",
      "children": []
    },
    {
      "code": "64131",
      "name": "신용조합",
      "children": []
    },
    {
      "code": "64132",
      "name": "상호저축은행",
      "children": []
    },
    {
      "code": "64132",
      "name": "상호저축은행 및 기타 저축기관",
      "children": []
    },
    {
      "code": "64139",
      "name": "기타 저축기관",
      "children": [
        {
          "code": "64132",
          "name": "상호 저축은행 및 기타 저축기관"
        }
      ]
    },
    {
      "code": "642",
      "name": "신탁업 및 집합투자업",
      "children": []
    },
    {
      "code": "642",
      "name": "투자기관",
      "children": []
    },
    {
      "code": "6420",
      "name": "신탁업 및 집합투자업",
      "children": []
    },
    {
      "code": "6420",
      "name": "투자기관",
      "children": []
    },
    {
      "code": "64201",
      "name": "신탁업 및 집합투자업",
      "children": []
    },
    {
      "code": "64201",
      "name": "자산운용회사",
      "children": []
    },
    {
      "code": "64209",
      "name": "기타 금융 투자업",
      "children": []
    },
    {
      "code": "64209",
      "name": "기타 투자기관",
      "children": []
    },
    {
      "code": "649",
      "name": "기타 금융업",
      "children": []
    },
    {
      "code": "6491",
      "name": "여신금융업",
      "children": []
    },
    {
      "code": "64911",
      "name": "금융리스업",
      "children": []
    },
    {
      "code": "64912",
      "name": "개발금융기관",
      "children": []
    },
    {
      "code": "64913",
      "name": "신용카드 및 할부금융업",
      "children": []
    },
    {
      "code": "64919",
      "name": "그 외 기타 여신금융업",
      "children": []
    },
    {
      "code": "64919",
      "name": "그외 기타 여신금융업",
      "children": []
    },
    {
      "code": "6499",
      "name": "그 외 기타 금융업",
      "children": []
    },
    {
      "code": "6499",
      "name": "그외 기타 금융업",
      "children": []
    },
    {
      "code": "64991",
      "name": "기금 운영업",
      "children": []
    },
    {
      "code": "64992",
      "name": "금융지주회사",
      "children": []
    },
    {
      "code": "64992",
      "name": "지주회사",
      "children": []
    },
    {
      "code": "64999",
      "name": "그 외 기타 분류 안된 금융업",
      "children": []
    },
    {
      "code": "64999",
      "name": "그외 기타 분류안된 금융업",
      "children": []
    },
    {
      "code": "65",
      "name": "보험 및 연금업",
      "children": [
        {
          "code": "84",
          "name": "공공행정, 국방 및 사회보장 행정"
        }
      ]
    },
    {
      "code": "651",
      "name": "보험업",
      "children": [
        {
          "code": "846",
          "name": "연금업"
        }
      ]
    },
    {
      "code": "6511",
      "name": "생명 보험업",
      "children": []
    },
    {
      "code": "65110",
      "name": "생명 보험업",
      "children": []
    },
    {
      "code": "6512",
      "name": "손해 및 보증 보험업",
      "children": []
    },
    {
      "code": "65121",
      "name": "손해 보험업",
      "children": []
    },
    {
      "code": "65122",
      "name": "보증 보험업",
      "children": []
    },
    {
      "code": "6513",
      "name": "사회보장 보험업",
      "children": [
        {
          "code": "8461",
          "name": "사회보장 보험업"
        }
      ]
    },
    {
      "code": "65131",
      "name": "건강 보험업",
      "children": [
        {
          "code": "84611",
          "name": "건강 보험업"
        }
      ]
    },
    {
      "code": "65139",
      "name": "산업재해 및 기타 사회보장 보험업",
      "children": [
        {
          "code": "84619",
          "name": "산업재해 및 기타 사회보장 보험업"
        }
      ]
    },
    {
      "code": "652",
      "name": "재 보험업",
      "children": []
    },
    {
      "code": "6520",
      "name": "재 보험업",
      "children": []
    },
    {
      "code": "65200",
      "name": "재 보험업",
      "children": []
    },
    {
      "code": "653",
      "name": "연금 및 공제업",
      "children": [
        {
          "code": "846",
          "name": "연금업"
        }
      ]
    },
    {
      "code": "6530",
      "name": "연금 및 공제업",
      "children": [
        {
          "code": "8462",
          "name": "연금업"
        }
      ]
    },
    {
      "code": "65301",
      "name": "개인 공제업",
      "children": []
    },
    {
      "code": "65302",
      "name": "사업 공제업",
      "children": []
    },
    {
      "code": "65303",
      "name": "연금업",
      "children": [
        {
          "code": "84620",
          "name": "연금업"
        }
      ]
    },
    {
      "code": "66",
      "name": "금융 및 보험 관련 서비스업",
      "children": []
    },
    {
      "code": "661",
      "name": "금융 지원 서비스업",
      "children": []
    },
    {
      "code": "661",
      "name": "금융지원 서비스업",
      "children": []
    },
    {
      "code": "6611",
      "name": "금융시장 관리업",
      "children": []
    },
    {
      "code": "66110",
      "name": "금융시장 관리업",
      "children": []
    },
    {
      "code": "6612",
      "name": "증권 및 선물 중개업",
      "children": []
    },
    {
      "code": "66121",
      "name": "증권 중개업",
      "children": []
    },
    {
      "code": "66122",
      "name": "선물 중개업",
      "children": []
    },
    {
      "code": "6619",
      "name": "기타 금융 지원 서비스업",
      "children": []
    },
    {
      "code": "6619",
      "name": "기타 금융지원 서비스업",
      "children": []
    },
    {
      "code": "66191",
      "name": "유가증권 관리 및 보관업",
      "children": []
    },
    {
      "code": "66191",
      "name": "증권 발행, 관리, 보관 및 거래 지원 서비스업",
      "children": []
    },
    {
      "code": "66192",
      "name": "투자 자문업",
      "children": []
    },
    {
      "code": "66192",
      "name": "투자 자문업 및 투자 일임업",
      "children": []
    },
    {
      "code": "66199",
      "name": "그 외 기타 금융 지원 서비스업",
      "children": []
    },
    {
      "code": "66199",
      "name": "그외 기타 금융지원 서비스업",
      "children": []
    },
    {
      "code": "662",
      "name": "보험 및 연금관련 서비스업",
      "children": []
    },
    {
      "code": "6620",
      "name": "보험 및 연금관련 서비스업",
      "children": []
    },
    {
      "code": "66201",
      "name": "손해 사정업",
      "children": []
    },
    {
      "code": "66201",
      "name": "손해사정업",
      "children": []
    },
    {
      "code": "66202",
      "name": "보험 대리 및 중개업",
      "children": []
    },
    {
      "code": "66202",
      "name": "보험대리 및 중개업",
      "children": []
    },
    {
      "code": "66209",
      "name": "기타 보험 및 연금관련 서비스업",
      "children": []
    },
    {
      "code": "68",
      "name": "부동산업",
      "children": [
        {
          "code": "76",
          "name": "임대업; 부동산 제외"
        }
      ]
    },
    {
      "code": "681",
      "name": "부동산 임대 및 공급업",
      "children": [
        {
          "code": "764",
          "name": "무형 재산권 임대업"
        }
      ]
    },
    {
      "code": "6811",
      "name": "부동산 임대업",
      "children": [
        {
          "code": "7640",
          "name": "무형 재산권 임대업"
        }
      ]
    },
    {
      "code": "68111",
      "name": "주거용 건물 임대업",
      "children": []
    },
    {
      "code": "68112",
      "name": "비주거용 건물 임대업",
      "children": []
    },
    {
      "code": "68119",
      "name": "기타 부동산 임대업",
      "children": [
        {
          "code": "76400",
          "name": "무형 재산권 임대업"
        }
      ]
    },
    {
      "code": "6812",
      "name": "부동산 개발 및 공급업",
      "children": []
    },
    {
      "code": "68121",
      "name": "주거용 건물 개발 및 공급업",
      "children": []
    },
    {
      "code": "68122",
      "name": "비주거용 건물 개발 및 공급업",
      "children": []
    },
    {
      "code": "68129",
      "name": "기타 부동산 개발 및 공급업",
      "children": []
    },
    {
      "code": "682",
      "name": "부동산 관련 서비스업",
      "children": []
    },
    {
      "code": "6821",
      "name": "부동산 관리업",
      "children": []
    },
    {
      "code": "68211",
      "name": "주거용 부동산 관리업",
      "children": []
    },
    {
      "code": "68212",
      "name": "비주거용 부동산 관리업",
      "children": []
    },
    {
      "code": "6822",
      "name": "부동산 중개 및 감정평가업",
      "children": []
    },
    {
      "code": "6822",
      "name": "부동산 중개, 자문 및 감정평가업",
      "children": []
    },
    {
      "code": "68221",
      "name": "부동산 자문 및 중개업",
      "children": [
        {
          "code": "68222",
          "name": "부동산 투자 자문업"
        }
      ]
    },
    {
      "code": "68221",
      "name": "부동산 중개 및 대리업",
      "children": [
        {
          "code": "68224",
          "name": "부동산 분양 대행업"
        }
      ]
    },
    {
      "code": "68222",
      "name": "부동산 감정평가업",
      "children": [
        {
          "code": "68223",
          "name": "부동산 감정 평가업"
        }
      ]
    },
    {
      "code": "68222",
      "name": "부동산 투자자문업",
      "children": []
    },
    {
      "code": "68223",
      "name": "부동산 감정평가업",
      "children": []
    },
    {
      "code": "69",
      "name": "임대업;부동산 제외",
      "children": [
        {
          "code": "76",
          "name": "임대업; 부동산 제외"
        }
      ]
    },
    {
      "code": "691",
      "name": "운송장비 임대업",
      "children": [
        {
          "code": "761",
          "name": "운송장비 임대업"
        }
      ]
    },
    {
      "code": "6911",
      "name": "자동차 임대업",
      "children": [
        {
          "code": "7611",
          "name": "자동차 임대업"
        }
      ]
    },
    {
      "code": "69110",
      "name": "자동차 임대업",
      "children": [
        {
          "code": "76110",
          "name": "자동차 임대업"
        }
      ]
    },
    {
      "code": "6919",
      "name": "기타 운송장비 임대업",
      "children": [
        {
          "code": "7619",
          "name": "기타 운송장비 임대업"
        }
      ]
    },
    {
      "code": "69190",
      "name": "기타 운송장비 임대업",
      "children": [
        {
          "code": "76190",
          "name": "기타 운송장비 임대업"
        }
      ]
    },
    {
      "code": "692",
      "name": "개인 및 가정용품 임대업",
      "children": [
        {
          "code": "762",
          "name": "개인 및 가정용품 임대업"
        }
      ]
    },
    {
      "code": "6921",
      "name": "스포츠 및 레크레이션 용품 임대업",
      "children": [
        {
          "code": "7621",
          "name": "스포츠 및 레크리에이션 용품 임대업"
        }
      ]
    },
    {
      "code": "69210",
      "name": "스포츠 및 레크레이션 용품 임대업",
      "children": [
        {
          "code": "76210",
          "name": "스포츠 및 레크리에이션 용품 임대업"
        }
      ]
    },
    {
      "code": "6922",
      "name": "음반 및 비디오물 임대업",
      "children": [
        {
          "code": "7622",
          "name": "음반 및 비디오물 임대업"
        }
      ]
    },
    {
      "code": "69220",
      "name": "음반 및 비디오물 임대업",
      "children": [
        {
          "code": "76220",
          "name": "음반 및 비디오물 임대업"
        }
      ]
    },
    {
      "code": "6929",
      "name": "기타 개인 및 가정용품 임대업",
      "children": [
        {
          "code": "7629",
          "name": "기타 개인 및 가정용품 임대업"
        }
      ]
    },
    {
      "code": "69291",
      "name": "서적 임대업",
      "children": [
        {
          "code": "76291",
          "name": "서적 임대업"
        }
      ]
    },
    {
      "code": "69292",
      "name": "의류 임대업",
      "children": [
        {
          "code": "76292",
          "name": "의류 임대업"
        }
      ]
    },
    {
      "code": "69299",
      "name": "그외 기타 개인 및 가정용품 임대업",
      "children": [
        {
          "code": "76299",
          "name": "그 외 기타 개인 및 가정용품 임대업"
        }
      ]
    },
    {
      "code": "693",
      "name": "산업용 기계 및 장비 임대업",
      "children": [
        {
          "code": "763",
          "name": "산업용 기계 및 장비 임대업"
        }
      ]
    },
    {
      "code": "6931",
      "name": "건설 및 토목공사용 기계장비 임대업",
      "children": [
        {
          "code": "7631",
          "name": "건설 및 토목공사용 기계ㆍ장비 임대업"
        },
        {
          "code": "7639",
          "name": "기타 산업용 기계 및 장비 임대업"
        }
      ]
    },
    {
      "code": "69310",
      "name": "건설 및 토목공사용 기계장비 임대업",
      "children": [
        {
          "code": "76310",
          "name": "건설 및 토목공사용 기계ㆍ장비 임대업"
        },
        {
          "code": "76390",
          "name": "기타 산업용 기계 및 장비 임대업"
        }
      ]
    },
    {
      "code": "6932",
      "name": "컴퓨터 및 사무용 기계장비 임대업",
      "children": [
        {
          "code": "7632",
          "name": "컴퓨터 및 사무용 기계ㆍ장비 임대업"
        }
      ]
    },
    {
      "code": "69320",
      "name": "컴퓨터 및 사무용 기계장비 임대업",
      "children": [
        {
          "code": "76320",
          "name": "컴퓨터 및 사무용 기계ㆍ장비 임대업"
        }
      ]
    },
    {
      "code": "6939",
      "name": "기타 산업용 기계 및 장비 임대업",
      "children": [
        {
          "code": "7639",
          "name": "기타 산업용 기계 및 장비 임대업"
        }
      ]
    },
    {
      "code": "69390",
      "name": "기타 산업용 기계 및 장비 임대업",
      "children": [
        {
          "code": "76390",
          "name": "기타 산업용 기계 및 장비 임대업"
        }
      ]
    },
    {
      "code": "694",
      "name": "무형재산권 임대업",
      "children": [
        {
          "code": "764",
          "name": "무형 재산권 임대업"
        }
      ]
    },
    {
      "code": "6940",
      "name": "무형재산권 임대업",
      "children": [
        {
          "code": "7640",
          "name": "무형 재산권 임대업"
        }
      ]
    },
    {
      "code": "69400",
      "name": "무형재산권 임대업",
      "children": [
        {
          "code": "76400",
          "name": "무형 재산권 임대업"
        }
      ]
    },
    {
      "code": "7",
      "name": "비금속광물 광업; 연료용 제외",
      "children": []
    },
    {
      "code": "7",
      "name": "비금속광물 광업;연료용 제외",
      "children": [
        {
          "code": "23",
          "name": "비금속 광물제품 제조업"
        }
      ]
    },
    {
      "code": "70",
      "name": "연구개발업",
      "children": []
    },
    {
      "code": "701",
      "name": "자연과학 및 공학 연구개발업",
      "children": []
    },
    {
      "code": "7011",
      "name": "자연과학 연구개발업",
      "children": [
        {
          "code": "7013",
          "name": "자연과학 및 공학 융합 연구개발업"
        }
      ]
    },
    {
      "code": "70111",
      "name": "물리, 화학 및 생물학 연구개발업",
      "children": []
    },
    {
      "code": "70112",
      "name": "농림수산학 및 수의학 연구개발업",
      "children": []
    },
    {
      "code": "70112",
      "name": "농학 연구개발업",
      "children": []
    },
    {
      "code": "70113",
      "name": "의학 및 약학 연구개발업",
      "children": []
    },
    {
      "code": "70119",
      "name": "기타 자연과학 연구개발업",
      "children": [
        {
          "code": "70130",
          "name": "자연과학 및 공학 융합 연구개발업"
        }
      ]
    },
    {
      "code": "7012",
      "name": "공학 연구개발업",
      "children": [
        {
          "code": "7013",
          "name": "자연과학 및 공학 융합 연구개발업"
        }
      ]
    },
    {
      "code": "70121",
      "name": "전기·전자공학 연구개발업",
      "children": []
    },
    {
      "code": "70121",
      "name": "전기ㆍ전자공학 연구개발업",
      "children": []
    },
    {
      "code": "70129",
      "name": "기타 공학 연구개발업",
      "children": [
        {
          "code": "70130",
          "name": "자연과학 및 공학 융합 연구개발업"
        }
      ]
    },
    {
      "code": "7013",
      "name": "자연과학 및 공학 융합 연구개발업",
      "children": []
    },
    {
      "code": "70130",
      "name": "자연과학 및 공학 융합 연구개발업",
      "children": []
    },
    {
      "code": "702",
      "name": "인문 및 사회과학 연구개발업",
      "children": []
    },
    {
      "code": "7020",
      "name": "인문 및 사회과학 연구개발업",
      "children": []
    },
    {
      "code": "70201",
      "name": "경제 및 경영학 연구개발업",
      "children": []
    },
    {
      "code": "70201",
      "name": "경제학 연구개발업",
      "children": []
    },
    {
      "code": "70209",
      "name": "기타 인문 및 사회과학 연구개발업",
      "children": []
    },
    {
      "code": "71",
      "name": "전문 서비스업",
      "children": []
    },
    {
      "code": "71",
      "name": "전문서비스업",
      "children": [
        {
          "code": "64",
          "name": "금융업"
        }
      ]
    },
    {
      "code": "71",
      "name": "토사석 광업",
      "children": [
        {
          "code": "232",
          "name": "내화, 비내화 요업제품 제조업"
        }
      ]
    },
    {
      "code": "711",
      "name": "법무관련 서비스업",
      "children": []
    },
    {
      "code": "711",
      "name": "석회석 및 점토 광업",
      "children": [
        {
          "code": "2321",
          "name": "내화 요업제품 제조업"
        }
      ]
    },
    {
      "code": "7110",
      "name": "법무관련 서비스업",
      "children": []
    },
    {
      "code": "7110",
      "name": "석회석 및 점토 광업",
      "children": []
    },
    {
      "code": "71101",
      "name": "변호사업",
      "children": []
    },
    {
      "code": "71102",
      "name": "변리사업",
      "children": []
    },
    {
      "code": "71103",
      "name": "법무사업",
      "children": []
    },
    {
      "code": "71109",
      "name": "기타 법무관련 서비스업",
      "children": []
    },
    {
      "code": "7111",
      "name": "석회석 광업",
      "children": [
        {
          "code": "7110",
          "name": "석회석 및 점토 광업"
        }
      ]
    },
    {
      "code": "7112",
      "name": "고령토 및 기타 점토 광업",
      "children": [
        {
          "code": "7110",
          "name": "석회석 및 점토 광업"
        },
        {
          "code": "23212",
          "name": "부정형 내화 요업제품 제조업"
        }
      ]
    },
    {
      "code": "712",
      "name": "석재, 쇄석 및 모래, 자갈 채취업",
      "children": []
    },
    {
      "code": "712",
      "name": "석재, 쇄석 및 모래자갈 채취업",
      "children": []
    },
    {
      "code": "712",
      "name": "회계 및 세무관련 서비스업",
      "children": []
    },
    {
      "code": "7120",
      "name": "회계 및 세무관련 서비스업",
      "children": []
    },
    {
      "code": "71201",
      "name": "공인회계사업",
      "children": []
    },
    {
      "code": "71202",
      "name": "세무사업",
      "children": []
    },
    {
      "code": "71209",
      "name": "기타 회계 관련 서비스업",
      "children": []
    },
    {
      "code": "71209",
      "name": "기타 회계관련 서비스업",
      "children": []
    },
    {
      "code": "7121",
      "name": "건설용 석재 채굴 및 쇄석 생산업",
      "children": []
    },
    {
      "code": "7121",
      "name": "건설용 석재 채굴업",
      "children": []
    },
    {
      "code": "7122",
      "name": "건설용 쇄석 생산업",
      "children": [
        {
          "code": "7121",
          "name": "건설용 석재 채굴 및 쇄석 생산업"
        }
      ]
    },
    {
      "code": "7122",
      "name": "모래 및 자갈 채취업",
      "children": []
    },
    {
      "code": "7123",
      "name": "모래 및 자갈 채취업",
      "children": [
        {
          "code": "7122",
          "name": "모래 및 자갈 채취업"
        }
      ]
    },
    {
      "code": "713",
      "name": "광고업",
      "children": []
    },
    {
      "code": "7131",
      "name": "광고 대행업",
      "children": []
    },
    {
      "code": "71310",
      "name": "광고 대행업",
      "children": []
    },
    {
      "code": "7139",
      "name": "기타 광고업",
      "children": []
    },
    {
      "code": "71391",
      "name": "옥외 및 전시 광고업",
      "children": []
    },
    {
      "code": "71392",
      "name": "광고매체 판매업",
      "children": [
        {
          "code": "71399",
          "name": "그 외 기타 광고 관련 서비스업"
        }
      ]
    },
    {
      "code": "71393",
      "name": "광고물 문안, 도안, 설계 등 작성업",
      "children": [
        {
          "code": "71392",
          "name": "광고물 문안, 도안, 설계 등 작성업"
        }
      ]
    },
    {
      "code": "71393",
      "name": "광고물 작성업",
      "children": []
    },
    {
      "code": "71399",
      "name": "그 외 기타 광고 관련 서비스업",
      "children": []
    },
    {
      "code": "71399",
      "name": "그외 기타 광고업",
      "children": []
    },
    {
      "code": "714",
      "name": "시장조사 및 여론조사업",
      "children": []
    },
    {
      "code": "7140",
      "name": "시장조사 및 여론조사업",
      "children": []
    },
    {
      "code": "71400",
      "name": "시장조사 및 여론조사업",
      "children": []
    },
    {
      "code": "715",
      "name": "회사 본부 및 경영 컨설팅 서비스업",
      "children": []
    },
    {
      "code": "715",
      "name": "회사본부, 지주회사 및 경영컨설팅 서비스업",
      "children": [
        {
          "code": "649",
          "name": "기타 금융업"
        }
      ]
    },
    {
      "code": "7151",
      "name": "회사 본부",
      "children": []
    },
    {
      "code": "7151",
      "name": "회사본부",
      "children": []
    },
    {
      "code": "71511",
      "name": "제조업 회사 본부",
      "children": []
    },
    {
      "code": "71511",
      "name": "제조업 회사본부",
      "children": []
    },
    {
      "code": "71519",
      "name": "기타 산업 회사 본부",
      "children": []
    },
    {
      "code": "71519",
      "name": "기타 산업 회사본부",
      "children": []
    },
    {
      "code": "7152",
      "name": "비금융 지주회사",
      "children": [
        {
          "code": "6499",
          "name": "그 외 기타 금융업"
        }
      ]
    },
    {
      "code": "71520",
      "name": "비금융 지주회사",
      "children": [
        {
          "code": "64992",
          "name": "지주회사"
        }
      ]
    },
    {
      "code": "7153",
      "name": "경영 컨설팅 및 공공 관계 서비스업",
      "children": []
    },
    {
      "code": "7153",
      "name": "경영컨설팅 및 공공관계 서비스업",
      "children": []
    },
    {
      "code": "71531",
      "name": "경영 컨설팅업",
      "children": []
    },
    {
      "code": "71531",
      "name": "경영컨설팅업",
      "children": []
    },
    {
      "code": "71532",
      "name": "공공관계 서비스업",
      "children": []
    },
    {
      "code": "716",
      "name": "기타 전문 서비스업",
      "children": []
    },
    {
      "code": "7160",
      "name": "기타 전문 서비스업",
      "children": []
    },
    {
      "code": "71600",
      "name": "기타 전문 서비스업",
      "children": []
    },
    {
      "code": "72",
      "name": "건축기술, 엔지니어링 및 기타 과학기술 서비스업",
      "children": []
    },
    {
      "code": "72",
      "name": "기타 비금속광물 광업",
      "children": []
    },
    {
      "code": "721",
      "name": "건축기술, 엔지니어링 및 관련 기술 서비스업",
      "children": []
    },
    {
      "code": "721",
      "name": "건축기술, 엔지니어링 및 관련기술 서비스업",
      "children": []
    },
    {
      "code": "721",
      "name": "화학용 및 비료원료용 광물 광업",
      "children": []
    },
    {
      "code": "7210",
      "name": "화학용 및 비료원료용 광물 광업",
      "children": []
    },
    {
      "code": "7211",
      "name": "건축 및 조경 설계 서비스업",
      "children": []
    },
    {
      "code": "72111",
      "name": "건축설계 및 관련 서비스업",
      "children": []
    },
    {
      "code": "72112",
      "name": "도시계획 및 조경설계 서비스업",
      "children": []
    },
    {
      "code": "7212",
      "name": "엔지니어링 서비스업",
      "children": []
    },
    {
      "code": "72121",
      "name": "건물 및 토목 엔지니어링 서비스업",
      "children": []
    },
    {
      "code": "72121",
      "name": "건물 및 토목엔지니어링 서비스업",
      "children": []
    },
    {
      "code": "72122",
      "name": "환경 관련 엔지니어링 서비스업",
      "children": []
    },
    {
      "code": "72122",
      "name": "환경컨설팅 및 관련 엔지니어링 서비스업",
      "children": []
    },
    {
      "code": "72129",
      "name": "기타 엔지니어링 서비스업",
      "children": []
    },
    {
      "code": "722",
      "name": "소금 채취업",
      "children": []
    },
    {
      "code": "722",
      "name": "천일염 생산 및 암염 채취업",
      "children": []
    },
    {
      "code": "7220",
      "name": "소금 채취업",
      "children": []
    },
    {
      "code": "7220",
      "name": "천일염 생산 및 암염 채취업",
      "children": []
    },
    {
      "code": "729",
      "name": "그 외 기타 비금속광물 광업",
      "children": []
    },
    {
      "code": "729",
      "name": "그외 기타 비금속광물 광업",
      "children": []
    },
    {
      "code": "729",
      "name": "기타 과학기술 서비스업",
      "children": []
    },
    {
      "code": "7290",
      "name": "그 외 기타 비금속광물 광업",
      "children": []
    },
    {
      "code": "7290",
      "name": "그외 기타 비금속광물 광업",
      "children": []
    },
    {
      "code": "7291",
      "name": "기술 시험, 검사 및 분석업",
      "children": []
    },
    {
      "code": "72911",
      "name": "물질성분 검사 및 분석업",
      "children": []
    },
    {
      "code": "72919",
      "name": "기타 기술 시험, 검사 및 분석업",
      "children": []
    },
    {
      "code": "7292",
      "name": "측량, 지질조사 및 지도제작업",
      "children": []
    },
    {
      "code": "72921",
      "name": "측량업",
      "children": []
    },
    {
      "code": "72922",
      "name": "제도업",
      "children": []
    },
    {
      "code": "72923",
      "name": "지질 조사 및 탐사업",
      "children": []
    },
    {
      "code": "72923",
      "name": "지질조사 및 탐사업",
      "children": []
    },
    {
      "code": "72924",
      "name": "지도 제작업",
      "children": [
        {
          "code": "72923",
          "name": "지질 조사·탐사 및 지도 제작업"
        }
      ]
    },
    {
      "code": "72924",
      "name": "지도제작업",
      "children": []
    },
    {
      "code": "73",
      "name": "기타 전문, 과학 및 기술 서비스업",
      "children": [
        {
          "code": "1",
          "name": "농업"
        },
        {
          "code": "26",
          "name": "전자 부품, 컴퓨터, 영상, 음향 및 통신장비 제조업"
        }
      ]
    },
    {
      "code": "731",
      "name": "수의업",
      "children": [
        {
          "code": "14",
          "name": "작물재배 및 축산 관련 서비스업"
        }
      ]
    },
    {
      "code": "7310",
      "name": "수의업",
      "children": [
        {
          "code": "142",
          "name": "축산 관련 서비스업"
        }
      ]
    },
    {
      "code": "73100",
      "name": "수의업",
      "children": [
        {
          "code": "1420",
          "name": "축산 관련 서비스업"
        }
      ]
    },
    {
      "code": "732",
      "name": "전문 디자인업",
      "children": []
    },
    {
      "code": "732",
      "name": "전문디자인업",
      "children": []
    },
    {
      "code": "7320",
      "name": "전문 디자인업",
      "children": []
    },
    {
      "code": "7320",
      "name": "전문디자인업",
      "children": []
    },
    {
      "code": "73201",
      "name": "인테리어 디자인업",
      "children": []
    },
    {
      "code": "73202",
      "name": "제품 디자인업",
      "children": []
    },
    {
      "code": "73203",
      "name": "시각 디자인업",
      "children": []
    },
    {
      "code": "73209",
      "name": "기타 전문 디자인업",
      "children": []
    },
    {
      "code": "73209",
      "name": "패션, 섬유류 및 기타 전문 디자인업",
      "children": []
    },
    {
      "code": "733",
      "name": "사진 촬영 및 처리업",
      "children": [
        {
          "code": "262",
          "name": "전자 부품 제조업"
        }
      ]
    },
    {
      "code": "7330",
      "name": "사진 촬영 및 처리업",
      "children": [
        {
          "code": "2629",
          "name": "기타 전자 부품 제조업"
        }
      ]
    },
    {
      "code": "73301",
      "name": "인물사진 및 행사용 영상 촬영업",
      "children": []
    },
    {
      "code": "73301",
      "name": "인물사진 및 행사용비디오 촬영업",
      "children": []
    },
    {
      "code": "73302",
      "name": "상업용 사진 촬영업",
      "children": [
        {
          "code": "26299",
          "name": "그 외 기타 전자 부품 제조업"
        }
      ]
    },
    {
      "code": "73303",
      "name": "사진 처리업",
      "children": []
    },
    {
      "code": "739",
      "name": "그 외 기타 전문, 과학 및 기술 서비스업",
      "children": []
    },
    {
      "code": "739",
      "name": "그외 기타 전문, 과학 및 기술 서비스업",
      "children": []
    },
    {
      "code": "7390",
      "name": "그 외 기타 전문, 과학 및 기술 서비스업",
      "children": []
    },
    {
      "code": "7390",
      "name": "그외 기타 전문, 과학 및 기술 서비스업",
      "children": []
    },
    {
      "code": "73901",
      "name": "매니저업",
      "children": []
    },
    {
      "code": "73902",
      "name": "번역 및 통역 서비스업",
      "children": []
    },
    {
      "code": "73902",
      "name": "번역 및 통역서비스업",
      "children": []
    },
    {
      "code": "73903",
      "name": "사업 및 무형 재산권 중개업",
      "children": []
    },
    {
      "code": "73904",
      "name": "물품 감정, 계량 및 견본 추출업",
      "children": []
    },
    {
      "code": "73904",
      "name": "물품감정, 계량 및 견본 추출업",
      "children": []
    },
    {
      "code": "73909",
      "name": "그 외 기타 분류 안된 전문, 과학 및 기술 서비스업",
      "children": [
        {
          "code": "73905",
          "name": "고고유산 조사연구 서비스업"
        }
      ]
    },
    {
      "code": "73909",
      "name": "그외 기타 분류안된 전문, 과학 및 기술 서비스업",
      "children": []
    },
    {
      "code": "74",
      "name": "사업시설 관리 및 조경 서비스업",
      "children": [
        {
          "code": "37",
          "name": "하수, 폐수 및 분뇨 처리업"
        }
      ]
    },
    {
      "code": "741",
      "name": "사업시설 유지·관리 서비스업",
      "children": []
    },
    {
      "code": "741",
      "name": "사업시설 유지관리 서비스업",
      "children": []
    },
    {
      "code": "7410",
      "name": "사업시설 유지·관리 서비스업",
      "children": []
    },
    {
      "code": "7410",
      "name": "사업시설 유지관리 서비스업",
      "children": []
    },
    {
      "code": "74100",
      "name": "사업시설 유지·관리 서비스업",
      "children": []
    },
    {
      "code": "74100",
      "name": "사업시설 유지관리 서비스업",
      "children": []
    },
    {
      "code": "742",
      "name": "건물·산업설비 청소 및 방제 서비스업",
      "children": [
        {
          "code": "370",
          "name": "하수, 폐수 및 분뇨 처리업"
        }
      ]
    },
    {
      "code": "742",
      "name": "건물ㆍ산업설비 청소 및 방제 서비스업",
      "children": []
    },
    {
      "code": "7421",
      "name": "건물 및 산업설비 청소업",
      "children": [
        {
          "code": "3701",
          "name": "하수 및 폐수 처리업"
        }
      ]
    },
    {
      "code": "74211",
      "name": "건축물 일반 청소업",
      "children": []
    },
    {
      "code": "74212",
      "name": "사업시설 및 산업용품 청소업",
      "children": [
        {
          "code": "37011",
          "name": "하수 처리업"
        }
      ]
    },
    {
      "code": "74212",
      "name": "산업설비, 운송장비 및 공공장소 청소업",
      "children": []
    },
    {
      "code": "7422",
      "name": "소독, 구충 및 방제 서비스업",
      "children": []
    },
    {
      "code": "74220",
      "name": "소독, 구충 및 방제 서비스업",
      "children": []
    },
    {
      "code": "743",
      "name": "조경 관리 및 유지 서비스업",
      "children": []
    },
    {
      "code": "7430",
      "name": "조경 관리 및 유지 서비스업",
      "children": []
    },
    {
      "code": "74300",
      "name": "조경 관리 및 유지 서비스업",
      "children": []
    },
    {
      "code": "75",
      "name": "사업지원 서비스업",
      "children": [
        {
          "code": "71",
          "name": "전문 서비스업"
        },
        {
          "code": "73",
          "name": "기타 전문, 과학 및 기술 서비스업"
        }
      ]
    },
    {
      "code": "751",
      "name": "고용알선 및 인력공급업",
      "children": []
    },
    {
      "code": "751",
      "name": "인력공급 및 고용알선업",
      "children": []
    },
    {
      "code": "7511",
      "name": "고용 알선업",
      "children": []
    },
    {
      "code": "7511",
      "name": "고용알선업",
      "children": []
    },
    {
      "code": "75110",
      "name": "고용 알선업",
      "children": []
    },
    {
      "code": "75110",
      "name": "고용알선업",
      "children": []
    },
    {
      "code": "7512",
      "name": "인력 공급업",
      "children": []
    },
    {
      "code": "7512",
      "name": "인력공급업",
      "children": []
    },
    {
      "code": "75120",
      "name": "인력공급업",
      "children": [
        {
          "code": "75121",
          "name": "임시 및 일용 인력 공급업"
        },
        {
          "code": "75122",
          "name": "상용 인력 공급 및 인사관리 서비스업"
        }
      ]
    },
    {
      "code": "75121",
      "name": "임시 및 일용 인력 공급업",
      "children": []
    },
    {
      "code": "75122",
      "name": "상용 인력 공급 및 인사관리 서비스업",
      "children": []
    },
    {
      "code": "752",
      "name": "여행사 및 기타 여행보조 서비스업",
      "children": []
    },
    {
      "code": "7521",
      "name": "여행사업",
      "children": []
    },
    {
      "code": "75210",
      "name": "여행사업",
      "children": []
    },
    {
      "code": "75211",
      "name": "일반 및 국외 여행사업",
      "children": [
        {
          "code": "75210",
          "name": "여행사업"
        }
      ]
    },
    {
      "code": "75212",
      "name": "국내 여행사업",
      "children": [
        {
          "code": "75210",
          "name": "여행사업"
        }
      ]
    },
    {
      "code": "7529",
      "name": "기타 여행보조 및 예약 서비스업",
      "children": []
    },
    {
      "code": "75290",
      "name": "기타 여행 보조 및 예약 서비스업",
      "children": []
    },
    {
      "code": "75290",
      "name": "기타 여행보조 및 예약 서비스업",
      "children": []
    },
    {
      "code": "753",
      "name": "경비, 경호 및 탐정업",
      "children": []
    },
    {
      "code": "7531",
      "name": "경비 및 경호 서비스업",
      "children": []
    },
    {
      "code": "75310",
      "name": "경비 및 경호 서비스업",
      "children": []
    },
    {
      "code": "7532",
      "name": "보안시스템 서비스업",
      "children": []
    },
    {
      "code": "75320",
      "name": "보안시스템 서비스업",
      "children": []
    },
    {
      "code": "7533",
      "name": "탐정 및 조사 서비스업",
      "children": []
    },
    {
      "code": "75330",
      "name": "탐정 및 조사 서비스업",
      "children": []
    },
    {
      "code": "759",
      "name": "기타 사업지원 서비스업",
      "children": [
        {
          "code": "716",
          "name": "기타 전문 서비스업"
        },
        {
          "code": "733",
          "name": "사진 촬영 및 처리업"
        },
        {
          "code": "751",
          "name": "고용 알선 및 인력 공급업"
        }
      ]
    },
    {
      "code": "7591",
      "name": "사무지원 서비스업",
      "children": [
        {
          "code": "7160",
          "name": "기타 전문 서비스업"
        },
        {
          "code": "7330",
          "name": "사진 촬영 및 처리업"
        },
        {
          "code": "7512",
          "name": "인력 공급업"
        }
      ]
    },
    {
      "code": "75911",
      "name": "문서 작성업",
      "children": []
    },
    {
      "code": "75912",
      "name": "복사업",
      "children": [
        {
          "code": "75911",
          "name": "문서 작성 및 복사업"
        },
        {
          "code": "73303",
          "name": "사진 처리업"
        }
      ]
    },
    {
      "code": "75919",
      "name": "기타 사무지원 서비스업",
      "children": [
        {
          "code": "71600",
          "name": "기타 전문 서비스업"
        },
        {
          "code": "75122",
          "name": "상용 인력 공급 및 인사관리 서비스업"
        }
      ]
    },
    {
      "code": "7599",
      "name": "그 외 기타 사업지원 서비스업",
      "children": []
    },
    {
      "code": "7599",
      "name": "그외 기타 사업지원 서비스업",
      "children": []
    },
    {
      "code": "75991",
      "name": "콜센터 및 텔레마케팅 서비스업",
      "children": []
    },
    {
      "code": "75992",
      "name": "전시 및 행사 대행업",
      "children": []
    },
    {
      "code": "75992",
      "name": "전시, 컨벤션 및 행사 대행업",
      "children": []
    },
    {
      "code": "75993",
      "name": "신용 조사 및 추심 대행업",
      "children": []
    },
    {
      "code": "75993",
      "name": "신용조사 및 추심 대행업",
      "children": []
    },
    {
      "code": "75994",
      "name": "포장 및 충전업",
      "children": []
    },
    {
      "code": "75999",
      "name": "그 외 기타 분류 안된 사업지원 서비스업",
      "children": [
        {
          "code": "75995",
          "name": "온라인 활용 마케팅 및 관련 사업지원 서비스업"
        }
      ]
    },
    {
      "code": "75999",
      "name": "그외 기타 분류안된 사업지원 서비스업",
      "children": []
    },
    {
      "code": "76",
      "name": "임대업; 부동산 제외",
      "children": []
    },
    {
      "code": "761",
      "name": "운송장비 임대업",
      "children": []
    },
    {
      "code": "7611",
      "name": "자동차 임대업",
      "children": []
    },
    {
      "code": "76110",
      "name": "자동차 임대업",
      "children": []
    },
    {
      "code": "7619",
      "name": "기타 운송장비 임대업",
      "children": []
    },
    {
      "code": "76190",
      "name": "기타 운송장비 임대업",
      "children": []
    },
    {
      "code": "762",
      "name": "개인 및 가정용품 임대업",
      "children": []
    },
    {
      "code": "7621",
      "name": "스포츠 및 레크리에이션 용품 임대업",
      "children": []
    },
    {
      "code": "76210",
      "name": "스포츠 및 레크리에이션 용품 임대업",
      "children": []
    },
    {
      "code": "7622",
      "name": "음반 및 비디오물 임대업",
      "children": []
    },
    {
      "code": "76220",
      "name": "음반 및 비디오물 임대업",
      "children": []
    },
    {
      "code": "7629",
      "name": "기타 개인 및 가정용품 임대업",
      "children": []
    },
    {
      "code": "76291",
      "name": "서적 임대업",
      "children": []
    },
    {
      "code": "76292",
      "name": "의류 임대업",
      "children": []
    },
    {
      "code": "76299",
      "name": "그 외 기타 개인 및 가정용품 임대업",
      "children": []
    },
    {
      "code": "763",
      "name": "산업용 기계 및 장비 임대업",
      "children": []
    },
    {
      "code": "7631",
      "name": "건설 및 토목공사용 기계·장비 임대업",
      "children": []
    },
    {
      "code": "76310",
      "name": "건설 및 토목공사용 기계·장비 임대업",
      "children": []
    },
    {
      "code": "7632",
      "name": "컴퓨터 및 사무용 기계·장비 임대업",
      "children": []
    },
    {
      "code": "76320",
      "name": "컴퓨터 및 사무용 기계·장비 임대업",
      "children": []
    },
    {
      "code": "7639",
      "name": "기타 산업용 기계 및 장비 임대업",
      "children": []
    },
    {
      "code": "76390",
      "name": "기타 산업용 기계 및 장비 임대업",
      "children": []
    },
    {
      "code": "764",
      "name": "무형재산권 임대업",
      "children": []
    },
    {
      "code": "7640",
      "name": "무형재산권 임대업",
      "children": []
    },
    {
      "code": "76400",
      "name": "무형재산권 임대업",
      "children": []
    },
    {
      "code": "8",
      "name": "광업 지원 서비스업",
      "children": []
    },
    {
      "code": "80",
      "name": "광업 지원 서비스업",
      "children": []
    },
    {
      "code": "800",
      "name": "광업 지원 서비스업",
      "children": []
    },
    {
      "code": "8000",
      "name": "광업 지원 서비스업",
      "children": []
    },
    {
      "code": "801",
      "name": "원유 및 천연가스 채굴관련 서비스업",
      "children": [
        {
          "code": "800",
          "name": "광업 지원 서비스업"
        }
      ]
    },
    {
      "code": "8010",
      "name": "원유 및 천연가스 채굴관련 서비스업",
      "children": [
        {
          "code": "8000",
          "name": "광업 지원 서비스업"
        }
      ]
    },
    {
      "code": "809",
      "name": "기타 광업 지원 서비스업",
      "children": [
        {
          "code": "800",
          "name": "광업 지원 서비스업"
        }
      ]
    },
    {
      "code": "8090",
      "name": "기타 광업 지원 서비스업",
      "children": [
        {
          "code": "8000",
          "name": "광업 지원 서비스업"
        }
      ]
    },
    {
      "code": "84",
      "name": "공공행정, 국방 및 사회보장 행정",
      "children": []
    },
    {
      "code": "841",
      "name": "입법 및 일반 정부 행정",
      "children": []
    },
    {
      "code": "8411",
      "name": "일반 공공 행정",
      "children": []
    },
    {
      "code": "84111",
      "name": "입법기관",
      "children": []
    },
    {
      "code": "84112",
      "name": "중앙 최고 집행기관",
      "children": []
    },
    {
      "code": "84113",
      "name": "지방행정 집행기관",
      "children": []
    },
    {
      "code": "84114",
      "name": "재정 및 경제정책 행정",
      "children": []
    },
    {
      "code": "84119",
      "name": "기타 일반 공공 행정",
      "children": []
    },
    {
      "code": "8412",
      "name": "정부기관 일반 보조 행정",
      "children": []
    },
    {
      "code": "84120",
      "name": "정부기관 일반 보조 행정",
      "children": []
    },
    {
      "code": "842",
      "name": "사회 및 산업정책 행정",
      "children": []
    },
    {
      "code": "8421",
      "name": "사회서비스 관리 행정",
      "children": []
    },
    {
      "code": "84211",
      "name": "교육 행정",
      "children": []
    },
    {
      "code": "84212",
      "name": "문화 및 관광 행정",
      "children": []
    },
    {
      "code": "84213",
      "name": "환경 행정",
      "children": []
    },
    {
      "code": "84214",
      "name": "보건 및 복지 행정",
      "children": []
    },
    {
      "code": "84219",
      "name": "기타 사회서비스 관리 행정",
      "children": []
    },
    {
      "code": "8422",
      "name": "노동 및 산업진흥 행정",
      "children": []
    },
    {
      "code": "84221",
      "name": "노동 행정",
      "children": []
    },
    {
      "code": "84222",
      "name": "농림수산 행정",
      "children": []
    },
    {
      "code": "84223",
      "name": "건설 및 운송 행정",
      "children": []
    },
    {
      "code": "84224",
      "name": "우편 및 통신행정",
      "children": []
    },
    {
      "code": "84224",
      "name": "통신 행정",
      "children": []
    },
    {
      "code": "84229",
      "name": "기타 산업진흥 행정",
      "children": []
    },
    {
      "code": "843",
      "name": "외무 및 국방 행정",
      "children": []
    },
    {
      "code": "8431",
      "name": "외무 행정",
      "children": []
    },
    {
      "code": "84310",
      "name": "외무 행정",
      "children": []
    },
    {
      "code": "8432",
      "name": "국방 행정",
      "children": []
    },
    {
      "code": "84320",
      "name": "국방 행정",
      "children": []
    },
    {
      "code": "844",
      "name": "사법 및 공공질서 행정",
      "children": []
    },
    {
      "code": "8440",
      "name": "사법 및 공공질서 행정",
      "children": []
    },
    {
      "code": "84401",
      "name": "법원",
      "children": []
    },
    {
      "code": "84402",
      "name": "검찰",
      "children": []
    },
    {
      "code": "84403",
      "name": "교도기관",
      "children": []
    },
    {
      "code": "84404",
      "name": "경찰",
      "children": []
    },
    {
      "code": "84405",
      "name": "소방서",
      "children": []
    },
    {
      "code": "84409",
      "name": "기타 사법 및 공공질서 행정",
      "children": []
    },
    {
      "code": "845",
      "name": "사회보장 행정",
      "children": []
    },
    {
      "code": "8450",
      "name": "사회보장 행정",
      "children": []
    },
    {
      "code": "84500",
      "name": "사회보장 행정",
      "children": []
    },
    {
      "code": "85",
      "name": "교육 서비스업",
      "children": []
    },
    {
      "code": "851",
      "name": "초등 교육기관",
      "children": []
    },
    {
      "code": "8511",
      "name": "유아 교육기관",
      "children": []
    },
    {
      "code": "85110",
      "name": "유아 교육기관",
      "children": []
    },
    {
      "code": "8512",
      "name": "초등학교",
      "children": []
    },
    {
      "code": "85120",
      "name": "초등학교",
      "children": []
    },
    {
      "code": "852",
      "name": "중등 교육기관",
      "children": []
    },
    {
      "code": "8521",
      "name": "일반 중등 교육기관",
      "children": []
    },
    {
      "code": "85211",
      "name": "중학교",
      "children": []
    },
    {
      "code": "85212",
      "name": "일반 고등학교",
      "children": []
    },
    {
      "code": "8522",
      "name": "기술 및 직업 중등 교육기관",
      "children": []
    },
    {
      "code": "8522",
      "name": "특성화 고등학교",
      "children": []
    },
    {
      "code": "85221",
      "name": "상업 및 정보산업 고등학교",
      "children": []
    },
    {
      "code": "85221",
      "name": "상업 및 정보산업 특성화 고등학교",
      "children": []
    },
    {
      "code": "85222",
      "name": "공업 고등학교",
      "children": []
    },
    {
      "code": "85222",
      "name": "공업 특성화 고등학교",
      "children": []
    },
    {
      "code": "85229",
      "name": "기타 기술 및 직업 고등학교",
      "children": []
    },
    {
      "code": "85229",
      "name": "기타 특성화 고등학교",
      "children": []
    },
    {
      "code": "853",
      "name": "고등 교육기관",
      "children": []
    },
    {
      "code": "8530",
      "name": "고등 교육기관",
      "children": []
    },
    {
      "code": "85301",
      "name": "전문대학",
      "children": []
    },
    {
      "code": "85302",
      "name": "대학교",
      "children": []
    },
    {
      "code": "85303",
      "name": "대학원",
      "children": []
    },
    {
      "code": "854",
      "name": "특수학교, 외국인학교 및 대안학교",
      "children": []
    },
    {
      "code": "8541",
      "name": "특수학교",
      "children": []
    },
    {
      "code": "85410",
      "name": "특수학교",
      "children": []
    },
    {
      "code": "8542",
      "name": "외국인 학교",
      "children": []
    },
    {
      "code": "85420",
      "name": "외국인 학교",
      "children": []
    },
    {
      "code": "8543",
      "name": "대안학교",
      "children": []
    },
    {
      "code": "85430",
      "name": "대안학교",
      "children": []
    },
    {
      "code": "855",
      "name": "일반 교습 학원",
      "children": [
        {
          "code": "856",
          "name": "기타 교육기관"
        }
      ]
    },
    {
      "code": "8550",
      "name": "일반 교습 학원",
      "children": [
        {
          "code": "8563",
          "name": "외국어학원 및 기타 교습학원"
        }
      ]
    },
    {
      "code": "85501",
      "name": "일반 교과 학원",
      "children": []
    },
    {
      "code": "85502",
      "name": "방문 교육 학원",
      "children": []
    },
    {
      "code": "85502",
      "name": "외국어학원",
      "children": [
        {
          "code": "85501",
          "name": "일반 교과학원"
        },
        {
          "code": "85631",
          "name": "외국어학원"
        }
      ]
    },
    {
      "code": "85503",
      "name": "방문 교육 학원",
      "children": [
        {
          "code": "85502",
          "name": "방문 교육학원"
        }
      ]
    },
    {
      "code": "85503",
      "name": "온라인 교육 학원",
      "children": []
    },
    {
      "code": "85504",
      "name": "온라인 교육 학원",
      "children": [
        {
          "code": "85503",
          "name": "온라인 교육학원"
        }
      ]
    },
    {
      "code": "85509",
      "name": "기타 일반 교습학원",
      "children": [
        {
          "code": "85632",
          "name": "기타 교습학원"
        }
      ]
    },
    {
      "code": "856",
      "name": "기타 교육기관",
      "children": [
        {
          "code": "855",
          "name": "일반 교습학원"
        }
      ]
    },
    {
      "code": "8561",
      "name": "스포츠 및 레크레이션 교육기관",
      "children": [
        {
          "code": "8550",
          "name": "일반 교습학원"
        }
      ]
    },
    {
      "code": "8561",
      "name": "스포츠 및 레크리에이션 교육기관",
      "children": []
    },
    {
      "code": "85611",
      "name": "스포츠 교육기관",
      "children": [
        {
          "code": "85501",
          "name": "일반 교과학원"
        },
        {
          "code": "85612",
          "name": "기타 스포츠 교육기관"
        }
      ]
    },
    {
      "code": "85611",
      "name": "태권도 및 무술 교육기관",
      "children": []
    },
    {
      "code": "85612",
      "name": "기타 스포츠 교육기관",
      "children": []
    },
    {
      "code": "85612",
      "name": "레크레이션 교육기관",
      "children": [
        {
          "code": "85613",
          "name": "레크리에이션 교육기관"
        }
      ]
    },
    {
      "code": "85613",
      "name": "레크리에이션 교육기관",
      "children": []
    },
    {
      "code": "85614",
      "name": "청소년 수련시설 운영업",
      "children": []
    },
    {
      "code": "8562",
      "name": "예술 학원",
      "children": [
        {
          "code": "8550",
          "name": "일반 교습학원"
        }
      ]
    },
    {
      "code": "8562",
      "name": "예술학원",
      "children": []
    },
    {
      "code": "85620",
      "name": "예술 학원",
      "children": [
        {
          "code": "85501",
          "name": "일반 교과학원"
        },
        {
          "code": "85621",
          "name": "음악학원"
        },
        {
          "code": "85622",
          "name": "미술학원"
        },
        {
          "code": "85629",
          "name": "기타 예술학원"
        }
      ]
    },
    {
      "code": "85621",
      "name": "음악학원",
      "children": []
    },
    {
      "code": "85622",
      "name": "미술학원",
      "children": []
    },
    {
      "code": "85629",
      "name": "기타 예술학원",
      "children": []
    },
    {
      "code": "8563",
      "name": "사회교육시설",
      "children": [
        {
          "code": "8564",
          "name": "사회교육시설"
        }
      ]
    },
    {
      "code": "8563",
      "name": "외국어학원 및 기타 교습학원",
      "children": []
    },
    {
      "code": "85630",
      "name": "사회교육시설",
      "children": [
        {
          "code": "85640",
          "name": "사회교육시설"
        }
      ]
    },
    {
      "code": "85631",
      "name": "외국어학원",
      "children": []
    },
    {
      "code": "85632",
      "name": "기타 교습학원",
      "children": []
    },
    {
      "code": "8564",
      "name": "사회교육시설",
      "children": []
    },
    {
      "code": "8564",
      "name": "직원훈련기관",
      "children": [
        {
          "code": "8565",
          "name": "직원 훈련기관"
        }
      ]
    },
    {
      "code": "85640",
      "name": "사회교육시설",
      "children": []
    },
    {
      "code": "85640",
      "name": "직원훈련기관",
      "children": [
        {
          "code": "85650",
          "name": "직원 훈련기관"
        }
      ]
    },
    {
      "code": "8565",
      "name": "기술 및 직업훈련학원",
      "children": [
        {
          "code": "8566",
          "name": "기술 및 직업 훈련학원"
        }
      ]
    },
    {
      "code": "8565",
      "name": "직원훈련기관",
      "children": []
    },
    {
      "code": "85650",
      "name": "직원훈련기관",
      "children": []
    },
    {
      "code": "85651",
      "name": "운전학원",
      "children": [
        {
          "code": "85661",
          "name": "운전학원"
        }
      ]
    },
    {
      "code": "85659",
      "name": "기타 기술 및 직업훈련학원",
      "children": [
        {
          "code": "85669",
          "name": "기타 기술 및 직업 훈련학원"
        }
      ]
    },
    {
      "code": "8566",
      "name": "기술 및 직업훈련학원",
      "children": []
    },
    {
      "code": "85661",
      "name": "운전학원",
      "children": []
    },
    {
      "code": "85669",
      "name": "기타 기술 및 직업훈련학원",
      "children": []
    },
    {
      "code": "8569",
      "name": "그 외 기타 교육기관",
      "children": []
    },
    {
      "code": "8569",
      "name": "그외 기타 교육기관",
      "children": [
        {
          "code": "8561",
          "name": "스포츠 및 레크리에이션 교육기관"
        }
      ]
    },
    {
      "code": "85691",
      "name": "컴퓨터 학원",
      "children": []
    },
    {
      "code": "85699",
      "name": "그 외 기타 분류 안된 교육기관",
      "children": []
    },
    {
      "code": "85699",
      "name": "그외 기타 분류안된 교육기관",
      "children": [
        {
          "code": "85614",
          "name": "청소년 수련시설 운영업"
        }
      ]
    },
    {
      "code": "857",
      "name": "교육지원 서비스업",
      "children": []
    },
    {
      "code": "8570",
      "name": "교육지원 서비스업",
      "children": []
    },
    {
      "code": "85701",
      "name": "교육관련 자문 및 평가업",
      "children": []
    },
    {
      "code": "85709",
      "name": "기타 교육지원 서비스업",
      "children": []
    },
    {
      "code": "86",
      "name": "보건업",
      "children": []
    },
    {
      "code": "861",
      "name": "병원",
      "children": []
    },
    {
      "code": "8610",
      "name": "병원",
      "children": []
    },
    {
      "code": "86101",
      "name": "종합 병원",
      "children": []
    },
    {
      "code": "86102",
      "name": "일반 병원",
      "children": [
        {
          "code": "86105",
          "name": "요양병원"
        }
      ]
    },
    {
      "code": "86103",
      "name": "치과 병원",
      "children": []
    },
    {
      "code": "86104",
      "name": "한방 병원",
      "children": []
    },
    {
      "code": "86105",
      "name": "요양 병원",
      "children": []
    },
    {
      "code": "862",
      "name": "의원",
      "children": []
    },
    {
      "code": "8620",
      "name": "의원",
      "children": []
    },
    {
      "code": "86201",
      "name": "일반 의원",
      "children": []
    },
    {
      "code": "86202",
      "name": "치과 의원",
      "children": []
    },
    {
      "code": "86203",
      "name": "한의원",
      "children": []
    },
    {
      "code": "86204",
      "name": "방사선 진단 및 병리 검사 의원",
      "children": []
    },
    {
      "code": "86204",
      "name": "방사선진단 및 병리검사 의원",
      "children": []
    },
    {
      "code": "863",
      "name": "공중 보건 의료업",
      "children": []
    },
    {
      "code": "8630",
      "name": "공중 보건 의료업",
      "children": []
    },
    {
      "code": "86300",
      "name": "공중 보건 의료업",
      "children": []
    },
    {
      "code": "869",
      "name": "기타 보건업",
      "children": []
    },
    {
      "code": "8690",
      "name": "기타 보건업",
      "children": []
    },
    {
      "code": "86901",
      "name": "앰뷸런스 서비스업",
      "children": []
    },
    {
      "code": "86902",
      "name": "유사 의료업",
      "children": []
    },
    {
      "code": "86909",
      "name": "그 외 기타 보건업",
      "children": []
    },
    {
      "code": "86909",
      "name": "그외 기타 보건업",
      "children": []
    },
    {
      "code": "87",
      "name": "사회복지 서비스업",
      "children": []
    },
    {
      "code": "871",
      "name": "거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "8711",
      "name": "노인 거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "87111",
      "name": "노인 요양 복지시설 운영업",
      "children": []
    },
    {
      "code": "87112",
      "name": "노인 양로 복지시설 운영업",
      "children": []
    },
    {
      "code": "8712",
      "name": "심신장애인 거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "87121",
      "name": "신체 부자유자 거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "87122",
      "name": "정신질환, 정신지체 및 약물 중독자 거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "87122",
      "name": "정신질환, 정신지체 및 약물중독자 거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "8713",
      "name": "기타 거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "87131",
      "name": "아동 및 부녀자 거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "87139",
      "name": "그 외 기타 거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "87139",
      "name": "그외 기타 거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "872",
      "name": "비거주 복지시설 운영업",
      "children": []
    },
    {
      "code": "8721",
      "name": "보육시설 운영업",
      "children": []
    },
    {
      "code": "87210",
      "name": "보육시설 운영업",
      "children": []
    },
    {
      "code": "8729",
      "name": "기타 비거주 복지 서비스업",
      "children": []
    },
    {
      "code": "87291",
      "name": "직업재활원 운영업",
      "children": []
    },
    {
      "code": "87292",
      "name": "종합복지관 운영업",
      "children": []
    },
    {
      "code": "87293",
      "name": "방문 복지서비스 제공업",
      "children": []
    },
    {
      "code": "87294",
      "name": "사회복지 상담서비스 제공업",
      "children": []
    },
    {
      "code": "87299",
      "name": "그 외 기타 비거주 복지 서비스업",
      "children": []
    },
    {
      "code": "87299",
      "name": "그외 기타 비거주 복지 서비스업",
      "children": [
        {
          "code": "87292",
          "name": "종합복지관 운영업"
        },
        {
          "code": "87293",
          "name": "방문 복지서비스 제공업"
        },
        {
          "code": "87294",
          "name": "사회복지 상담 서비스 제공업"
        }
      ]
    },
    {
      "code": "90",
      "name": "창작, 예술 및 여가관련 서비스업",
      "children": [
        {
          "code": "75",
          "name": "사업 지원 서비스업"
        }
      ]
    },
    {
      "code": "901",
      "name": "창작 및 예술관련 서비스업",
      "children": [
        {
          "code": "751",
          "name": "고용 알선 및 인력 공급업"
        }
      ]
    },
    {
      "code": "9011",
      "name": "공연시설 운영업",
      "children": []
    },
    {
      "code": "90110",
      "name": "공연시설 운영업",
      "children": []
    },
    {
      "code": "9012",
      "name": "공연단체",
      "children": []
    },
    {
      "code": "90121",
      "name": "연극단체",
      "children": []
    },
    {
      "code": "90122",
      "name": "무용 및 음악단체",
      "children": []
    },
    {
      "code": "90123",
      "name": "기타 공연단체",
      "children": []
    },
    {
      "code": "9013",
      "name": "자영 예술가",
      "children": []
    },
    {
      "code": "90131",
      "name": "공연 예술가",
      "children": []
    },
    {
      "code": "90132",
      "name": "비공연 예술가",
      "children": []
    },
    {
      "code": "9019",
      "name": "기타 창작 및 예술관련 서비스업",
      "children": [
        {
          "code": "7512",
          "name": "인력 공급업"
        }
      ]
    },
    {
      "code": "90191",
      "name": "공연 기획업",
      "children": []
    },
    {
      "code": "90192",
      "name": "공연 및 제작관련 대리업",
      "children": [
        {
          "code": "90199",
          "name": "그 외 기타 창작 및 예술관련 서비스업"
        },
        {
          "code": "75121",
          "name": "임시 및 일용 인력 공급업"
        }
      ]
    },
    {
      "code": "90199",
      "name": "그 외 기타 창작 및 예술관련 서비스업",
      "children": []
    },
    {
      "code": "90199",
      "name": "그외 기타 창작 및 예술관련 서비스업",
      "children": []
    },
    {
      "code": "902",
      "name": "도서관, 사적지 및 유사 여가관련 서비스업",
      "children": []
    },
    {
      "code": "9021",
      "name": "도서관, 기록보존소 및 독서실 운영업",
      "children": []
    },
    {
      "code": "90211",
      "name": "도서관 및 기록보존소 운영업",
      "children": []
    },
    {
      "code": "90212",
      "name": "독서실 운영업",
      "children": []
    },
    {
      "code": "9022",
      "name": "박물관 및 사적지 관리 운영업",
      "children": []
    },
    {
      "code": "90221",
      "name": "박물관 운영업",
      "children": []
    },
    {
      "code": "90222",
      "name": "사적지 관리 운영업",
      "children": []
    },
    {
      "code": "9023",
      "name": "식물원, 동물원 및 자연공원 운영업",
      "children": []
    },
    {
      "code": "90231",
      "name": "식물원 및 동물원 운영업",
      "children": []
    },
    {
      "code": "90232",
      "name": "자연공원 운영업",
      "children": []
    },
    {
      "code": "9029",
      "name": "기타 도서관, 사적지 및 유사 여가관련 서비스업",
      "children": []
    },
    {
      "code": "9029",
      "name": "기타 유사 여가관련 서비스업",
      "children": []
    },
    {
      "code": "90290",
      "name": "기타 도서관, 사적지 및 유사 여가관련 서비스업",
      "children": []
    },
    {
      "code": "90290",
      "name": "기타 유사 여가관련 서비스업",
      "children": []
    },
    {
      "code": "91",
      "name": "스포츠 및 오락관련 서비스업",
      "children": [
        {
          "code": "55",
          "name": "숙박업"
        },
        {
          "code": "85",
          "name": "교육 서비스업"
        }
      ]
    },
    {
      "code": "911",
      "name": "스포츠 서비스업",
      "children": []
    },
    {
      "code": "9111",
      "name": "경기장 운영업",
      "children": []
    },
    {
      "code": "91111",
      "name": "실내 경기장 운영업",
      "children": []
    },
    {
      "code": "91112",
      "name": "실외 경기장 운영업",
      "children": []
    },
    {
      "code": "91113",
      "name": "경주장 및 동물 경기장 운영업",
      "children": []
    },
    {
      "code": "91113",
      "name": "경주장 운영업",
      "children": []
    },
    {
      "code": "9112",
      "name": "골프장 및 스키장 운영업",
      "children": []
    },
    {
      "code": "91121",
      "name": "골프장 운영업",
      "children": []
    },
    {
      "code": "91122",
      "name": "스키장 운영업",
      "children": []
    },
    {
      "code": "9113",
      "name": "기타 스포츠시설 운영업",
      "children": []
    },
    {
      "code": "91131",
      "name": "종합 스포츠시설 운영업",
      "children": []
    },
    {
      "code": "91132",
      "name": "체력단련시설 운영업",
      "children": []
    },
    {
      "code": "91133",
      "name": "수영장 운영업",
      "children": []
    },
    {
      "code": "91134",
      "name": "볼링장 운영업",
      "children": []
    },
    {
      "code": "91135",
      "name": "당구장 운영업",
      "children": []
    },
    {
      "code": "91136",
      "name": "골프연습장 운영업",
      "children": []
    },
    {
      "code": "91139",
      "name": "그 외 기타 스포츠시설 운영업",
      "children": []
    },
    {
      "code": "91139",
      "name": "그외 기타 스포츠시설 운영업",
      "children": []
    },
    {
      "code": "9119",
      "name": "기타 스포츠 서비스업",
      "children": []
    },
    {
      "code": "91191",
      "name": "스포츠 클럽 운영업",
      "children": []
    },
    {
      "code": "91199",
      "name": "그 외 기타 스포츠 서비스업",
      "children": []
    },
    {
      "code": "91199",
      "name": "그외 기타 스포츠 서비스업",
      "children": []
    },
    {
      "code": "912",
      "name": "유원지 및 기타 오락관련 서비스업",
      "children": [
        {
          "code": "551",
          "name": "일반 및 생활 숙박시설 운영업"
        },
        {
          "code": "856",
          "name": "기타 교육기관"
        }
      ]
    },
    {
      "code": "9121",
      "name": "유원지 및 테마파크 운영업",
      "children": []
    },
    {
      "code": "91210",
      "name": "유원지 및 테마파크 운영업",
      "children": []
    },
    {
      "code": "9122",
      "name": "오락장 운영업",
      "children": []
    },
    {
      "code": "91221",
      "name": "전자 게임장 운영업",
      "children": []
    },
    {
      "code": "91222",
      "name": "컴퓨터 게임방 운영업",
      "children": []
    },
    {
      "code": "91223",
      "name": "노래연습장 운영업",
      "children": []
    },
    {
      "code": "91229",
      "name": "기타 오락장 운영업",
      "children": []
    },
    {
      "code": "9123",
      "name": "수상오락 서비스업",
      "children": []
    },
    {
      "code": "91231",
      "name": "낚시장 운영업",
      "children": []
    },
    {
      "code": "91239",
      "name": "기타 수상오락 서비스업",
      "children": []
    },
    {
      "code": "9124",
      "name": "갬블링 및 베팅업",
      "children": []
    },
    {
      "code": "9124",
      "name": "사행시설 관리 및 운영업",
      "children": []
    },
    {
      "code": "91241",
      "name": "복권발행 및 판매업",
      "children": []
    },
    {
      "code": "91249",
      "name": "기타 갬블링 및 베팅업",
      "children": []
    },
    {
      "code": "91249",
      "name": "기타 사행시설 관리 및 운영업",
      "children": [
        {
          "code": "91242",
          "name": "카지노 운영업"
        }
      ]
    },
    {
      "code": "9129",
      "name": "그 외 기타 오락관련 서비스업",
      "children": []
    },
    {
      "code": "9129",
      "name": "그외 기타 오락관련 서비스업",
      "children": [
        {
          "code": "5510",
          "name": "일반 및 생활 숙박시설 운영업"
        },
        {
          "code": "8561",
          "name": "스포츠 및 레크리에이션 교육기관"
        }
      ]
    },
    {
      "code": "91291",
      "name": "무도장 운영업",
      "children": []
    },
    {
      "code": "91292",
      "name": "체육공원 및 유사 공원 운영업",
      "children": []
    },
    {
      "code": "91293",
      "name": "기원 운영업",
      "children": []
    },
    {
      "code": "91299",
      "name": "그 외 기타 분류 안된 오락관련 서비스업",
      "children": []
    },
    {
      "code": "91299",
      "name": "그외 기타 분류안된 오락관련 서비스업",
      "children": [
        {
          "code": "55109",
          "name": "기타 일반 및 생활 숙박시설 운영업"
        },
        {
          "code": "85614",
          "name": "청소년 수련시설 운영업"
        }
      ]
    },
    {
      "code": "94",
      "name": "협회 및 단체",
      "children": []
    },
    {
      "code": "941",
      "name": "산업 및 전문가 단체",
      "children": []
    },
    {
      "code": "9411",
      "name": "산업 단체",
      "children": []
    },
    {
      "code": "94110",
      "name": "산업 단체",
      "children": []
    },
    {
      "code": "9412",
      "name": "전문가 단체",
      "children": []
    },
    {
      "code": "94120",
      "name": "전문가 단체",
      "children": []
    },
    {
      "code": "942",
      "name": "노동조합",
      "children": []
    },
    {
      "code": "9420",
      "name": "노동조합",
      "children": []
    },
    {
      "code": "94200",
      "name": "노동조합",
      "children": []
    },
    {
      "code": "949",
      "name": "기타 협회 및 단체",
      "children": []
    },
    {
      "code": "9491",
      "name": "종교 단체",
      "children": []
    },
    {
      "code": "94911",
      "name": "불교 단체",
      "children": []
    },
    {
      "code": "94912",
      "name": "기독교 단체",
      "children": []
    },
    {
      "code": "94913",
      "name": "천주교 단체",
      "children": []
    },
    {
      "code": "94914",
      "name": "민족종교 단체",
      "children": []
    },
    {
      "code": "94919",
      "name": "기타 종교 단체",
      "children": []
    },
    {
      "code": "9492",
      "name": "정치 단체",
      "children": []
    },
    {
      "code": "94920",
      "name": "정치 단체",
      "children": []
    },
    {
      "code": "9493",
      "name": "시민운동 단체",
      "children": []
    },
    {
      "code": "94931",
      "name": "환경운동 단체",
      "children": []
    },
    {
      "code": "94939",
      "name": "기타 시민운동 단체",
      "children": []
    },
    {
      "code": "9499",
      "name": "그 외 기타 협회 및 단체",
      "children": []
    },
    {
      "code": "9499",
      "name": "그외 기타 협회 및 단체",
      "children": []
    },
    {
      "code": "94990",
      "name": "그 외 기타 협회 및 단체",
      "children": []
    },
    {
      "code": "94990",
      "name": "그외 기타 협회 및 단체",
      "children": []
    },
    {
      "code": "95",
      "name": "개인 및 소비용품 수리업",
      "children": []
    },
    {
      "code": "95",
      "name": "수리업",
      "children": [
        {
          "code": "34",
          "name": "산업용 기계 및 장비 수리업"
        }
      ]
    },
    {
      "code": "951",
      "name": "기계 및 장비 수리업",
      "children": [
        {
          "code": "340",
          "name": "산업용 기계 및 장비 수리업"
        }
      ]
    },
    {
      "code": "951",
      "name": "컴퓨터 및 통신장비 수리업",
      "children": []
    },
    {
      "code": "9511",
      "name": "일반 기계 수리업",
      "children": [
        {
          "code": "3401",
          "name": "일반 기계류 수리업"
        }
      ]
    },
    {
      "code": "9511",
      "name": "컴퓨터 및 주변 기기 수리업",
      "children": []
    },
    {
      "code": "95110",
      "name": "컴퓨터 및 주변 기기 수리업",
      "children": []
    },
    {
      "code": "95111",
      "name": "건설·광업용 기계 및 장비 수리업",
      "children": [
        {
          "code": "34011",
          "name": "건설ㆍ광업용 기계 및 장비 수리업"
        }
      ]
    },
    {
      "code": "95119",
      "name": "기타 일반 기계 및 장비 수리업",
      "children": [
        {
          "code": "34019",
          "name": "기타 일반 기계 및 장비 수리업"
        }
      ]
    },
    {
      "code": "9512",
      "name": "전기, 전자, 통신 및 정밀기기 수리업",
      "children": [
        {
          "code": "3401",
          "name": "일반 기계류 수리업"
        },
        {
          "code": "3402",
          "name": "전기ㆍ전자 및 정밀 기기 수리업"
        },
        {
          "code": "9511",
          "name": "컴퓨터 및 주변 기기 수리업"
        }
      ]
    },
    {
      "code": "9512",
      "name": "통신장비 수리업",
      "children": []
    },
    {
      "code": "95120",
      "name": "통신장비 수리업",
      "children": []
    },
    {
      "code": "95121",
      "name": "컴퓨터 및 사무용 기기 수리업",
      "children": [
        {
          "code": "34019",
          "name": "기타 일반 기계 및 장비 수리업"
        },
        {
          "code": "95110",
          "name": "컴퓨터 및 주변 기기 수리업"
        }
      ]
    },
    {
      "code": "95122",
      "name": "통신장비 수리업",
      "children": [
        {
          "code": "95120",
          "name": "통신장비 수리업"
        }
      ]
    },
    {
      "code": "95123",
      "name": "전기 및 정밀기기 수리업",
      "children": [
        {
          "code": "34020",
          "name": "전기ㆍ전자 및 정밀 기기 수리업"
        }
      ]
    },
    {
      "code": "952",
      "name": "자동차 및 모터사이클 수리업",
      "children": []
    },
    {
      "code": "9521",
      "name": "자동차 수리 및 세차업",
      "children": []
    },
    {
      "code": "95211",
      "name": "자동차 종합 수리업",
      "children": []
    },
    {
      "code": "95212",
      "name": "자동차 전문 수리업",
      "children": []
    },
    {
      "code": "95213",
      "name": "자동차 세차업",
      "children": []
    },
    {
      "code": "9522",
      "name": "모터사이클 수리업",
      "children": [
        {
          "code": "9521",
          "name": "자동차 수리 및 세차업"
        }
      ]
    },
    {
      "code": "95220",
      "name": "모터사이클 수리업",
      "children": [
        {
          "code": "95212",
          "name": "자동차 전문 수리업"
        }
      ]
    },
    {
      "code": "953",
      "name": "개인 및 가정용품 수리업",
      "children": [
        {
          "code": "951",
          "name": "컴퓨터 및 통신장비 수리업"
        }
      ]
    },
    {
      "code": "9531",
      "name": "가전제품 수리업",
      "children": [
        {
          "code": "9512",
          "name": "통신장비 수리업"
        }
      ]
    },
    {
      "code": "95310",
      "name": "가전제품 수리업",
      "children": [
        {
          "code": "95120",
          "name": "통신장비 수리업"
        }
      ]
    },
    {
      "code": "9539",
      "name": "기타 개인 및 가정용품 수리업",
      "children": []
    },
    {
      "code": "95391",
      "name": "신발, 의복 및 기타 가정용 직물제품 수리업",
      "children": [
        {
          "code": "95392",
          "name": "가죽, 가방 및 신발 수리업"
        }
      ]
    },
    {
      "code": "95391",
      "name": "의복 및 기타 가정용 직물제품 수리업",
      "children": []
    },
    {
      "code": "95392",
      "name": "가죽, 가방 및 신발 수리업",
      "children": []
    },
    {
      "code": "95392",
      "name": "시계, 귀금속 및 악기 수리업",
      "children": [
        {
          "code": "95393",
          "name": "시계, 귀금속 및 악기 수리업"
        }
      ]
    },
    {
      "code": "95393",
      "name": "시계, 귀금속 및 악기 수리업",
      "children": []
    },
    {
      "code": "95399",
      "name": "그 외 기타 개인 및 가정용품 수리업",
      "children": []
    },
    {
      "code": "95399",
      "name": "그외 기타 개인 및 가정용품 수리업",
      "children": []
    },
    {
      "code": "96",
      "name": "기타 개인 서비스업",
      "children": []
    },
    {
      "code": "961",
      "name": "미용, 욕탕 및 유사 서비스업",
      "children": []
    },
    {
      "code": "9611",
      "name": "이용 및 미용업",
      "children": []
    },
    {
      "code": "96111",
      "name": "이용업",
      "children": []
    },
    {
      "code": "96112",
      "name": "두발 미용업",
      "children": []
    },
    {
      "code": "96112",
      "name": "두발미용업",
      "children": []
    },
    {
      "code": "96113",
      "name": "피부 미용업",
      "children": []
    },
    {
      "code": "96113",
      "name": "피부미용업",
      "children": []
    },
    {
      "code": "96119",
      "name": "기타 미용업",
      "children": []
    },
    {
      "code": "96119",
      "name": "기타미용업",
      "children": []
    },
    {
      "code": "9612",
      "name": "욕탕, 마사지 및 기타 미용관련 서비스업",
      "children": []
    },
    {
      "code": "9612",
      "name": "욕탕, 마사지 및 기타 신체관리 서비스업",
      "children": []
    },
    {
      "code": "96121",
      "name": "욕탕업",
      "children": []
    },
    {
      "code": "96122",
      "name": "마사지업",
      "children": []
    },
    {
      "code": "96129",
      "name": "기타 미용관련 서비스업",
      "children": [
        {
          "code": "96122",
          "name": "마사지업"
        }
      ]
    },
    {
      "code": "96129",
      "name": "체형 등 기타 신체관리 서비스업",
      "children": []
    },
    {
      "code": "969",
      "name": "그 외 기타 개인 서비스업",
      "children": []
    },
    {
      "code": "969",
      "name": "그외 기타 개인 서비스업",
      "children": []
    },
    {
      "code": "9691",
      "name": "세탁업",
      "children": []
    },
    {
      "code": "96911",
      "name": "산업용 세탁업",
      "children": []
    },
    {
      "code": "96912",
      "name": "가정용 세탁업",
      "children": []
    },
    {
      "code": "96913",
      "name": "세탁물 공급업",
      "children": []
    },
    {
      "code": "9692",
      "name": "장례식장 및 관련 서비스업",
      "children": []
    },
    {
      "code": "96921",
      "name": "장례식장 및 장의관련 서비스업",
      "children": []
    },
    {
      "code": "96922",
      "name": "화장, 묘지분양 및 관리업",
      "children": []
    },
    {
      "code": "96922",
      "name": "화장터 운영, 묘지 분양 및 관리업",
      "children": []
    },
    {
      "code": "9699",
      "name": "그 외 기타 분류 안된 개인 서비스업",
      "children": []
    },
    {
      "code": "9699",
      "name": "그외 기타 분류안된 개인 서비스업",
      "children": []
    },
    {
      "code": "96991",
      "name": "예식장업",
      "children": []
    },
    {
      "code": "96992",
      "name": "점술 및 유사 서비스업",
      "children": []
    },
    {
      "code": "96993",
      "name": "개인 간병 및 유사 서비스업",
      "children": []
    },
    {
      "code": "96993",
      "name": "개인 간병인 및 유사 서비스업",
      "children": []
    },
    {
      "code": "96994",
      "name": "결혼 상담 및 준비 서비스업",
      "children": []
    },
    {
      "code": "96994",
      "name": "맞선주선 및 결혼 상담업",
      "children": []
    },
    {
      "code": "96995",
      "name": "애완동물 장묘 및 보호 서비스업",
      "children": []
    },
    {
      "code": "96999",
      "name": "그 외 기타 달리 분류되지 않은 개인 서비스업",
      "children": []
    },
    {
      "code": "96999",
      "name": "그외 기타 달리 분류되지 않은 개인 서비스업",
      "children": [
        {
          "code": "96994",
          "name": "결혼 상담 및 준비 서비스업"
        }
      ]
    },
    {
      "code": "97",
      "name": "가구 내 고용활동",
      "children": []
    },
    {
      "code": "97",
      "name": "가구내 고용활동",
      "children": []
    },
    {
      "code": "970",
      "name": "가구 내 고용활동",
      "children": []
    },
    {
      "code": "970",
      "name": "가구내 고용활동",
      "children": []
    },
    {
      "code": "9700",
      "name": "가구 내 고용활동",
      "children": []
    },
    {
      "code": "9700",
      "name": "가구내 고용활동",
      "children": []
    },
    {
      "code": "97000",
      "name": "가구 내 고용활동",
      "children": []
    },
    {
      "code": "97000",
      "name": "가구내 고용활동",
      "children": []
    },
    {
      "code": "98",
      "name": "달리 분류되지 않은 자가소비를 위한 가구의 재화 및 서비스 생산활동",
      "children": []
    },
    {
      "code": "981",
      "name": "자가 소비를 위한 가사 생산 활동",
      "children": []
    },
    {
      "code": "9810",
      "name": "자가 소비를 위한 가사 생산 활동",
      "children": []
    },
    {
      "code": "98100",
      "name": "자가 소비를 위한 가사 생산 활동",
      "children": []
    },
    {
      "code": "982",
      "name": "자가 소비를 위한 가사 서비스 활동",
      "children": []
    },
    {
      "code": "9820",
      "name": "자가 소비를 위한 가사 서비스 활동",
      "children": []
    },
    {
      "code": "98200",
      "name": "자가 소비를 위한 가사 서비스 활동",
      "children": []
    },
    {
      "code": "99",
      "name": "국제 및 외국기관",
      "children": []
    },
    {
      "code": "990",
      "name": "국제 및 외국기관",
      "children": []
    },
    {
      "code": "9900",
      "name": "국제 및 외국기관",
      "children": []
    },
    {
      "code": "99001",
      "name": "주한 외국공관",
      "children": []
    },
    {
      "code": "99009",
      "name": "기타 국제 및 외국기관",
      "children": []
    },
    {
      "code": "A",
      "name": "농업, 임업 및 어업(01~03)",
      "children": []
    },
    {
      "code": "B",
      "name": "광업(05~08)",
      "children": [
        {
          "code": "C",
          "name": "제조업(10~34)"
        }
      ]
    },
    {
      "code": "C",
      "name": "제조업(10~33)",
      "children": []
    },
    {
      "code": "C",
      "name": "제조업(10~34)",
      "children": []
    },
    {
      "code": "D",
      "name": "전기, 가스, 증기 및 공기조절 공급업(35)",
      "children": []
    },
    {
      "code": "D",
      "name": "전기, 가스, 증기 및 수도사업(35~36)",
      "children": [
        {
          "code": "E",
          "name": "수도, 하수 및 폐기물 처리, 원료 재생업(36~39)"
        }
      ]
    },
    {
      "code": "E",
      "name": "수도, 하수 및 폐기물 처리, 원료 재생업(36 ~ 39)",
      "children": []
    },
    {
      "code": "E",
      "name": "하수 · 폐기물 처리, 원료재생 및 환경복원업(37~39)",
      "children": []
    },
    {
      "code": "F",
      "name": "건설업(41~42)",
      "children": []
    },
    {
      "code": "G",
      "name": "도매 및 소매업(45~47)",
      "children": []
    },
    {
      "code": "H",
      "name": "운수 및 창고업(49~52)",
      "children": []
    },
    {
      "code": "H",
      "name": "운수업(49~52)",
      "children": [
        {
          "code": "G",
          "name": "도매 및 소매업(45~47)"
        }
      ]
    },
    {
      "code": "I",
      "name": "숙박 및 음식점업(55~56)",
      "children": [
        {
          "code": "P",
          "name": "교육 서비스업(85)"
        }
      ]
    },
    {
      "code": "J",
      "name": "정보통신업(58~63)",
      "children": []
    },
    {
      "code": "J",
      "name": "출판, 영상, 방송통신 및 정보서비스업(58~63)",
      "children": []
    },
    {
      "code": "K",
      "name": "금융 및 보험업(64~66)",
      "children": [
        {
          "code": "O",
          "name": "공공행정, 국방 및 사회보장 행정(84)"
        }
      ]
    },
    {
      "code": "L",
      "name": "부동산업 및 임대업(68~69)",
      "children": [
        {
          "code": "N",
          "name": "사업시설 관리, 사업 지원 및 임대 서비스업(74~76)"
        }
      ]
    },
    {
      "code": "L",
      "name": "부동산업(68)",
      "children": []
    },
    {
      "code": "M",
      "name": "전문, 과학 및 기술 서비스업(70~73)",
      "children": [
        {
          "code": "A",
          "name": "농업, 임업 및 어업(01~03)"
        },
        {
          "code": "C",
          "name": "제조업(10~34)"
        },
        {
          "code": "K",
          "name": "금융 및 보험업(64~66)"
        }
      ]
    },
    {
      "code": "N",
      "name": "사업시설 관리, 사업 지원 및 임대 서비스업(74~76)",
      "children": []
    },
    {
      "code": "N",
      "name": "사업시설관리 및 사업지원 서비스업(74~75)",
      "children": [
        {
          "code": "E",
          "name": "수도, 하수 및 폐기물 처리, 원료 재생업(36~39)"
        },
        {
          "code": "M",
          "name": "전문, 과학 및 기술 서비스업(70~73)"
        }
      ]
    },
    {
      "code": "O",
      "name": "공공행정, 국방 및 사회보장 행정(84)",
      "children": []
    },
    {
      "code": "P",
      "name": "교육 서비스업(85)",
      "children": []
    },
    {
      "code": "Q",
      "name": "보건업 및 사회복지 서비스업(86~87)",
      "children": []
    },
    {
      "code": "R",
      "name": "예술, 스포츠 및 여가관련 서비스업(90~91)",
      "children": [
        {
          "code": "I",
          "name": "숙박 및 음식점업(55~56)"
        },
        {
          "code": "N",
          "name": "사업시설 관리, 사업 지원 및 임대 서비스업(74~76)"
        },
        {
          "code": "P",
          "name": "교육 서비스업(85)"
        }
      ]
    },
    {
      "code": "S",
      "name": "협회 및 단체, 수리  및 기타 개인 서비스업(94~96)",
      "children": [
        {
          "code": "C",
          "name": "제조업(10~34)"
        }
      ]
    },
    {
      "code": "S",
      "name": "협회 및 단체, 수리 및 기타 개인 서비스업(94~96)",
      "children": []
    },
    {
      "code": "T",
      "name": "가구 내 고용활동 및 달리 분류되지 않은 자가소비 생산활동(97~98)",
      "children": []
    },
    {
      "code": "T",
      "name": "가구내 고용활동 및 달리 분류되지 않은 자가소비 생산활동(97~98)",
      "children": []
    },
    {
      "code": "U",
      "name": "국제 및 외국기관(99)",
      "children": []
    }
  ]