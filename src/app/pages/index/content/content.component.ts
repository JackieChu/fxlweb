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
      info: '整體戰略管理 風險防範與控制<br> 預防勝於治療 多一分事前風險管控 少一分事後爭議損失<br> 預防可能存在的法律風險及問題 避免或大幅降低解決糾紛的成本 <br> 全面提升營運績效 同時將風險降至最低以 <br>客戶需求為導向 針對個別產業特性 提供客製化解決方案'
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
      title: '鄭幸萊  <small>律師</small>',
      info: `<p><b>證照|學歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 中華人民共和國律師證書</li>

      <li>● 中華人民共和國法律執業資格</li>

      <li>● 英國City & Guilds Level 4 Higher Professional Diploma in Business Administration</li>

      <li>● 法國史特拉斯堡大學國際智慧財產權研究中心 智慧財產法法學碩士</li>

      <li>● 國立高雄第一科技大學應用英語系學士</li>

      <li>● 文藻外語大學法語系副學士</li>

      <p><b>經歷</b></p>

      <li>● 上海福一律師事務所</li>

      <li>● 上海理慈律師事務所</li>

      <li>● 理慈國際科技法律事務所</li>

      <li>● 宏景智權專利商標法律事務所</li>

      <li>● 統立開發股份有限公司</li>

      <li>● 2009世界運動會組委會基金會</li>

      <p><b>專長</b></p>
      <li>● 公司法律業務、智慧財產權、跨境投資、企業管理</li>
      <p><b>語言</b></p>
      <li>● 中文、英語、法語</li></ul>`
    },
    {
      title: 'Joy <small>顧問</small>',
      info: `<p><b>證照|學歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 東吳大學法學碩士</li>

      <li>● 國防管理學院法學士</li>

      <li>● 考試院乙等特考及格</li>

      <li>● 政府採購法採購專業人員考試及格</li>

      <p><b>經歷</b></p>

      <li>● 國防部最高軍事法院法官</li>

      <li>● 國防部高等軍事法院法官</li>

      <li>● 國防部高等軍事法院檢察署檢察官</li>

      <li>● 國防部法制司法制官</li>

      <li>● 國防部訴願委員會秘書</li>

      <li>● 國防部南部地方軍事法院檢察署檢察官</li>

      <p><b>專長</b></p>
      <li>● 公司制度規章制定、 政府機關行政實務 、行政訴訟、公共工程採購實務、 工程合約擬定與審查、工程履約管理、法院審檢實務</li></ul>`
    },
    {
      title: '黃玟錡  <small>律師</small>',
      info: `<p><b>證照|學歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 中華民國律師執照</li>

      <li>●中華人民共和國法律執業資格</li>

      <li>● 公務人員特種考試司法人員四等考試及格證書</li>

      <li>● 國際貿易大會考合格證書</li>

      <li>● 東吳大學 科技法律研究所</li>

      <li>●文藻外語學院英文系學士</li>

      <p><b>經歷</b></p>

      <li>● 臺灣高等法院</li>

      <li>● 衡律法律事務所</li>

      <li>● 財團法人法律扶助基金會台北、新北、士林分會</li>

      <li>● 台北市政府勞動局</li>

      <li>● 台北市勞動力重建運用處</li>

      <li>● 經濟部智慧財產局「智慧財產權服務團」</li>

      <p><b>專長</b></p>
      <li>● 智慧財產權、勞資爭議、金融科技法律、一般民事/刑事/行政訴訟代理</li>
      </ul>`
    },
    {
      title: '宮少朋  <small>律師</small>',
      info: `<p><b>證照|經歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 中華人民共和國律師證書</li>

      <li>● 中華人民共和國法律執業資格</li>

      <li>● 上海福一律師事務所 高級合夥人、主任</li>

      <li>● 上海法學會海商法研究會 理事</li>

      <p><b>榮譽</b></p>

      <li>● 2018年上海市普陀區十大優秀青年律師 成功主辦數百起經濟糾紛、信用管理法律服務案件，服務過的客戶包括：科法斯、安卓、金沙江創投、中國平安、西門子、藍格賽喜利得、默克中國、格蘭富水泵、愛普科斯照明、中遠佐敦、海虹老人、金剛化工、PPG塗料、莊信萬豐、北京星和眾工、開利空調、機械工業出版社、東芝照明、北京科華麥太保、貝卡爾特麥克斯特、聖戈斑、上海精泰等</li>

      <p><b>專長</b></p>
      <li>● 公司法律業務、企業信用管理、海商法業務</li></ul>`
    },
    {
      title: '黃敬堯  <small>顧問</small>',
      info: `<p><b>證照|學歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 澳洲阿德雷德大學法學院 商法碩士</li>

      <li>● 台灣彰化師範大學翻譯研究所 口譯組</li>

      <li>● IAEE註冊會展經理證照</li>

      <li>● 澳洲NAATI專業級口譯證照</li>

      <p><b>經歷</b></p>

      <li>● 四川十六加一文化產業發展有限公司 CEO</li>

      <li>● 四川衡力商務咨詢有限公司創始人、總經理</li>

      <li>● 四川語言橋翻譯有限公司會議會展部總監</li>

      <li>● 台灣最高行政法院 法官助理</li>

      <p><b>榮譽</b></p>
      <li>● 成都市對外文化交流與貿易培訓講師</li>
      <li>● 大陸西南民族大學專業學位研究生課程建設團隊負責人、校外導師</li>
      <li>● 大陸西南民族大學碩士專業學位授權點申報答辯專家</li>
      <li>● 大陸三峽大學外國語學院翻譯碩士兼職導師</li>
      <li>● 大陸電子科技大學外國語學院MTI校外導師</li>
      <li>● 四川大學外國語學院校外兼職教師</li>
      <li>● 台灣教育部學海飛揚獎學金</li>
      <p><b>專長</b></p>
      <li>● 堅實的專業知識佐以嫻熟的翻譯技能，擁有10年以上會議口譯經驗，擅長財經商貿、人文法政等領域。長期為UNESCO、UNDP、使（領）館、各級政府部門大型國際會議、論壇、研討會及商務洽談等活動組織、策劃、並實施相關服務</li></ul>`
    },
    {
      title: '黃正榮  <small>顧問</small>',
      info: `<p><b>證照|經歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 台灣經濟部中小企業榮譽指導員</li>

      <li>● 加拿大Seneca College營銷管理</li>

      <li>● 政府顧問全職4年</li>

      <li>● 政府顧問兼職2年</li>
      <li>● 台灣與大陸製造業進出口經驗6年</li>
      <li>● 資訊系統管理經驗23年</li>
      <li>● 歐美經驗27年</li>
      <li>● 民間機構組織經驗18年</li>
      <li>● 輔導近百家協會公會(台灣及國際)</li>
      <li>● 加拿大多倫多非營利機構</li>


      <p><b>榮譽</b></p>

      <li>● 台灣政府頒發大功令及小功令(台灣專案、市政推動、區域整合)</li>

      <p><b>專長</b></p>
      <li>● 全方位經營管理、跨產、官、學、民整合、國際英語談判、協商會議、商業活動、精通英語、中文、廣東話、閩南語</li></ul>`
    },
    {
      title: '合作夥伴',
      info: `<p><b>上海福一律師事務所</b></p>
      <ul style="list-style-type:disc;">
      <li>● 主要業務範圍涉及爭端解決、公司業務、商業合同審核、房地產、智慧財產權、證券與資本市場、境外投資。傳統業務及核心優勢為爭端解決，擁有高素質且經驗豐富的專業訴訟律師團隊</li>
      </ul>`
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
