import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  recordList = [
    {
      cover: 'assets/images/record1.jpg',
      // tslint:disable-next-line:max-line-length
      info: '整體戰略管理 風險防範與控制<br> 預防勝於治療 多一分事前風險管控 少一分事後爭議損失<br> 預防可能存在的法律風險及問題 避免或大幅降低解決糾紛的成本 <br> 全面提升營運績效 同時將風險降至最低 <br>以客戶需求為導向 針對個別產業特性 提供客製化解決方案'
    },
  ];
  businessList = [
    {
      icon: 'assets/images/visibility.svg',
      title: '風險控制',
      info: '風險規避、預防或降低損失',
    },
    {
      icon: 'assets/images/description.svg',
      title: '合約管理',
      info: '合約審閱、擬稿、修訂、歸檔等全方位管理',
    },
    {
      icon: 'assets/images/question_answer.svg',
      title: '爭議處理',
      info: '經營權、債務、勞資、智財權等常見爭議',
    },
    {
      icon: 'assets/images/camera.svg',
      title: '大陸事務',
      info: '大陸投資、商業活動、法律諮詢',
    },
  ];

  roleList = [
    {
      title: '鄭幸萊title',
      info: '鄭幸萊履歷'
    },
    {
      title: 'Joytitle',
      info: 'Joy履歷'
    },
    {
      title: '黃玟錡title',
      info: '黃玟錡履歷'
    },
    {
      title: '宮少朋title',
      info: '宮少朋履歷'
    },
    {
      title: '黃敬堯title',
      info: '黃敬堯履歷'
    },
    {
      title: '黃正榮title',
      info: '黃正榮履歷'
    },
  ];

  helpmateList = [
    {
      title: '合作夥伴title',
      info: '合作夥伴履歷'
    },
  ];

  tabIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTab(value) {
    this.tabIndex = value;
  }

}
