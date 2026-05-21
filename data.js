/* ============================================================
   DATA — コンテンツ修正はここだけ触る
   ============================================================ */

// --- フラッシュカードデッキ ---
const DECKS = {
  osi:{title:'OSIモデル 7層',badge:'g',icon:'📚',desc:'物理層からアプリ層まで各層の役割を学ぶ',cards:[
    {q:'OSIモデルとは？',a:'<strong>Open Systems Interconnection</strong>モデル。<br>ネットワーク通信を<span class="hl">7層</span>に分けた国際標準の参照モデル。<br>異なるベンダーの機器が通信できるよう標準化。'},
    {q:'第1層（物理層）の役割は？',a:'<strong>Physical Layer</strong><br>ビット（0/1）を電気・光・電波に変換する最下層。<br>ケーブル、ハブ、リピーターが対応。<span class="hl">単位：ビット</span>'},
    {q:'第2層（データリンク層）の役割は？',a:'<strong>Data Link Layer</strong><br>同一ネットワーク内のフレーム転送。<br>MACアドレスで機器を識別。スイッチが対応。<span class="hl">単位：フレーム</span>'},
    {q:'第3層（ネットワーク層）の役割は？',a:'<strong>Network Layer</strong><br>異なるネットワーク間のパケット転送（ルーティング）。<br>IPアドレスで経路決定。ルーターが対応。<span class="hl">単位：パケット</span>'},
    {q:'第4層（トランスポート層）の役割は？',a:'<strong>Transport Layer</strong><br>エンド間の信頼性ある通信を保証。<br><span class="hl">TCP</span>（確実・順序保証）と<span class="hl">UDP</span>（高速・非保証）。<br>ポート番号でアプリを識別。'},
    {q:'第5〜7層の役割は？',a:'<strong>第5 セッション層</strong>：接続の確立・維持・終了<br><strong>第6 プレゼンテーション層</strong>：形式変換・暗号化<br><strong>第7 アプリケーション層</strong>：HTTP・SMTP・DNSなど'},
    {q:'TCPとUDPの違いは？',a:'<span class="term" data-term="tcp">TCP</span>：3ウェイハンドシェイクで接続確立。順序・再送・輻輳制御あり。HTTP/FTP向け。<br><br><span class="term" data-term="udp">UDP</span>：コネクションレス。低遅延だが信頼性なし。動画・ゲーム・DNS向け。'},
    {q:'MACアドレスとIPアドレスの違いは？',a:'<strong>MACアドレス</strong>：NICに固定された<span class="hl">物理アドレス</span>（48bit）。第2層で使用。<br><br><span class="term" data-term="ip">IPアドレス</span>：ネットワーク上の<span class="hl">論理アドレス</span>（IPv4:32bit）。第3層で使用。'},
  ]},
  tcpip:{title:'TCP/IP & プロトコル',badge:'g',icon:'🔌',desc:'DNS・DHCP・NAT・HTTPなど重要プロトコル',cards:[
    {q:'DNSとは？',a:'<strong>Domain Name System</strong><br>ドメイン名→<span class="hl">IPアドレス</span>に変換するシステム。<br>ポート：<span class="hl">53</span>（UDP/TCP）<br>階層構造：ルートDNS→TLDサーバ→権威DNSサーバ'},
    {q:'DHCPとは？',a:'<strong>Dynamic Host Configuration Protocol</strong><br>接続時にIPアドレスを<span class="hl">自動割当</span>。<br>IP・サブネットマスク・GW・DNSを配布。<br>ポート：<span class="hl">67/68</span>（UDP）'},
    {q:'NATとは？',a:'<strong>Network Address Translation</strong><br>プライベートIP→パブリックIPに変換。<br>複数端末が1つのグローバルIPを共有。<br>AWSでは <span class="hl">NAT Gateway</span> が担う。'},
    {q:'HTTPとHTTPSの違いは？',a:'<strong>HTTP</strong>：Webの基本プロトコル。ポート<span class="hl">80</span>。暗号化なし。<br><br><strong>HTTPS</strong>：HTTP＋<span class="hl">TLS</span>暗号化。ポート<span class="hl">443</span>。<br>証明書で認証し盗聴・改ざんを防止。'},
    {q:'サブネットマスクとは？',a:'IPアドレスを<strong>ネットワーク部</strong>と<strong>ホスト部</strong>に分ける。<br>例：<span class="hl">255.255.255.0 = /24</span><br>/24→ホスト8bit→最大254台'},
    {q:'ARPとは？',a:'<strong>Address Resolution Protocol</strong><br>IPアドレス→MACアドレスを解決。<br>同一ネットワーク内でブロードキャスト送信。<br>結果をARPキャッシュに保存。'},
    {q:'ルーティングとは？',a:'パケットを<strong>宛先IPアドレス</strong>で最適経路に転送する仕組み。<br><span class="hl">スタティック</span>：手動設定<br><span class="hl">ダイナミック</span>：OSPF・BGPで自動学習'},
    {q:'主要ポート番号は？',a:'<span class="hl">80</span>:HTTP　<span class="hl">443</span>:HTTPS　<span class="hl">22</span>:SSH<br><span class="hl">25</span>:SMTP　<span class="hl">53</span>:DNS　<span class="hl">3306</span>:MySQL<br><span class="hl">5432</span>:PostgreSQL　<span class="hl">3389</span>:RDP'},
  ]},
  netsec:{title:'ネットワークセキュリティ',badge:'o',icon:'🔒',desc:'FW・VPN・SSL/TLS・DDoS対策',cards:[
    {q:'ファイアウォールとは？',a:'定義した<strong>ルール</strong>に基づき通信を<span class="hl">許可・拒否</span>。<br>ステートフル：セッション追跡<br>ステートレス：パケット単位判断<br>AWSでは <span class="hl">セキュリティグループ</span> が相当。'},
    {q:'VPNとは？',a:'公共インターネット上に<strong>暗号化トンネル</strong>を作る技術。<br><span class="hl">サイト間VPN</span>：拠点間接続<br><span class="hl">クライアントVPN</span>：リモートアクセス<br>プロトコル：IPsec・OpenVPN・WireGuard'},
    {q:'SSL/TLSとは？',a:'通信を<strong>暗号化</strong>し盗聴・改ざんを防ぐプロトコル。<br>証明書で認証→鍵交換→共通鍵で暗号化<br>現在はSSLは脆弱。<span class="hl">TLS 1.3</span> を推奨。'},
    {q:'DMZとは？',a:'インターネットと内部ネットワークの<strong>中間ゾーン</strong>。<br>公開サーバー（Webサーバ等）を配置。<br>外部→DMZ：許可　DMZ→内部：制限<br>AWSのパブリックサブネット構成に相当。'},
    {q:'IDS/IPSとは？',a:'<strong>IDS</strong>：不正アクセスを検知して<span class="hl">通知</span><br><strong>IPS</strong>：不正アクセスを検知して<span class="hl">自動ブロック</span><br>AWSでは <span class="hl">WAF</span>・<span class="hl">GuardDuty</span> が相当。'},
    {q:'DDoS攻撃と対策は？',a:'<strong>Distributed Denial of Service</strong><br>大量リクエストでサービスを<span class="hl">停止</span>させる攻撃。<br>対策：<span class="hl">AWS Shield</span>・<span class="hl">CloudFront</span>・<span class="hl">Auto Scaling</span>'},
    {q:'ゼロトラストセキュリティとは？',a:'「信頼せず常に検証する」考え方。<br>従来：社内ネットは信頼<br>ゼロトラスト：<span class="hl">すべてのアクセスを検証</span><br>AWSでは <span class="hl">IAM + Organizations</span> で実装。'},
    {q:'対称・非対称暗号の違いは？',a:'<strong>対称鍵</strong>：同じ鍵で暗号化・復号。高速。AES<br>課題：鍵の安全な共有が困難<br><strong>非対称鍵</strong>：公開鍵で暗号化・秘密鍵で復号。RSA<br>TLSでは<span class="hl">非対称で鍵交換→対称で暗号化</span>'},
  ]},
  compute:{title:'コンピューティング',badge:'g',icon:'⚙️',desc:'EC2・Lambda・ECS・Auto Scaling',cards:[
    {q:'Amazon EC2とは？',a:'<strong>Elastic Compute Cloud</strong><br>クラウド上の<span class="hl">仮想サーバー</span>。<br>OS・CPU・メモリを自由に選択。<br>例：<span class="hl">t3.micro</span>（汎用）<span class="hl">c5.large</span>（CPU最適化）'},
    {q:'AWS Lambdaとは？',a:'<strong>サーバーレスコンピューティング</strong>。<br>サーバー管理不要でイベント駆動で実行。<br>課金は<span class="hl">実行時間×リクエスト数</span>のみ。最大15分。'},
    {q:'EC2のAuto Scalingとは？',a:'トラフィックに応じてEC2を<strong>自動スケール</strong>する仕組み。<br><span class="hl">スケールアウト</span>：台数増加<br><span class="hl">スケールアップ</span>：サイズ拡大<br>CloudWatchメトリクスに基づき動作。'},
    {q:'ECSとEKSの違いは？',a:'<strong>ECS</strong>：AWSネイティブのコンテナ管理。シンプル。Fargateでサーバーレス化可能。<br><br><strong>EKS</strong>：Kubernetesマネージドサービス。ポータビリティ高・やや複雑。'},
    {q:'EC2の課金モデルは？',a:'<span class="hl">オンデマンド</span>：柔軟だが割高<br><span class="hl">リザーブド</span>：1〜3年予約で最大72%割引<br><span class="hl">スポット</span>：最大90%割引（中断あり）<br><span class="hl">Savings Plans</span>：利用量コミットで割引'},
    {q:'AMIとは？',a:'EC2を起動する<strong>テンプレート</strong>。<br>OS・ソフトウェア・設定を含むスナップショット。<br>ゴールデンAMIで構成を標準化。他リージョンへのコピーも可能。'},
  ]},
  storage:{title:'ストレージ & DB',badge:'o',icon:'💾',desc:'S3・EBS・RDS・DynamoDB・ElastiCache',cards:[
    {q:'Amazon S3とは？',a:'<strong>Simple Storage Service</strong><br>容量無制限のオブジェクトストレージ。<br>耐久性：<span class="hl">99.999999999%（11ナイン）</span><br>用途：静的Webホスティング・バックアップ・データレイク'},
    {q:'S3のストレージクラスは？',a:'<span class="hl">Standard</span>：高頻度アクセス<br><span class="hl">Standard-IA</span>：低頻度・安価（取得料金あり）<br><span class="hl">Glacier</span>：アーカイブ・超低コスト<br><span class="hl">Intelligent-Tiering</span>：自動最適化'},
    {q:'EBSとは？',a:'<strong>Elastic Block Store</strong><br>EC2にアタッチする<span class="hl">ブロックストレージ</span>（仮想SSD/HDD）。<br>同一AZに存在。スナップショットでバックアップ。<br><span class="hl">gp3</span>（汎用）<span class="hl">io2</span>（高IOPS）'},
    {q:'Amazon RDSとは？',a:'<strong>Relational Database Service</strong><br>マネージドリレーショナルDB。<br>対応：<span class="hl">MySQL・PostgreSQL・Oracle・Aurora</span><br>マルチAZで高可用性。自動バックアップ・パッチ適用。'},
    {q:'DynamoDBとは？',a:'フルマネージド<strong>NoSQLデータベース</strong>。<br>キー・バリュー型＋ドキュメント型。<br><span class="hl">ミリ秒以下</span>のレイテンシー。自動スケーリング。<br>Lambdaとの組み合わせが◎'},
    {q:'ElastiCacheとは？',a:'インメモリ<strong>キャッシュ</strong>サービス。<br><span class="hl">Redis</span>：高機能・永続化対応<br><span class="hl">Memcached</span>：シンプル・高速<br>DBへの負荷を軽減し応答速度を向上。'},
  ]},
  netaws:{title:'AWSネットワーキング',badge:'o',icon:'🕸️',desc:'VPC・サブネット・SG・Route53・CloudFront',cards:[
    {q:'Amazon VPCとは？',a:'<strong>Virtual Private Cloud</strong><br>AWS上の<span class="hl">仮想プライベートネットワーク</span>。<br>CIDR・サブネット・ルートテーブル・IGWを設計。<br>リージョン単位（複数AZに配置可能）。'},
    {q:'パブリックとプライベートサブネットの違いは？',a:'<strong>パブリック</strong>：IGWへのルートあり。インターネットと直接通信可能。<br><br><strong>プライベート</strong>：インターネット直接アクセス不可。<span class="hl">NAT Gateway</span>でアウトバウンドのみ可能。'},
    {q:'SGとNACLの違いは？',a:'<strong>セキュリティグループ</strong>：インスタンスレベル。<span class="hl">ステートフル</span>。許可ルールのみ。<br><br><strong>NACL</strong>：サブネットレベル。<span class="hl">ステートレス</span>。許可・拒否ルール。番号順評価。'},
    {q:'Route 53とは？',a:'AWSのマネージド<span class="term" data-term="dns">DNS</span>サービス。<br>ドメイン登録・ヘルスチェック・フェイルオーバー。<br>ルーティングポリシー：加重・地理・レイテンシー等。'},
    {q:'CloudFrontとは？',a:'<strong>CDN</strong>（コンテンツデリバリーネットワーク）。<br>世界中の<span class="hl">エッジロケーション</span>でキャッシュ。<br>低レイテンシー・オリジン負荷軽減。WAF・Shieldと統合。'},
    {q:'VPCピアリングとTransit Gatewayの違いは？',a:'<strong>VPCピアリング</strong>：1対1接続。シンプルだが多対多で管理複雑。<br><br><strong>Transit Gateway</strong>：ハブ&スポーク型。多数のVPC・オンプレを一元管理。'},
  ]},
  secaws:{title:'セキュリティ & IAM',badge:'p',icon:'🛡️',desc:'IAM・KMS・WAF・GuardDuty・CloudTrail',cards:[
    {q:'IAMとは？',a:'<strong>Identity and Access Management</strong><br>AWSリソースへのアクセスを<span class="hl">制御</span>。<br>ユーザー・グループ・ロール・ポリシーで構成。<br>JSONポリシーで権限を詳細定義。'},
    {q:'最小権限の原則とは？',a:'必要<strong>最小限の権限だけ</strong>を付与する原則。<br>権限過多はセキュリティリスク。<br>侵害時の被害を最小化できる。<br>管理者権限の日常利用は厳禁。'},
    {q:'AWS KMSとは？',a:'<strong>Key Management Service</strong><br>暗号化キー（CMK）の<span class="hl">作成・管理・使用</span>を行う。<br>S3・EBS・RDSの暗号化に統合。<br>キーの自動ローテーション対応。'},
    {q:'AWS WAFとは？',a:'<strong>Web Application Firewall</strong><br>HTTPリクエストを検査し<span class="hl">SQLi・XSS</span>等を防ぐ。<br>CloudFront・ALB・API Gatewayと統合。<br>マネージドルール（OWASP Top 10等）が利用可能。'},
    {q:'CloudTrailとは？',a:'APIコールを<strong>記録・監視</strong>するサービス。<br>誰がいつ何を操作したかの<span class="hl">監査ログ</span>。<br>コンプライアンス・セキュリティ分析に活用。<br>ログはS3に保存。'},
    {q:'GuardDutyとは？',a:'継続監視で脅威を<strong>自動検知</strong>するサービス。<br>CloudTrail・VPCフロー・DNSログを分析。<br>機械学習で異常APIコール・マルウェア通信を検知。<br>エージェントレス型で有効化するだけ。'},
  ]},
};

// --- OSIモデル ---
const OSI = [
  {num:7,name:'アプリケーション層',color:'#c45c00',eg:'HTTP, HTTPS, SMTP, DNS',detail:'最もユーザーに近い層。Webブラウザ・メールクライアントなどアプリが使うプロトコルを定義。AWSではAPI Gatewayが相当。'},
  {num:6,name:'プレゼンテーション層',color:'#0a6640',eg:'SSL/TLS, JPEG, ASCII',detail:'データの形式変換（エンコード/デコード）、圧縮、暗号化・復号を担当。HTTPSのTLS処理がこの層に相当。'},
  {num:5,name:'セッション層',color:'#1a6fbf',eg:'NetBIOS, RPC',detail:'通信セッションの確立・維持・終了を管理。複数の通信を区別し、中断した通信の再開も制御する。'},
  {num:4,name:'トランスポート層',color:'#6d28d9',eg:'TCP, UDP',detail:'エンド間の信頼性ある通信を保証。TCPは3ウェイハンドシェイクで接続確立し順序・再送を制御。ポート番号でアプリを識別。'},
  {num:3,name:'ネットワーク層',color:'#1a6fbf',eg:'IP, ICMP, BGP',detail:'IPアドレスで異なるネットワーク間のルーティングを担う。ルーターがこの層で動作。AWSのルートテーブルが相当。'},
  {num:2,name:'データリンク層',color:'#c45c00',eg:'Ethernet, Wi-Fi, ARP',detail:'MACアドレスで同一ネットワーク内のフレーム転送を行う。スイッチが動作。AWSのENIが相当。'},
  {num:1,name:'物理層',color:'#c0392b',eg:'ケーブル, 光ファイバ, 無線',detail:'電気信号・光信号への変換。ハブ・リピーター・NICが動作。AWSでは物理インフラはAWSが完全管理。'},
];

// --- VPCツールチップ ---
const TIPS = {
  alb:{t:'ALB（Application Load Balancer）',b:'L7（HTTP/HTTPS）で負荷分散。パスベース・ホストベースルーティング対応。ターゲットグループへ振り分け。'},
  ec2:{t:'Amazon EC2',b:'クラウドの仮想サーバー。t3.micro〜大型まで多様なインスタンスタイプを用意。Auto Scalingで自動スケール。'},
  nat:{t:'NAT Gateway',b:'プライベートサブネットのEC2がインターネットへアウトバウンド通信するための出口。インバウンドは遮断。'},
  rds:{t:'Amazon RDS',b:'マネージドリレーショナルDB。MySQL/PostgreSQL/Aurora対応。マルチAZで高可用性を実現。'},
  lambda:{t:'AWS Lambda',b:'サーバーレス関数実行。イベント駆動。コードのみ書けばAWSがインフラ管理。最大15分実行可能。'},
  s3:{t:'Amazon S3',b:'容量無制限のオブジェクトストレージ。イレブンナインの耐久性。静的ホスティング・バックアップ・データレイクに活用。'},
  cloudfront:{t:'Amazon CloudFront',b:'世界中のエッジロケーションでキャッシュするCDN。低レイテンシーとオリジン負荷軽減。WAFと統合でセキュリティも強化。'},
  route53:{t:'Amazon Route 53',b:'マネージドDNS。ドメイン登録・ヘルスチェック・フェイルオーバー・複数ルーティングポリシーに対応。'},
  iam:{t:'AWS IAM',b:'AWSリソースへのアクセス制御。ユーザー・グループ・ロール・ポリシーで管理。最小権限の原則が重要。'},
  cloudwatch:{t:'Amazon CloudWatch',b:'AWSリソースの監視。メトリクス・ログ・アラート・ダッシュボードを提供。Auto ScalingのトリガーとなるCPU使用率等を監視。'},
  sg:{t:'セキュリティグループ',b:'インスタンスレベルのファイアウォール。ステートフル（インバウンド許可→アウトバウンド自動許可）。許可ルールのみ設定可能。'},
  elasticache:{t:'Amazon ElastiCache',b:'インメモリキャッシュ（Redis/Memcached）。DBへの負荷を軽減し応答速度を向上。セッション管理にも利用。'},
};

// --- クイズ ---
const QUIZ = [
  {q:'OSIモデルでIPアドレスを使ってルーティングを行う層は？',opts:['第2層（データリンク層）','第3層（ネットワーク層）','第4層（トランスポート層）','第5層（セッション層）'],ans:1,exp:'<strong>第3層（ネットワーク層）</strong>がIPアドレスで異なるネットワーク間のルーティングを担います。'},
  {q:'TCPより UDPが適しているユースケースは？',opts:['ファイルのダウンロード','メール送信','リアルタイム動画配信','Webページ閲覧'],ans:2,exp:'<span class="term" data-term="udp">UDP</span>はコネクションレスで低遅延。リアルタイム動画・音声・ゲームに適します。'},
  {q:'Amazon S3の耐久性として正しいものは？',opts:['99.9%','99.99%','99.999999999%（11ナイン）','100%'],ans:2,exp:'S3は<strong>99.999999999%（イレブンナイン）</strong>の耐久性。複数AZへの自動複製で実現しています。'},
  {q:'プライベートサブネットからインターネットへのアウトバウンド通信に使うサービスは？',opts:['Internet Gateway','VPC Peering','NAT Gateway','Direct Connect'],ans:2,exp:'<strong>NAT Gateway</strong>がアウトバウンド通信を可能にします。インバウンドは遮断されます。'},
  {q:'IAMの「最小権限の原則」とは？',opts:['全ユーザーに同じ権限を付与','必要最小限の権限だけ付与','管理者のみ全権限を持つ','権限は自動的に付与される'],ans:1,exp:'ユーザー・ロールに<strong>業務上必要な最小限の権限だけ付与</strong>する原則。侵害時の被害を最小化します。'},
  {q:'セキュリティグループとNACLの違いとして正しいものは？',opts:['SGはサブネット・NACLはインスタンスに適用','SGはステートフル・NACLはステートレス','NACLは許可ルールのみ設定できる','両者は全く同じ機能'],ans:1,exp:'<strong>SG</strong>はステートフル・インスタンスレベル。<strong>NACL</strong>はステートレス・サブネットレベルで拒否ルールも設定可能。'},
  {q:'DNSの主な役割は？',opts:['MACアドレスをIPに変換','ドメイン名をIPアドレスに変換','IPアドレスを物理アドレスに変換','プライベートIPをパブリックIPに変換'],ans:1,exp:'<span class="term" data-term="dns">DNS</span>はドメイン名（例：example.com）をIPアドレスに変換するシステムです。'},
  {q:'AWS Lambdaの特徴として正しいものは？',opts:['常時起動サーバーが必要','サーバー管理不要でイベント駆動実行','最大24時間継続実行できる','EC2と同じ課金体系'],ans:1,exp:'<strong>Lambda</strong>はサーバーレス。イベント（S3・API等）をトリガーに実行。最大15分・実行時間×リクエスト数で課金。'},
  {q:'CloudFrontが提供する主な機能は？',opts:['リレーショナルDB','CDN（コンテンツ配信ネットワーク）','VPN','オブジェクトストレージ'],ans:1,exp:'<strong>CloudFront</strong>はCDN。世界中のエッジロケーションにキャッシュし低レイテンシーを実現。'},
  {q:'RDSのマルチAZ配置の主な目的は？',opts:['コスト削減','高可用性（HA）の確保','読み取りパフォーマンス向上','ストレージ拡張'],ans:1,exp:'<strong>マルチAZ</strong>は別AZに同期レプリカを保持し、障害時に自動フェイルオーバーします。'},
  {q:'10.0.0.0/24 で使用可能なホストアドレス数は？',opts:['128','254','512','1024'],ans:1,exp:'<strong>/24</strong>はホスト部8bit。2⁸=256のうちネットワークアドレス・ブロードキャストを除いた<strong>254個</strong>が使用可能。'},
  {q:'CloudTrailの主な用途は？',opts:['パフォーマンスメトリクス監視','APIコールの記録と監査ログ','アプリケーションログ収集','ネットワークトラフィック分析'],ans:1,exp:'<strong>CloudTrail</strong>はAPIコールを記録。誰がいつ何を操作したかの監査ログをコンプライアンス対応に活用。'},
  {q:'NATの主な目的は？',opts:['IPをMACアドレスに変換','プライベートIPとパブリックIPを変換','ドメイン名をIPに変換','ポート番号をサービス名に変換'],ans:1,exp:'<strong>NAT</strong>はプライベートIPをパブリックIPに変換。複数ホストが1つのグローバルIPを共有できます。'},
  {q:'Route 53でDNSフェイルオーバーに使う機能は？',opts:['エイリアスレコード','ヘルスチェック','ゾーンファイル','TTL設定'],ans:1,exp:'<strong>Route 53のヘルスチェック</strong>でエンドポイントを監視し、障害時に自動フェイルオーバーします。'},
  {q:'AWS KMSが主に提供する機能は？',opts:['ユーザー認証','暗号化キーの管理','ログの保存','ネットワーク監視'],ans:1,exp:'<strong>KMS</strong>は暗号化キー（CMK）の作成・管理・使用を行うマネージドサービス。S3・EBS・RDS等と統合。'},
  {q:'スポットインスタンスの特徴は？',opts:['常に固定価格','余剰リソース活用で最大90%割引だが中断あり','1〜3年予約で割引','リザーブドより高コスト'],ans:1,exp:'<strong>スポットインスタンス</strong>はAWS余剰リソースを活用し最大90%割引。AWSが必要な場合2分前通知で中断あり。'},
  {q:'AZとは何か？',opts:['同一リージョン内の独立したデータセンター群','異なる国のサーバーファーム','コンテンツキャッシュの拠点','インターネット接続ポイント'],ans:0,exp:'<span class="term" data-term="az">AZ（アベイラビリティゾーン）</span>は独立した電源・冷却・ネットワークを持つデータセンター群。複数AZで高可用性を実現。'},
  {q:'DynamoDBのデータベースモデルは？',opts:['リレーショナル（SQL）','NoSQL（キー・バリュー型＋ドキュメント型）','グラフDB','カラム型DB'],ans:1,exp:'<span class="term" data-term="dynamodb"><strong>DynamoDB</strong></span>はフルマネージドNoSQL。ミリ秒以下のレイテンシーと自動スケーリングが特徴。'},
  {q:'AWS WAFが主に防ぐ攻撃は？',opts:['DDoS（大量リクエスト）','SQLiやXSSなどのWebアプリ攻撃','内部ネットワーク侵入','ランサムウェア'],ans:1,exp:'<strong>WAF</strong>はHTTPリクエストを検査しSQLインジェクション・XSSを防ぎます。CloudFront・ALBと統合。'},
  {q:'EBSとS3の主な違いは？',opts:['EBSはEC2にアタッチするブロックストレージ・S3はオブジェクトストレージ','どちらも同じ用途','S3はEC2にアタッチできる','EBSのみ暗号化できる'],ans:0,exp:'<strong>EBS</strong>はEC2アタッチ型ブロックストレージ（仮想SSD）。<strong>S3</strong>はHTTP経由のオブジェクトストレージ。'},
];

// --- 読み物コンテンツ ---
const NET_READ = [
  {id:'nr-1',icon:'🌐',title:'① ネットワークとは何か',lead:'コンピューター同士がつながって情報をやり取りする仕組みです',html:`
    <p class="a-p">スマホで YouTube を見たり LINE でメッセージを送れるのは、<span class="term" data-term="network">ネットワーク</span>があるからです。複数のコンピューターが「つながって」互いに情報をやり取りできる仕組みです。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>ネットワークは「道路網」です。車（データ）が道路（ネットワーク）を通って目的地（相手のコンピューター）に届きます。道路には住所（<span class="term" data-term="ip">IPアドレス</span>）があり、信号機やルールがあってスムーズに走れます。</div>
    <p class="a-p">家の中でWi-Fiでつながっているのが「<span class="term" data-term="lan">LAN</span>（ローカルエリアネットワーク）」、LAN同士が世界規模でつながったものが「<span class="term" data-term="internet">インターネット</span>」です。</p>
    <div class="tags"><span class="tag tag-b">🏠 LAN（家・会社内）</span><span class="tag tag-g">🌍 インターネット（世界規模）</span><span class="tag tag-o">📶 Wi-Fi（無線LAN）</span></div>
  `},
  {id:'nr-2',icon:'🔢',title:'② IPアドレスの仕組み',lead:'すべてのコンピューターには「住所」があります',html:`
    <p class="a-p">ネットワーク上のデータを届けるには「<span class="term" data-term="ip">IPアドレス</span>」という住所が必要です。IPv4アドレスは <span class="kw">192.168.1.1</span> のように0〜255の数字4つをドットでつないだ形です。</p>
    <div class="ip-vis">
      <div class="ip-oct" style="border-color:var(--c-accent);color:var(--c-accent)">192<div class="ip-lbl">ネットワーク部</div></div>
      <div class="ip-dot">.</div>
      <div class="ip-oct" style="border-color:var(--c-accent);color:var(--c-accent)">168<div class="ip-lbl">ネットワーク部</div></div>
      <div class="ip-dot">.</div>
      <div class="ip-oct" style="border-color:var(--c-orange);color:var(--c-orange)">1<div class="ip-lbl">ホスト部</div></div>
      <div class="ip-dot">.</div>
      <div class="ip-oct" style="border-color:var(--c-orange);color:var(--c-orange)">100<div class="ip-lbl">ホスト部</div></div>
    </div>
    <div class="a-h3">プライベートIPとパブリックIP</div>
    <table class="tbl"><tr><th>種類</th><th>使われる場所</th><th>例</th></tr>
    <tr><td><span class="term" data-term="privateip">プライベートIP</span></td><td>家・会社のLAN内</td><td>192.168.x.x / 10.x.x.x</td></tr>
    <tr><td><span class="term" data-term="publicip">パブリックIP</span></td><td>インターネット上</td><td><span class="term" data-term="isp">ISP</span>から割り当てられるグローバルIP</td></tr></table>
    <div class="tip"><div class="tip-lbl">💡 POINT</div>家のルーターは「<span class="term" data-term="nat">NAT</span>」技術でプライベートIPをパブリックIPに変換してインターネットに接続。AWSでは「NAT Gateway」が同じ役割を担います。</div>
  `},
  {id:'nr-3',icon:'📦',title:'③ データはどうやって届くのか',lead:'データは「小包」に分けられ、リレーで届けられます',html:`
    <p class="a-p">大きなファイルは一度に送られるのではなく「<span class="term" data-term="packet">パケット</span>」という小さなかたまりに分割されて送られます。各パケットには宛先IP・送信元IP・順番などが含まれます。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>映画のDVDを友達に送るとき、箱が大きすぎると一度に送れません。DVDを10枚の封筒に分けて別々に送り、友達が元の順番に並べ直す。これがパケット通信です。</div>
    <div class="a-h3">パケットが届くまでの流れ</div>
    <div class="steps">
      <div class="step"><div class="step-n">1</div><div class="step-body"><div class="step-t">データをパケットに分割</div><div class="step-d">送信元PCがデータを分割し、各パケットに宛先アドレスを付ける</div></div></div>
      <div class="step"><div class="step-n">2</div><div class="step-body"><div class="step-t"><span class="term" data-term="router">ルーター</span>が経路を選択</div><div class="step-d">ルーターが「ルーティングテーブル」を見て次の転送先を決める（これを繰り返す）</div></div></div>
      <div class="step"><div class="step-n">3</div><div class="step-body"><div class="step-t">宛先で再組み立て</div><div class="step-d">バラバラに届いたパケットを順番通りに並べ直して元データに復元する</div></div></div>
    </div>
  `},
  {id:'nr-4',icon:'📒',title:'④ DNS とは何か — DNSサーバーの仕組み',lead:'「名前」を「住所」に変換する電話帳。その裏側で何が起きているのかを解説します',html:`
    <p class="a-p">コンピューターは <span class="kw">93.184.216.34</span> のようなIPアドレスで通信しますが、人間が毎回数字を覚えるのは大変です。「<span class="term" data-term="dns">DNS</span>」が <span class="kw">example.com</span> のような<span class="term" data-term="domain">ドメイン名</span>をIPアドレスに変換してくれます。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>スマホの連絡先アプリと同じ。「田中さん」という名前（ドメイン名）を登録しておけば電話番号（IPアドレス）を覚えなくても電話できます。DNSはインターネット版の連絡先アプリです。</div>

    <div class="a-h3">DNSサーバーの種類</div>
    <p class="a-p">DNSは1台のサーバーで動いているわけではなく、役割の異なる複数のサーバーが<strong>階層構造</strong>で連携しています。</p>
    <table class="tbl">
      <tr><th>種類</th><th>役割</th><th>具体例</th><th>管理者</th></tr>
      <tr><td><span class="term" data-term="dnsresolver">DNSリゾルバー</span></td><td>端末の代わりに名前解決を行う「窓口」</td><td>ISP提供DNS・8.8.8.8・1.1.1.1</td><td><span class="term" data-term="isp">ISP</span>・Google・Cloudflareなど</td></tr>
      <tr><td><span class="term" data-term="rootdns">ルートDNSサーバー</span></td><td>DNSの頂点。TLDサーバーの場所を知っている</td><td>世界13系統（a〜m）</td><td>ICANN・NASA・米国防総省など13組織が分担</td></tr>
      <tr><td><span class="term" data-term="tld">TLDサーバー</span></td><td>「.com」「.jp」などを管理。権威DNSの場所を教える</td><td>.com管理：Verisign</td><td>.comはVerisign／.jpはJPRS（日本レジストリサービス）</td></tr>
      <tr><td><span class="term" data-term="authns">権威DNSサーバー</span></td><td>特定ドメインのIPアドレスを実際に持つ最終回答者</td><td>Route 53・お名前.com DNS</td><td>そのドメインを取得した企業・個人が管理</td></tr>
    </table>

    <div class="tip"><div class="tip-lbl">🌍 DNSは誰が管理しているのか</div>
    DNSには「中央管理者」は存在せず、階層ごとに異なる組織が分担管理しています。<br><br>
    最上位の<strong>ルートゾーン</strong>は米国の非営利組織 <strong>ICANN</strong> が監督し、実際のサーバー運用は13の組織（VeriSign・NASA・米国防総省・RIPE NCC など）が世界各地で担っています。<br><br>
    <strong>TLD（.com / .jp など）</strong>は各国・各組織のレジストリが管理します。日本の「.jp」は <strong>JPRS（株式会社日本レジストリサービス）</strong> が運営しています。<br><br>
    <strong>個々のドメイン（example.com など）</strong>はそのドメインを取得した企業・個人が、お名前.com・AWS Route 53 などのDNSホスティングサービスを通じて自分で管理します。
    </div>

    <div class="a-h3">Webサイトを開くときの詳しい流れ</div>
    <div class="steps">
      <div class="step"><div class="step-n">1</div><div class="step-body"><div class="step-t">まずキャッシュを確認</div><div class="step-d">PCが<span class="term" data-term="dnscache">DNSキャッシュ</span>を確認する。以前に同じドメインを調べていれば即座にIPを返す（ここで終了）</div></div></div>
      <div class="step"><div class="step-n">2</div><div class="step-body"><div class="step-t">DNSリゾルバーへ問い合わせ</div><div class="step-d">キャッシュにない場合、PCは<span class="term" data-term="dnsresolver">DNSリゾルバー</span>（通常はルーターかISP）に「example.comのIPを教えて」と送る</div></div></div>
      <div class="step"><div class="step-n">3</div><div class="step-body"><div class="step-t">ルートDNSサーバーへ</div><div class="step-d">リゾルバーは<span class="term" data-term="rootdns">ルートDNSサーバー</span>に問い合わせる。「.comのTLDサーバーはここだよ」という返答を得る</div></div></div>
      <div class="step"><div class="step-n">4</div><div class="step-body"><div class="step-t">TLDサーバーへ</div><div class="step-d">リゾルバーは<span class="term" data-term="tld">.comのTLDサーバー</span>に問い合わせる。「example.comの権威DNSサーバーはここだよ」という返答を得る</div></div></div>
      <div class="step"><div class="step-n">5</div><div class="step-body"><div class="step-t">権威DNSサーバーへ</div><div class="step-d">リゾルバーは<span class="term" data-term="authns">権威DNSサーバー</span>に問い合わせる。「example.com = 93.184.216.34」という最終回答を得る</div></div></div>
      <div class="step"><div class="step-n">6</div><div class="step-body"><div class="step-t">PCにIPアドレスを返す＆キャッシュに保存</div><div class="step-d">リゾルバーがIPアドレスをPCに返す。PCとリゾルバーは<span class="term" data-term="ttl">TTL</span>の期間だけキャッシュに保存する</div></div></div>
      <div class="step"><div class="step-n">7</div><div class="step-body"><div class="step-t">ブラウザがHTTPリクエストを送信</div><div class="step-d">取得したIPアドレスに対して<span class="term" data-term="http">HTTPリクエスト</span>を送り、Webページが表示される</div></div></div>
    </div>

    <div class="a-h3">DNSレコードの種類</div>
    <p class="a-p">権威DNSサーバーに登録するデータを「<strong>DNSレコード</strong>」と呼びます。用途によって種類が異なります。</p>
    <table class="tbl">
      <tr><th>レコード種別</th><th>役割</th><th>例</th></tr>
      <tr><td><span class="term" data-term="arecord">A レコード</span></td><td>ドメイン → IPv4アドレス</td><td>example.com → 93.184.216.34</td></tr>
      <tr><td>AAAA レコード</td><td>ドメイン → IPv6アドレス</td><td>example.com → 2001:db8::1</td></tr>
      <tr><td>CNAME レコード</td><td>ドメインの別名（エイリアス）</td><td>www.example.com → example.com</td></tr>
      <tr><td>MX レコード</td><td>メール送信先サーバー</td><td>example.com のメールは mail.example.com へ</td></tr>
      <tr><td>TXT レコード</td><td>テキスト情報（SPF・ドメイン認証など）</td><td>スパム対策・所有者確認に使用</td></tr>
    </table>

    <div class="tip"><div class="tip-lbl">💡 TTLとサーバー移転の関係</div>WebサイトをサーバーAからサーバーBに移転するとき、AレコードのIPアドレスを書き換えます。しかし世界中のキャッシュが古いIPを持ち続けると、一部のユーザーは古いサーバーにアクセスしてしまいます。そのため移転前に<span class="term" data-term="ttl">TTL</span>を短く（例：300秒）しておくと、切り替えが素早く世界に広まります。</div>

    <div class="tip"><div class="tip-lbl">🔒 DNSのセキュリティ</div>DNSの問い合わせは通常<strong>暗号化されていない</strong>ため、通信を盗み見られたり改ざんされるリスクがあります。これを防ぐ技術として「<strong>DNS over HTTPS（DoH）</strong>」や「<strong>DNSSEC</strong>」があります。Cloudflare（1.1.1.1）やGoogle（8.8.8.8）の公開DNSリゾルバーはDoHに対応しています。</div>
  `},
  {id:'nr-4b',icon:'🚪',title:'⑤ ポート番号とは',lead:'IPアドレスが「建物の住所」なら、ポート番号は「部屋番号」です',html:`
    <p class="a-p">データがIPアドレスを使って目的のコンピューターに届いても、そのコンピューター上では複数のアプリが同時に動いています。<span class="term" data-term="port">ポート番号</span>は、届いたデータを「どのアプリに渡すか」を決めるための番号です。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>マンション（コンピューター）の住所（IPアドレス）が分かっても、どの部屋（アプリ）を訪ねるかはドアの番号（ポート番号）で決まります。101号室（Webサーバー：80番）、202号室（メールサーバー：25番）のように、アプリごとに決まった番号があります。</div>

    <div class="a-h3">ポート番号の範囲</div>
    <table class="tbl"><tr><th>範囲</th><th>名称</th><th>用途</th></tr>
    <tr><td>0 〜 1023</td><td>ウェルノウンポート</td><td>HTTP・SSH など標準サービス用に予約済み</td></tr>
    <tr><td>1024 〜 49151</td><td>登録済みポート</td><td>特定アプリが使用を登録している番号</td></tr>
    <tr><td>49152 〜 65535</td><td>ダイナミックポート</td><td>OSが通信ごとに一時的に割り当てる番号</td></tr></table>

    <div class="a-h3">主な標準ポート番号</div>
    <table class="tbl"><tr><th>番号</th><th>プロトコル</th><th>用途</th></tr>
    <tr><td>20 / 21</td><td>FTP</td><td>ファイル転送</td></tr>
    <tr><td>22</td><td>SSH</td><td>サーバーへの安全なリモート操作</td></tr>
    <tr><td>25 / 587</td><td>SMTP</td><td>メール送信</td></tr>
    <tr><td>53</td><td><span class="term" data-term="dns">DNS</span></td><td>ドメイン名の解決</td></tr>
    <tr><td>80</td><td><span class="term" data-term="http">HTTP</span></td><td>Webページの送受信（暗号化なし）</td></tr>
    <tr><td>443</td><td><span class="term" data-term="http">HTTPS</span></td><td>Webページの送受信（<span class="term" data-term="ssl">TLS</span>暗号化あり）</td></tr>
    <tr><td>3306</td><td>MySQL</td><td>MySQLデータベースへの接続</td></tr>
    <tr><td>5432</td><td>PostgreSQL</td><td>PostgreSQLデータベースへの接続</td></tr>
    <tr><td>3389</td><td>RDP</td><td>Windowsリモートデスクトップ</td></tr></table>

    <div class="a-h3">通信はIPアドレス＋ポート番号のセット</div>
    <p class="a-p">実際の通信は <span class="kw">93.184.216.34:443</span> のように「IPアドレス：ポート番号」をセットで指定します。ブラウザでHTTPSのページを開くと、自動的に宛先ポート443が使われます。</p>

    <div class="tip"><div class="tip-lbl">🔒 AWSとポート番号</div>AWSのセキュリティグループでは「どのポートへの通信を許可するか」をルールで設定します。例えば「ポート443のみ許可」とすれば、HTTPS通信だけを受け付けるWebサーバーを作れます。不要なポートを開けておくことはセキュリティリスクになるため、必要最小限のポートだけ開放するのが基本です。</div>
  `},
  {id:'nr-5',icon:'🔌',title:'⑥ TCP と UDP の違い',lead:'「確実に届ける」か「速く届ける」か、用途で使い分けます',html:`
    <p class="a-p">データを送る<span class="term" data-term="protocol">プロトコル</span>には「<span class="term" data-term="tcp">TCP</span>」と「<span class="term" data-term="udp">UDP</span>」の2種類があります。</p>
    <table class="tbl"><tr><th></th><th>TCP</th><th>UDP</th></tr>
    <tr><td>特徴</td><td>確実に届ける（確認あり）</td><td>速く届ける（確認なし）</td></tr>
    <tr><td>仕組み</td><td>3ウェイハンドシェイクで接続確立後に通信</td><td>接続なし。どんどん送信するだけ</td></tr>
    <tr><td>向いている用途</td><td>Webページ・メール・ファイル転送</td><td>動画配信・音声通話・ゲーム</td></tr>
    <tr><td>データ欠損時</td><td>自動的に再送する</td><td>欠損してもそのまま（再送しない）</td></tr></table>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div><span class="term" data-term="tcp">TCP</span>は宅配便。「届きましたか？」と確認し合うので確実ですが少し時間がかかります。<br><span class="term" data-term="udp">UDP</span>はラジオ放送。「届いてるかわからないけどどんどん流す」ので速いが一部聞き逃しても気にしません。</div>
  `},
  {id:'nr-6',icon:'📚',title:'⑥ OSI モデル入門',lead:'ネットワーク通信を7つの「役割」に分けた設計図です。各層が何をしているか、具体例で理解しましょう',html:`
    <p class="a-p">異なるメーカーのPCやスマホが問題なく通信できるのは、「<span class="term" data-term="osi">OSIモデル</span>」という共通の設計図に従って機器やソフトウェアが作られているからです。通信を7つの役割（層）に分けることで、各層を独立して開発・改善できるようになっています。</p>

    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>手紙を送る作業に例えると分かりやすいです。「手紙を書く（アプリ層）」「封筒に入れる（プレゼン層）」「宛名を書く（ネットワーク層）」「郵便ポストに投函（物理層）」……それぞれの作業を担当者が分業していて、前後の作業を気にせず自分の仕事だけをすればよい仕組みです。</div>

    <div class="tip"><div class="tip-lbl">🧠 覚え方のコツ</div>上から「<strong>ア プ セ ト ネ デ 物</strong>」（アプリ・プレゼン・セッション・トランスポート・ネットワーク・データリンク・物理）と覚えましょう。</div>

    <div class="a-h3">第7層 — アプリケーション層</div>
    <p class="a-p">ユーザーが直接使うアプリケーションとネットワークを結ぶ層です。「どんなデータを、どんな形式でやり取りするか」のルールを定めます。WebブラウザがサーバーにWebページを要求するとき、<span class="term" data-term="http">HTTP/HTTPS</span> というプロトコルがここで使われます。メール送信なら SMTP、ファイル転送なら FTP、ドメイン名解決なら <span class="term" data-term="dns">DNS</span> が対応します。</p>
    <table class="tbl"><tr><th>プロトコル</th><th>用途</th><th>ポート番号</th></tr>
    <tr><td>HTTP / HTTPS</td><td>Webページの送受信</td><td>80 / 443</td></tr>
    <tr><td>SMTP</td><td>メール送信</td><td>25 / 587</td></tr>
    <tr><td>DNS</td><td>ドメイン名の解決</td><td>53</td></tr>
    <tr><td>FTP</td><td>ファイル転送</td><td>20 / 21</td></tr>
    <tr><td>SSH</td><td>サーバーへの安全なリモート操作</td><td>22</td></tr></table>

    <div class="a-h3">第6層 — プレゼンテーション層</div>
    <p class="a-p">データの「見た目・形式」を変換する層です。アプリが扱うデータ形式（テキスト・画像・動画）をネットワークで送れる形に変換したり、その逆を行います。また、<span class="term" data-term="ssl">SSL/TLS</span> による暗号化・復号もこの層の仕事です。HTTPS通信でデータが暗号化されるのはプレゼンテーション層の働きです。</p>

    <div class="a-h3">第5層 — セッション層</div>
    <p class="a-p">通信の「セッション（会話のまとまり）」を管理する層です。通信の開始・維持・終了を制御し、複数の通信を区別します。たとえば同じブラウザで複数のタブを開いても、それぞれの通信が混ざらないのはセッション層が管理しているからです。</p>

    <div class="a-h3">第4層 — トランスポート層</div>
    <p class="a-p">送信元から宛先まで「確実にデータを届ける」ための層です。<span class="term" data-term="tcp">TCP</span> と <span class="term" data-term="udp">UDP</span> という2つのプロトコルがあります。また、ポート番号によって「どのアプリへの通信か」を識別します（例：ポート80ならWebサーバー、ポート25ならメールサーバー）。</p>
    <table class="tbl"><tr><th></th><th>TCP</th><th>UDP</th></tr>
    <tr><td>信頼性</td><td>◎ 順序保証・再送あり</td><td>△ 保証なし</td></tr>
    <tr><td>速度</td><td>△ やや低速</td><td>◎ 高速</td></tr>
    <tr><td>用途</td><td>Web・メール・ファイル転送</td><td>動画配信・ゲーム・DNS</td></tr></table>

    <div class="a-h3">第3層 — ネットワーク層</div>
    <p class="a-p">異なるネットワーク間でデータ（パケット）を届ける「ルーティング」を担う層です。<span class="term" data-term="ip">IPアドレス</span>を使って宛先を特定し、<span class="term" data-term="router">ルーター</span>がどの経路を通るかを判断します。インターネット上でデータが世界中を旅できるのはこの層のおかげです。</p>

    <div class="a-h3">第2層 — データリンク層</div>
    <p class="a-p"><strong>同じネットワーク（LAN）の中</strong>でデータ（フレーム）を届ける層です。<span class="term" data-term="mac">MACアドレス</span>を使って同一LAN内の機器を識別します。<span class="term" data-term="switch">スイッチ</span>がこの層で動作し、MACアドレステーブルを参照して宛先ポートにだけデータを転送します。</p>

    <div class="a-h3">第1層 — 物理層</div>
    <p class="a-p">データを実際の「物理的な信号」に変換して送受信する層です。LANケーブルなら電気信号、光ファイバーなら光信号、Wi-Fiなら電波として0と1のビット列を伝えます。ケーブルの種類（Cat5e・Cat6など）や無線の周波数（2.4GHz・5GHz）もこの層の話です。</p>

    <div class="a-h3">7層をまとめて見る</div>
    <table class="tbl"><tr><th>層</th><th>名前</th><th>データの単位</th><th>主な機器・プロトコル</th></tr>
    <tr><td>第7層</td><td>アプリケーション層</td><td>データ</td><td><span class="term" data-term="http">HTTP</span>・<span class="term" data-term="dns">DNS</span>・SMTP・SSH</td></tr>
    <tr><td>第6層</td><td>プレゼンテーション層</td><td>データ</td><td><span class="term" data-term="ssl">SSL/TLS</span>・JPEG・MP4</td></tr>
    <tr><td>第5層</td><td>セッション層</td><td>データ</td><td>NetBIOS・RPC</td></tr>
    <tr><td>第4層</td><td>トランスポート層</td><td>セグメント</td><td><span class="term" data-term="tcp">TCP</span>・<span class="term" data-term="udp">UDP</span></td></tr>
    <tr><td>第3層</td><td>ネットワーク層</td><td>パケット</td><td>IP・ICMP・<span class="term" data-term="router">ルーター</span></td></tr>
    <tr><td>第2層</td><td>データリンク層</td><td>フレーム</td><td>Ethernet・<span class="term" data-term="switch">スイッチ</span>・<span class="term" data-term="mac">MACアドレス</span></td></tr>
    <tr><td>第1層</td><td>物理層</td><td>ビット</td><td>ケーブル・光ファイバ・<span class="term" data-term="hub">ハブ</span>・<span class="term" data-term="nic">NIC</span></td></tr></table>

    <div class="tip"><div class="tip-lbl">💡 OSIモデルと実際のTCP/IPの関係</div>実際のインターネットで使われているのは「TCP/IPモデル」という4層モデルです。OSIの第5〜7層をまとめて「アプリケーション層」、第3層を「インターネット層」、第1〜2層を「ネットワークインターフェース層」と呼びます。OSIモデルは理論的な参照モデルとして学習や設計に使われ、実装ではTCP/IPモデルが使われると覚えておきましょう。</div>
  `},
  {id:'nr-7',icon:'🔒',title:'⑦ ネットワークの守り方',lead:'インターネットには危険もあります。どう守るかを知りましょう',html:`
    <p class="a-p">インターネットは便利ですが、不正アクセス・情報漏洩・DDoSなど様々な脅威があります。</p>
    <div class="steps">
      <div class="step"><div class="step-n">🛡️</div><div class="step-body"><div class="step-t"><span class="term" data-term="firewall">ファイアウォール</span></div><div class="step-d">許可されていない通信をブロックするゲートキーパー。AWSではセキュリティグループが相当します。</div></div></div>
      <div class="step"><div class="step-n">🔐</div><div class="step-body"><div class="step-t"><span class="term" data-term="http">HTTPS</span>（<span class="term" data-term="ssl">SSL/TLS</span> 暗号化）</div><div class="step-d">ブラウザの「🔒」がHTTPS通信の印。データを暗号化するので第三者に盗み見られません。</div></div></div>
      <div class="step"><div class="step-n">🔁</div><div class="step-body"><div class="step-t"><span class="term" data-term="vpn">VPN</span>（仮想プライベートネットワーク）</div><div class="step-d">インターネット上に暗号化トンネルを掘る技術。テレワークで会社ネットワークに安全接続する際に使用。</div></div></div>
    </div>
    <div class="tip"><div class="tip-lbl">🎯 次のステップ</div>ネットワーク基礎が理解できたら「📖 AWS入門」へ！AWSはこれらの技術をクラウド上で提供しています。</div>
  `},
];

const AWS_READ = [
  {id:'ar-1',icon:'☁️',title:'① クラウドとは何か',lead:'「インターネットの向こうにあるコンピューター」をレンタルするサービスです',html:`
    <p class="a-p">昔はWebサービスを作るには自分でサーバーを買い、データセンターに設置して管理する必要がありました（<span class="term" data-term="onpremise">オンプレミス</span>）。設備費・電気代・維持管理コストが膨大でした。</p>
    <p class="a-p">「<span class="term" data-term="cloud">クラウド</span>」はこの問題を解決します。Amazonの巨大なデータセンターのコンピューターをインターネット経由で借り、使った分だけ料金を払います。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>クラウドは「電気・水道」と同じ。発電所を自分で建てなくても電気が使えるように、サーバーを買わなくてもコンピューティングパワーが使えます。使った量だけ払うのも同じです。</div>
    <table class="tbl"><tr><th></th><th>オンプレミス（自前）</th><th>クラウド（AWS）</th></tr>
    <tr><td>初期費用</td><td>サーバー購入で数百万〜</td><td>ほぼゼロ。使った分だけ</td></tr>
    <tr><td>スケール</td><td>ハード購入が必要で時間がかかる</td><td>数分以内に拡張</td></tr>
    <tr><td>管理</td><td>ハード・OS・電源すべて自社管理</td><td>物理インフラはAWSが管理</td></tr>
    <tr><td>可用性</td><td>冗長化のため設備が2倍必要</td><td>マルチAZで簡単に高可用性を実現</td></tr></table>
    <div class="a-h3">クラウドの3つのサービス形態</div>
    <p class="a-p">クラウドには、どこまでAWS側が管理するかによって3種類の形態があります。</p>
    <table class="tbl"><tr><th>形態</th><th>AWS側が管理</th><th>利用者が管理</th><th>代表例</th></tr>
    <tr><td><strong>IaaS</strong>（Infrastructure as a Service）</td><td>ハード・仮想化</td><td>OS・ミドルウェア・アプリ</td><td>Amazon EC2</td></tr>
    <tr><td><strong>PaaS</strong>（Platform as a Service）</td><td>ハード＋OS＋実行環境</td><td>アプリのコードのみ</td><td>Elastic Beanstalk</td></tr>
    <tr><td><strong>SaaS</strong>（Software as a Service）</td><td>すべて</td><td>データ入力だけ</td><td>Gmail・Salesforce</td></tr></table>
    <div class="tip"><div class="tip-lbl">💡 AWSを使う5つのメリット</div>
    ①<strong>初期コストゼロ</strong>：設備投資なしでスタートできる<br>
    ②<strong>スケーラビリティ</strong>：需要に合わせて瞬時に拡張・縮小できる<br>
    ③<strong>グローバル展開</strong>：世界中のリージョンにすぐ展開できる<br>
    ④<strong>マネージドサービス</strong>：運用管理の手間をAWSに任せられる<br>
    ⑤<strong>セキュリティ</strong>：AWSが物理セキュリティを担当し、利用者はアプリ層だけ守ればよい
    </div>
    <div class="a-h3">責任共有モデル</div>
    <p class="a-p">クラウドではAWSと利用者が<strong>セキュリティの責任を分担</strong>します。これを「責任共有モデル（Shared Responsibility Model）」と言います。</p>
    <table class="tbl"><tr><th>担当</th><th>責任範囲</th></tr>
    <tr><td><strong>AWSが担当</strong>（クラウド自体のセキュリティ）</td><td>物理データセンター・ネットワークインフラ・仮想化レイヤー・ハードウェア</td></tr>
    <tr><td><strong>利用者が担当</strong>（クラウド上のセキュリティ）</td><td>OS設定・アプリコード・データ・IAM権限・セキュリティグループ設定</td></tr></table>
  `},
  {id:'ar-2',icon:'🗺️',title:'② AWSのグローバル基盤',lead:'AWSは世界中にデータセンターを持っています',html:`
    <p class="a-p">AWSのインフラは「<span class="term" data-term="region">リージョン</span>」「<span class="term" data-term="az">AZ（アベイラビリティゾーン）</span>」「<strong>エッジロケーション</strong>」の3層構造です。</p>
    <div class="steps">
      <div class="step"><div class="step-n">🌍</div><div class="step-body"><div class="step-t">リージョン（例：ap-northeast-1 = 東京）</div><div class="step-d">地理的に独立したデータセンター群の集合。日本には「東京」「大阪」の2リージョンがあります。2025年時点で世界30以上のリージョンが稼働しています。</div></div></div>
      <div class="step"><div class="step-n">🏢</div><div class="step-body"><div class="step-t">アベイラビリティゾーン（AZ）</div><div class="step-d">リージョン内の独立したデータセンター群。東京には3つ以上のAZがあります。1つが停電・災害で止まっても他のAZで稼働を続けられます。</div></div></div>
      <div class="step"><div class="step-n">⚡</div><div class="step-body"><div class="step-t">エッジロケーション</div><div class="step-d">世界450か所以上の主要都市に置かれたキャッシュサーバー。CloudFrontが使用し、ユーザーに最も近い場所から高速配信します。</div></div></div>
    </div>
    <div class="a-h3">リージョンの選び方</div>
    <table class="tbl"><tr><th>選択基準</th><th>説明</th></tr>
    <tr><td>ユーザーとの距離</td><td>日本のユーザー向けなら<strong>東京（ap-northeast-1）</strong>が基本。遅延が最小になる</td></tr>
    <tr><td>データ主権・法律</td><td>医療・金融などは日本国内でのデータ保管が法律で義務づけられる場合がある</td></tr>
    <tr><td>サービスの可用性</td><td>一部の新サービスは特定リージョンにのみ提供される</td></tr>
    <tr><td>コスト</td><td>リージョンによって料金が異なる（米国バージニア北部が最安が多い）</td></tr></table>
    <div class="a-h3">マルチAZ構成で高可用性を実現</div>
    <p class="a-p">AWSで「高可用性（HA）」を実現するには、<strong>2つ以上のAZにリソースを分散配置</strong>します。1つのAZが障害を起こしても、別のAZが引き継いでサービスを継続できます。</p>
    <div class="tip"><div class="tip-lbl">💡 POINT</div>日本ユーザー向けサービスは<strong>東京リージョン（ap-northeast-1）</strong>が基本。大阪（ap-northeast-3）をDR（災害復旧）用として使うケースも多いです。</div>
  `},
  {id:'ar-3',icon:'⚙️',title:'③ 仮想サーバーを借りる — Amazon EC2',lead:'クラウド上のレンタルパソコンです',html:`
    <p class="a-p">「<span class="term" data-term="ec2">Amazon EC2（Elastic Compute Cloud）</span>」は、クラウド上に仮想サーバーを作成できるサービスです。Linux・WindowsのサーバーをOSやスペックを指定して必要な期間だけ借りられます。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>ホテルの部屋を借りるようなもの。シングルルーム（小サーバー）からスイートルーム（大サーバー）まで選べ、チェックアウト（削除）すれば課金が止まります。</div>
    <div class="a-h3">インスタンスタイプの選び方</div>
    <p class="a-p">EC2はさまざまな用途に最適化された「インスタンスタイプ」が用意されています。<span class="kw">t3.micro</span> のような名前は「ファミリー・世代・サイズ」を表します。</p>
    <table class="tbl"><tr><th>ファミリー</th><th>最適化対象</th><th>用途例</th><th>代表型</th></tr>
    <tr><td><strong>T系</strong>（汎用・バースト可能）</td><td>コスト重視。通常時は低負荷、必要時だけ高性能</td><td>開発環境・小規模Webサーバー</td><td>t3.micro / t3.small</td></tr>
    <tr><td><strong>M系</strong>（汎用）</td><td>CPU・メモリのバランスが良い</td><td>Webアプリ・アプリサーバー</td><td>m6i.large</td></tr>
    <tr><td><strong>C系</strong>（コンピューティング最適化）</td><td>CPU性能重視</td><td>動画エンコード・機械学習推論</td><td>c6i.large</td></tr>
    <tr><td><strong>R系</strong>（メモリ最適化）</td><td>大量メモリ</td><td>インメモリDB・ビッグデータ</td><td>r6i.large</td></tr>
    <tr><td><strong>G系</strong>（GPU）</td><td>GPU性能</td><td>機械学習・グラフィック処理</td><td>g4dn.xlarge</td></tr></table>
    <div class="a-h3">EC2の課金モデル</div>
    <table class="tbl"><tr><th>課金タイプ</th><th>特徴</th><th>おすすめ用途</th></tr>
    <tr><td>オンデマンド</td><td>使った時間分だけ課金。いつでも開始・停止</td><td>開発・テスト環境</td></tr>
    <tr><td>リザーブド</td><td>1〜3年予約で最大72%割引</td><td>24時間稼働の本番サーバー</td></tr>
    <tr><td>スポット</td><td>最大90%割引（AWSが中断する場合あり）</td><td>バッチ処理・機械学習</td></tr>
    <tr><td>Savings Plans</td><td>利用量コミットで割引。柔軟性がある</td><td>複数サービスを使う場合</td></tr></table>
    <div class="a-h3">EC2を起動するまでの流れ</div>
    <div class="steps">
      <div class="step"><div class="step-n">1</div><div class="step-body"><div class="step-t"><span class="term" data-term="ami">AMI</span>を選択</div><div class="step-d">AMI（Amazon Machine Image）はOSとソフトウェアが入ったサーバーのテンプレート。Amazon Linux・Ubuntu・Windowsなどから選ぶ</div></div></div>
      <div class="step"><div class="step-n">2</div><div class="step-body"><div class="step-t">インスタンスタイプを選択</div><div class="step-d">CPU・メモリ・ネットワーク性能を決める。最初は t3.micro（無料枠対象）から始めると良い</div></div></div>
      <div class="step"><div class="step-n">3</div><div class="step-body"><div class="step-t">ネットワーク設定（VPC・サブネット）</div><div class="step-d">どのVPC・サブネットに配置するかを選択。Webサーバーはパブリックサブネット、DBはプライベートサブネットが基本</div></div></div>
      <div class="step"><div class="step-n">4</div><div class="step-body"><div class="step-t"><span class="term" data-term="sg">セキュリティグループ</span>を設定</div><div class="step-d">どのポートへの通信を許可するかを設定。Webサーバーなら「80・443のみ許可」が基本</div></div></div>
      <div class="step"><div class="step-n">5</div><div class="step-body"><div class="step-t">ストレージを設定（EBS）</div><div class="step-d">EC2のディスクストレージ（EBS）のサイズを決定。デフォルトはgp3（汎用SSD）</div></div></div>
      <div class="step"><div class="step-n">6</div><div class="step-body"><div class="step-t">キーペアを作成・選択</div><div class="step-d">SSHでLinuxサーバーにログインするための「鍵」。プライベートキー（.pem）は大切に保管する</div></div></div>
    </div>
    <div class="tip"><div class="tip-lbl">💡 EBSとの関係</div>EC2には必ず<strong>EBS（Elastic Block Store）</strong>というディスクストレージが付いています。EC2を停止してもEBSのデータは残ります。スナップショット機能でバックアップも可能です。</div>
  `},
  {id:'ar-4',icon:'🪣',title:'④ データを保存する — Amazon S3',lead:'クラウド上の容量無制限のファイル置き場です',html:`
    <p class="a-p">「<span class="term" data-term="s3">Amazon S3（Simple Storage Service）</span>」はファイルをインターネット上に保存できるストレージサービスです。容量は実質無制限で、耐久性は <span class="kw">99.999999999%</span> です。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>Googleドライブに似ていますが開発者向けの機能が豊富。「バケット」という容れ物の中に「オブジェクト（ファイル）」を保存します。バケット名はグローバルで一意（世界で唯一）でなければなりません。</div>
    <div class="a-h3">S3の基本概念</div>
    <table class="tbl"><tr><th>用語</th><th>説明</th><th>例え</th></tr>
    <tr><td><strong>バケット</strong></td><td>S3の最上位の入れ物。リージョンに属する</td><td>フォルダ（ドライブ）</td></tr>
    <tr><td><strong>オブジェクト</strong></td><td>保存されるファイル本体＋メタデータ</td><td>ファイル</td></tr>
    <tr><td><strong>キー</strong></td><td>オブジェクトのパス（ファイル名に相当）</td><td>ファイルのパス</td></tr>
    <tr><td><strong>バージョニング</strong></td><td>同じキーに複数バージョンを保持できる機能</td><td>ファイルの履歴管理</td></tr></table>
    <div class="a-h3">S3ストレージクラス — 用途に応じたコスト最適化</div>
    <table class="tbl"><tr><th>クラス</th><th>特徴</th><th>向いている用途</th></tr>
    <tr><td><strong>Standard</strong></td><td>高頻度アクセス。取得料金なし</td><td>Webサイトの画像・動画</td></tr>
    <tr><td><strong>Standard-IA</strong></td><td>低頻度アクセス用。保存料金安だが取得に料金</td><td>バックアップ・ログ（月1回参照程度）</td></tr>
    <tr><td><strong>One Zone-IA</strong></td><td>1AZのみ。Standard-IAより20%安</td><td>再作成可能なデータ</td></tr>
    <tr><td><strong>Intelligent-Tiering</strong></td><td>アクセス頻度を自動判定してクラスを自動変更</td><td>アクセスパターンが不明なデータ</td></tr>
    <tr><td><strong>Glacier Instant Retrieval</strong></td><td>アーカイブ。取得時間はミリ秒</td><td>四半期に1回参照するデータ</td></tr>
    <tr><td><strong>Glacier Deep Archive</strong></td><td>最安。取得に12時間</td><td>法的保存義務があるデータ</td></tr></table>
    <div class="a-h3">S3でできること</div>
    <div class="tags"><span class="tag tag-b">🌐 静的Webサイトのホスティング</span><span class="tag tag-g">💾 バックアップ・アーカイブ</span><span class="tag tag-o">📊 データレイク</span><span class="tag tag-p">🖼️ 画像・動画配信</span></div>
    <div class="tip"><div class="tip-lbl">🌐 静的Webサイトのホスティング</div>S3にHTML・CSS・JSファイルをアップロードし、<strong>静的ウェブサイトホスティング</strong>を有効にするだけで、サーバーなしでWebサイトを公開できます。CloudFrontと組み合わせると高速なCDN配信も可能です。</div>
    <div class="tip"><div class="tip-lbl">💡 イレブンナインの秘密</div>S3に保存したファイルは自動的に<strong>複数のAZにコピー</strong>されます。1つのAZが障害を起こしてもデータは消えません。これが99.999999999%という驚異の耐久性の秘密です。</div>
  `},
  {id:'ar-5',icon:'🕸️',title:'⑤ 仮想ネットワークを作る — Amazon VPC',lead:'AWS上に「自分だけのプライベートネットワーク」を作れます',html:`
    <p class="a-p">「<span class="term" data-term="vpc">Amazon VPC（Virtual Private Cloud）</span>」はAWS上に仮想的なプライベートネットワークを作成するサービスです。外部から隔離されたネットワーク空間を自分でデザインできます。</p>
    <div class="a-h3">VPCの構成要素</div>
    <div class="steps">
      <div class="step"><div class="step-n">①</div><div class="step-body"><div class="step-t">CIDR ブロック</div><div class="step-d">VPCのIPアドレス範囲を定義。例：<span class="kw">10.0.0.0/16</span>（65,536個のアドレス）。設計段階で十分な広さを確保することが重要。</div></div></div>
      <div class="step"><div class="step-n">②</div><div class="step-body"><div class="step-t"><span class="term" data-term="subnet">サブネット</span></div><div class="step-d">VPCを小さく分割した区画。AZ単位で作成する。インターネットに接続可能な「パブリック」と遮断された「プライベート」の2種類がある。</div></div></div>
      <div class="step"><div class="step-n">③</div><div class="step-body"><div class="step-t">インターネットゲートウェイ（<span class="term" data-term="igw">IGW</span>）</div><div class="step-d">VPCとインターネットをつなぐ出入り口。IGWをVPCにアタッチし、パブリックサブネットのルートテーブルに追加することで通信が可能になる。</div></div></div>
      <div class="step"><div class="step-n">④</div><div class="step-body"><div class="step-t">ルートテーブル</div><div class="step-d">サブネットのトラフィックをどこに向けるかを定義。パブリックサブネットには「0.0.0.0/0 → IGW」のルートを追加する。</div></div></div>
      <div class="step"><div class="step-n">⑤</div><div class="step-body"><div class="step-t">NAT Gateway</div><div class="step-d">プライベートサブネット内のリソースがインターネットへアウトバウンド通信する際の出口。インバウンド通信は遮断。パブリックサブネットに設置する。</div></div></div>
      <div class="step"><div class="step-n">⑥</div><div class="step-body"><div class="step-t"><span class="term" data-term="sg">セキュリティグループ（SG）</span></div><div class="step-d">EC2などのリソースレベルのファイアウォール。ステートフルで動作し、許可ルールのみ設定可能。インバウンド（受信）とアウトバウンド（送信）を個別に制御する。</div></div></div>
    </div>
    <div class="a-h3">標準的なVPC構成（3層アーキテクチャ）</div>
    <table class="tbl"><tr><th>層</th><th>配置するもの</th><th>サブネット</th></tr>
    <tr><td>プレゼンテーション層</td><td>ALB（ロードバランサー）</td><td>パブリックサブネット（複数AZ）</td></tr>
    <tr><td>アプリケーション層</td><td>EC2・ECS・Lambda</td><td>プライベートサブネット（複数AZ）</td></tr>
    <tr><td>データ層</td><td>RDS・DynamoDB・ElastiCache</td><td>プライベートサブネット（複数AZ）</td></tr></table>
    <div class="tip"><div class="tip-lbl">🔐 セキュリティグループ vs NACL</div>
    <table class="tbl"><tr><th></th><th>セキュリティグループ</th><th>ネットワークACL（NACL）</th></tr>
    <tr><td>適用レベル</td><td>インスタンス（EC2など）</td><td>サブネット</td></tr>
    <tr><td>ステートフル</td><td>◎（往きを許可→戻りも自動許可）</td><td>✕（往きと戻りを別々に設定）</td></tr>
    <tr><td>拒否ルール</td><td>なし（許可のみ）</td><td>あり（許可・拒否両方）</td></tr>
    <tr><td>評価順序</td><td>すべて評価（OR）</td><td>番号順（最初にマッチで終了）</td></tr></table>
    </div>
  `},
  {id:'ar-6',icon:'🗄️',title:'⑥ データベースを使う — RDS / DynamoDB',lead:'用途に応じてSQLとNoSQLを使い分けます',html:`
    <p class="a-p">「<span class="term" data-term="rds">Amazon RDS</span>」は MySQL・PostgreSQL などのリレーショナルDBをマネージドで提供します。バックアップ・パッチ適用・フェイルオーバーをAWSが代行します。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>自分でMySQLを運用するのは自家用車の所有と同じ（車検・オイル交換など全部自分で）。RDSは「タクシー」。使うときだけ乗ればよく、維持管理はAWSが担当します。</div>
    <table class="tbl"><tr><th></th><th>Amazon RDS</th><th>Amazon DynamoDB</th></tr>
    <tr><td>種類</td><td>リレーショナルDB（SQL）</td><td>NoSQL（キー・バリュー型）</td></tr>
    <tr><td>向いている用途</td><td>複雑な検索・結合クエリ</td><td>大量の単純な読み書き</td></tr>
    <tr><td>スケール</td><td>手動スケールアップ（読み取りはリードレプリカ）</td><td>自動スケーリング</td></tr>
    <tr><td>具体例</td><td>ECサイトの注文管理・会員情報</td><td>ゲームスコア・IoTデータ・セッション</td></tr></table>
    <div class="a-h3">RDSの高可用性機能</div>
    <div class="steps">
      <div class="step"><div class="step-n">🏢</div><div class="step-body"><div class="step-t">マルチAZ配置</div><div class="step-d">プライマリDBとは別のAZにスタンバイを同期レプリカとして保持。プライマリが障害時に自動<span class="term" data-term="failover">フェイルオーバー</span>し、約1〜2分でスタンバイが昇格する</div></div></div>
      <div class="step"><div class="step-n">📖</div><div class="step-body"><div class="step-t">リードレプリカ</div><div class="step-d">読み取り専用のレプリカを作成して読み取り負荷を分散。別リージョンに作成するとDR（災害復旧）にも活用できる</div></div></div>
      <div class="step"><div class="step-n">💾</div><div class="step-body"><div class="step-t">自動バックアップ</div><div class="step-d">デフォルトで毎日自動バックアップ（保持期間1〜35日）。特定の時点へのポイントインタイムリカバリが可能</div></div></div>
    </div>
    <div class="a-h3">Amazon Aurora — RDSの進化版</div>
    <p class="a-p">AuroraはAWSが独自開発したクラウドネイティブなリレーショナルDB。MySQL・PostgreSQL互換で、標準MySQLの最大5倍の性能を発揮します。ストレージは自動拡張（最大128TB）で、6つのAZにまたがる6コピーのデータ複製により高い耐久性を実現します。</p>
    <div class="a-h3">Amazon ElastiCache — キャッシュ層の追加</div>
    <p class="a-p">DBへのすべての読み取りリクエストをRDSで処理すると負荷が高くなります。<strong>ElastiCache</strong>（Redis/Memcached）をキャッシュ層として追加することで、頻繁に参照されるデータをメモリ上に保持し、DB負荷を大幅に削減できます。</p>
    <table class="tbl"><tr><th></th><th>Redis</th><th>Memcached</th></tr>
    <tr><td>特徴</td><td>高機能・永続化対応・クラスタリング</td><td>シンプル・高速・マルチスレッド</td></tr>
    <tr><td>向き</td><td>セッション管理・ランキング・Pub/Sub</td><td>シンプルなキャッシュ</td></tr></table>
  `},
  {id:'ar-7',icon:'λ',title:'⑦ サーバーレスで動かす — AWS Lambda',lead:'サーバーを用意せず、コードだけ書けば動くサービスです',html:`
    <p class="a-p">「<span class="term" data-term="lambda">AWS Lambda</span>」はサーバーレスコンピューティングサービスです。EC2のようにサーバーを常時起動しておく必要はなく、イベントをきっかけに自動でコードが実行されます。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>電灯の自動センサーと同じ。人が部屋に入ったとき（イベント）だけ電気がつき（コードが実行）、出ると消えます。常に電気をつけっぱなしのEC2と違い、使ったときしか課金されません。</div>
    <div class="a-h3">Lambdaのトリガー（イベント）</div>
    <table class="tbl"><tr><th>トリガー</th><th>イベント例</th><th>ユースケース</th></tr>
    <tr><td>Amazon S3</td><td>ファイルアップロード・削除</td><td>画像リサイズ・ETL処理</td></tr>
    <tr><td>API Gateway</td><td>HTTPリクエスト（GET/POST）</td><td>REST API バックエンド</td></tr>
    <tr><td>DynamoDB Streams</td><td>テーブルのデータ変更</td><td>変更の通知・集計処理</td></tr>
    <tr><td>EventBridge</td><td>定時実行（cron）</td><td>定期バッチ処理</td></tr>
    <tr><td>SQS</td><td>キューへのメッセージ追加</td><td>非同期処理</td></tr>
    <tr><td>SNS</td><td>通知イベント</td><td>プッシュ通知・メール送信</td></tr></table>
    <div class="a-h3">具体的な活用例</div>
    <div class="steps">
      <div class="step"><div class="step-n">📸</div><div class="step-body"><div class="step-t">画像の自動リサイズ</div><div class="step-d">S3に画像がアップロードされたとき（イベント）、Lambdaが自動でサムネイルを生成してS3に保存する</div></div></div>
      <div class="step"><div class="step-n">🌐</div><div class="step-body"><div class="step-t">サーバーレスAPIバックエンド</div><div class="step-d">API Gatewayと組み合わせて、HTTPリクエストをトリガーにLambdaが処理してレスポンスを返す。サーバー管理不要。</div></div></div>
      <div class="step"><div class="step-n">⏰</div><div class="step-body"><div class="step-t">定期バッチ処理</div><div class="step-d">EventBridgeで「毎日0時に実行」のようなcronスケジュールでLambdaを起動。データ集計・レポート生成に活用</div></div></div>
    </div>
    <div class="a-h3">Lambdaの制約と注意点</div>
    <table class="tbl"><tr><th>項目</th><th>制限値</th></tr>
    <tr><td>最大実行時間</td><td>15分（タイムアウト）</td></tr>
    <tr><td>メモリ</td><td>128MB〜10,240MB</td></tr>
    <tr><td>デプロイパッケージ</td><td>50MB（ZIP）/ 250MB（解凍後）</td></tr>
    <tr><td>同時実行数</td><td>デフォルト1,000（リージョン単位）</td></tr></table>
    <div class="tip"><div class="tip-lbl">❄️ コールドスタートとは</div>Lambdaは使われていない間、コンテナが停止します。リクエストが来たとき初回の起動（コールドスタート）は数百ms〜数秒かかることがあります。重要なAPIには<strong>プロビジョニングされた同時実行数</strong>を設定することでコールドスタートを回避できます。</div>
  `},
  {id:'ar-8',icon:'🔐',title:'⑧ アクセスを管理する — AWS IAM',lead:'「誰が」「何に」「何ができるか」を管理するサービスです',html:`
    <p class="a-p">「<span class="term" data-term="iam">IAM（Identity and Access Management）</span>」はAWSを始めて最初に理解すべき重要サービスです。どのユーザーがどのAWSサービスにどんな操作ができるかを細かく制御します。</p>
    <table class="tbl"><tr><th>要素</th><th>説明</th><th>例え</th></tr>
    <tr><td>IAMユーザー</td><td>AWSにログインできる個人アカウント</td><td>社員証</td></tr>
    <tr><td>IAMグループ</td><td>ユーザーの集まり。まとめて権限付与</td><td>部署（開発部・営業部）</td></tr>
    <tr><td>IAMロール</td><td>EC2等のサービスに付与する一時的な権限</td><td>「EC2はS3を読める」許可書</td></tr>
    <tr><td>IAMポリシー</td><td>権限の定義（JSON形式）</td><td>職務規程</td></tr></table>
    <div class="a-h3">IAMポリシーの仕組み</div>
    <p class="a-p">IAMポリシーはJSON形式で記述します。どの「アクション（Action）」を、どの「リソース（Resource）」に対して「許可/拒否（Effect）」するかを定義します。</p>
    <div class="tip"><div class="tip-lbl">📋 ポリシーの例：特定のS3バケットの読み取りのみ許可</div>
    <span class="kw">Effect: Allow</span> → 許可<br>
    <span class="kw">Action: s3:GetObject</span> → オブジェクトの取得<br>
    <span class="kw">Resource: arn:aws:s3:::my-bucket/*</span> → my-bucketの全オブジェクト
    </div>
    <div class="a-h3">IAM セキュリティのベストプラクティス</div>
    <div class="steps">
      <div class="step"><div class="step-n">1</div><div class="step-body"><div class="step-t">ルートアカウントを日常使用しない</div><div class="step-d">ルートアカウントは全権限を持つ「神アカウント」。日常作業はIAMユーザーで行い、ルートアカウントはMFA設定・請求確認のみに使用する</div></div></div>
      <div class="step"><div class="step-n">2</div><div class="step-body"><div class="step-t">MFA（多要素認証）を有効化</div><div class="step-d">パスワード＋スマホ認証アプリのコードで2段階認証。漏洩してもアカウントを守れる。特にルートアカウントとIAMユーザーに必ず設定する</div></div></div>
      <div class="step"><div class="step-n">3</div><div class="step-body"><div class="step-t">最小権限の原則</div><div class="step-d">必要最小限の権限のみ付与する。「とりあえず管理者権限」は厳禁。侵害されたときの被害を最小化できる</div></div></div>
      <div class="step"><div class="step-n">4</div><div class="step-body"><div class="step-t">アクセスキーは慎重に管理</div><div class="step-d">プログラムからAWS APIを使うためのアクセスキーは、GitHubなどに誤ってコミットしないよう注意。EC2からはIAMロールを使う</div></div></div>
    </div>
    <div class="tip"><div class="tip-lbl">🔴 セキュリティの鉄則</div>ルートアカウントの日常利用を避け、IAMユーザーで作業しましょう。<strong>最小権限の原則</strong>として、必要最小限の権限だけ付与することがセキュリティの基本です。</div>
  `},
  {id:'ar-9',icon:'⚖️',title:'⑨ 負荷分散と自動スケール — ELB & Auto Scaling',lead:'アクセスが集中しても落ちないシステムを作る仕組みです',html:`
    <p class="a-p">本番環境では1台のサーバーに全アクセスを集中させてはいけません。サーバーが落ちたときの備えと、急なアクセス増加への対応のために「負荷分散」と「自動スケール」が必要です。</p>
    <div class="a-h3">Elastic Load Balancing（ELB）</div>
    <p class="a-p">ELBは複数のEC2インスタンスに<strong>トラフィックを自動で分散</strong>するサービスです。1台が故障してもELBが自動で切り離し、残りのサーバーで処理を継続します。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>混雑するレジを想像してください。ELBは「どのレジが空いているか案内するスタッフ」です。お客さん（リクエスト）を均等に各レジ（EC2）に振り分けてくれます。</div>
    <table class="tbl"><tr><th>種類</th><th>動作層</th><th>特徴</th><th>用途</th></tr>
    <tr><td><strong>ALB</strong>（Application LB）</td><td>第7層（HTTP）</td><td>パスやホストヘッダーで振り分け先を変えられる</td><td>Webアプリ・マイクロサービス</td></tr>
    <tr><td><strong>NLB</strong>（Network LB）</td><td>第4層（TCP/UDP）</td><td>超高速・固定IP。HTTP以外も処理可能</td><td>ゲーム・IoT・VoIP</td></tr>
    <tr><td><strong>GLB</strong>（Gateway LB）</td><td>第3層（IP）</td><td>サードパーティ製セキュリティ機器への転送</td><td>ファイアウォール・IDS連携</td></tr></table>
    <div class="a-h3">Auto Scaling — 需要に応じてサーバーを自動増減</div>
    <p class="a-p">Auto ScalingはCPU使用率などのメトリクスを見てEC2の台数を自動で増減させます。アクセスが多い時は台数を増やし（スケールアウト）、少ない時は減らす（スケールイン）ことでコストと性能を最適化します。</p>
    <div class="steps">
      <div class="step"><div class="step-n">📈</div><div class="step-body"><div class="step-t">スケールアウト（台数増加）</div><div class="step-d">CPU使用率が70%超過などのトリガーで新しいEC2を自動起動。ELBに自動登録されトラフィックが分散される</div></div></div>
      <div class="step"><div class="step-n">📉</div><div class="step-body"><div class="step-t">スケールイン（台数削減）</div><div class="step-d">CPU使用率が低い状態が続くとEC2を停止。不要なコストを削減する。最小台数（min）は必ず維持される</div></div></div>
    </div>
    <div class="tip"><div class="tip-lbl">💡 ELB ＋ Auto Scaling の組み合わせ</div>ELBとAuto ScalingをセットにすることでAWSの「弾力性（Elasticity）」が実現します。突然のアクセス急増でも自動でサーバーが増え、アクセスが減れば自動で台数が減ります。24時間手動操作なしで最適な性能とコストを維持できます。</div>
  `},
  {id:'ar-10',icon:'📊',title:'⑩ 監視とアラート — Amazon CloudWatch',lead:'AWSリソースの状態を常に監視し、異常を即座に検知します',html:`
    <p class="a-p">本番環境では何かが起きたときにすぐ気づける仕組みが必要です。<strong>Amazon CloudWatch</strong>はAWSの統合監視サービスで、メトリクス・ログ・アラートを一元管理します。</p>
    <div class="a-h3">CloudWatchの主な機能</div>
    <div class="steps">
      <div class="step"><div class="step-n">📈</div><div class="step-body"><div class="step-t">メトリクス</div><div class="step-d">EC2のCPU使用率・RDSのコネクション数・ELBのリクエスト数など、AWSサービスの数値データを自動収集。1分単位（詳細監視）でグラフ表示できる</div></div></div>
      <div class="step"><div class="step-n">🔔</div><div class="step-body"><div class="step-t">アラーム</div><div class="step-d">「CPU使用率が80%を5分間超えたらメール通知」のような条件を設定。Auto ScalingのトリガーにもCloudWatchアラームを使う</div></div></div>
      <div class="step"><div class="step-n">📋</div><div class="step-body"><div class="step-t">ログ（CloudWatch Logs）</div><div class="step-d">EC2・Lambda・RDSなどのログを一元収集・保存・検索。エラーログのパターンを監視してアラームを出すことも可能</div></div></div>
      <div class="step"><div class="step-n">📊</div><div class="step-body"><div class="step-t">ダッシュボード</div><div class="step-d">複数のメトリクスを1画面に並べてシステムの状態を一目で確認できるカスタムダッシュボードを作成できる</div></div></div>
    </div>
    <div class="a-h3">よく監視するメトリクス</div>
    <table class="tbl"><tr><th>サービス</th><th>重要メトリクス</th><th>目安のしきい値</th></tr>
    <tr><td>EC2</td><td>CPUUtilization</td><td>70〜80%を超えたらアラート</td></tr>
    <tr><td>RDS</td><td>FreeStorageSpace・DatabaseConnections</td><td>ストレージ残量20%以下でアラート</td></tr>
    <tr><td>ALB</td><td>TargetResponseTime・HTTPCode_Target_5XX</td><td>5XXエラー率が1%超でアラート</td></tr>
    <tr><td>Lambda</td><td>Duration・Errors・Throttles</td><td>エラー率・スロットル数増加でアラート</td></tr></table>
    <div class="tip"><div class="tip-lbl">💡 CloudTrailとの違い</div>CloudWatchは「今のシステムの状態（メトリクス・ログ）」を監視します。一方 <strong>CloudTrail</strong> は「誰がいつ何を操作したか（APIコールの記録）」を監査します。セキュリティ対応には両方が必要です。</div>
  `},
  {id:'ar-11',icon:'🌐',title:'⑪ CDNとDNS — CloudFront & Route 53',lead:'世界中に高速・安全にコンテンツを届ける仕組みです',html:`
    <p class="a-p">Webサービスを世界中のユーザーに低遅延で届けるには「<span class="term" data-term="cdn">CDN</span>」と「<span class="term" data-term="dns">DNS</span>」が欠かせません。AWSでは<strong>CloudFront</strong>（CDN）と<strong>Route 53</strong>（DNS）がこの役割を担います。</p>
    <div class="a-h3">Amazon CloudFront — CDN（コンテンツデリバリーネットワーク）</div>
    <p class="a-p">CloudFrontは世界450か所以上のエッジロケーションにコンテンツをキャッシュし、ユーザーに最も近い場所から配信します。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>コンビニと同じ仕組み。本社（オリジンサーバー）が遠くにあっても、近所のコンビニ（エッジロケーション）に在庫（キャッシュ）があればすぐ手に入ります。</div>
    <div class="steps">
      <div class="step"><div class="step-n">1</div><div class="step-body"><div class="step-t">ユーザーがコンテンツをリクエスト</div><div class="step-d">ブラウザがCloudFrontのドメインにHTTPSリクエストを送信する</div></div></div>
      <div class="step"><div class="step-n">2</div><div class="step-body"><div class="step-t">最寄りのエッジロケーションが応答</div><div class="step-d">キャッシュがあれば即座にレスポンス（キャッシュヒット）。なければオリジンサーバーへ取得しに行く（キャッシュミス）</div></div></div>
      <div class="step"><div class="step-n">3</div><div class="step-body"><div class="step-t">次回以降はキャッシュから高速配信</div><div class="step-d">取得したコンテンツをエッジにキャッシュ。<span class="term" data-term="ttl">TTL</span>の期間中は次のリクエストも即座に応答できる</div></div></div>
    </div>
    <table class="tbl"><tr><th>CloudFrontの主なメリット</th><th>説明</th></tr>
    <tr><td>低レイテンシー</td><td>ユーザーに近い拠点から配信。東京ユーザーに東京エッジから配信</td></tr>
    <tr><td>オリジン負荷軽減</td><td>キャッシュヒット率が高いほどEC2・S3への直接リクエストが減る</td></tr>
    <tr><td>DDoS対策</td><td>AWS Shieldが自動的にDDoS攻撃を緩和</td></tr>
    <tr><td>WAF統合</td><td>AWS WAFと連携してSQLiやXSSを遮断</td></tr>
    <tr><td>HTTPS強制</td><td>HTTPをHTTPSにリダイレクト。ACM証明書を無料で利用可能</td></tr></table>
    <div class="a-h3">Amazon Route 53 — DNSサービス</div>
    <p class="a-p">Route 53はAWSのマネージドDNSサービスです。ドメインの登録から、Aレコード・CNAMEレコードの管理、ヘルスチェックによるフェイルオーバーまで一元管理できます。</p>
    <table class="tbl"><tr><th>ルーティングポリシー</th><th>動作</th><th>用途</th></tr>
    <tr><td>シンプル</td><td>1つのエンドポイントに誘導</td><td>通常の名前解決</td></tr>
    <tr><td>加重（Weighted）</td><td>重みに応じてトラフィックを分散</td><td>A/Bテスト・カナリアリリース</td></tr>
    <tr><td>レイテンシー</td><td>最も応答が速いリージョンへ誘導</td><td>グローバルサービスの最適化</td></tr>
    <tr><td>フェイルオーバー</td><td>プライマリが落ちたら自動でセカンダリへ</td><td>DR（災害復旧）</td></tr>
    <tr><td>地理的（Geolocation）</td><td>ユーザーの場所でルーティング先を変える</td><td>地域限定コンテンツ配信</td></tr></table>
    <div class="tip"><div class="tip-lbl">🎯 次のステップ</div>AWS入門ガイドを読み終えたら、<strong>🗂️ フラッシュカード</strong>→<strong>🗺️ 構成図</strong>→<strong>🎯 クイズ</strong>の順で理解を深めましょう！</div>
  `},
];

const DEV_READ = [
  {id:'dr-1',icon:'🖧',title:'① NIC（ネットワークカード）',lead:'コンピューターをネットワークにつなぐための「差し込み口」です',html:`
    <p class="a-p"><span class="term" data-term="nic">NIC（Network Interface Card）</span>は、コンピューターやスマホがネットワークに接続するための部品です。PCの側面にある四角いLANポートや、無線LANチップがこれにあたります。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>NICは「テレビのアンテナ端子」のようなもの。テレビ本体（コンピューター）に信号を受け取る口がなければ、どんなに良いケーブルをつないでも映りません。NICはその「口」の役割を担います。</div>
    <p class="a-p">すべてのNICには製造時に<span class="term" data-term="mac">MACアドレス</span>という世界で唯一の識別番号が割り当てられています。これは住民票の番号のようなもので、同じLAN内でデータを正しく届けるために使われます。</p>
    <table class="tbl"><tr><th>種類</th><th>特徴</th><th>用途</th></tr>
    <tr><td>有線NIC</td><td>LANケーブルで接続。安定・高速</td><td>デスクトップPC・サーバー</td></tr>
    <tr><td>無線NIC</td><td>Wi-Fiで接続。ケーブル不要</td><td>ノートPC・スマホ・タブレット</td></tr></table>
  `},
  {id:'dr-2',icon:'🔌',title:'② ハブ（Hub）',lead:'複数の機器をまとめてつなぐ「タコ足延長コード」です',html:`
    <p class="a-p"><span class="term" data-term="hub">ハブ</span>は複数のLANケーブルをまとめて接続できる機器です。ポートが4つや8つあり、そこに複数のPCやスイッチをつなぐことでネットワークを広げられます。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>ハブは「有線のタコ足延長コード」です。ただしコンセントと違い、1つの口に届いた電気（データ）を<strong>全部の口に同時に流してしまう</strong>という特性があります。これが後述するスイッチとの大きな違いです。</div>
    <div class="tip"><div class="tip-lbl">⚠️ 注意</div>ハブはデータを全ポートに垂れ流すため、接続台数が増えると<strong>衝突（コリジョン）</strong>が起きて速度が落ちます。現在の家庭・オフィスではほぼスイッチに置き換えられています。</div>
  `},
  {id:'dr-3',icon:'🔀',title:'③ スイッチ（Switch）',lead:'宛先を見極めて、必要な相手にだけデータを届ける「賢いハブ」です',html:`
    <p class="a-p"><span class="term" data-term="switch">スイッチ</span>はハブを進化させた機器です。接続された機器の<span class="term" data-term="mac">MACアドレス</span>を学習し、受け取ったデータを<strong>宛先の機器にだけ</strong>転送します。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>ハブが「回覧板を全員に同時に配る」とすれば、スイッチは「宛名を見て本人にだけポストに入れる」郵便配達員です。無駄な配達がなくなり、ネットワーク全体が効率よく動きます。</div>
    <div class="steps">
      <div class="step"><div class="step-n">1</div><div class="step-body"><div class="step-t">MACアドレスを学習</div><div class="step-d">各ポートに接続された機器のMACアドレスを記憶し「MACアドレステーブル」を作る</div></div></div>
      <div class="step"><div class="step-n">2</div><div class="step-body"><div class="step-t">宛先を確認</div><div class="step-d">受け取ったフレームの宛先MACアドレスを確認する</div></div></div>
      <div class="step"><div class="step-n">3</div><div class="step-body"><div class="step-t">該当ポートにだけ転送</div><div class="step-d">MACアドレステーブルを参照して、宛先機器がつながっているポートにのみデータを送る</div></div></div>
    </div>
    <div class="tip"><div class="tip-lbl">💡 POINT</div>家庭のWi-FiルーターにはLANポートが複数ありますが、内部にスイッチ機能が内蔵されています。</div>
  `},
  {id:'dr-4',icon:'🌐',title:'④ ルーター（Router）',lead:'異なるネットワーク同士をつなぎ、データの「道案内」をする機器です',html:`
    <p class="a-p"><span class="term" data-term="router">ルーター</span>は、異なるネットワーク間でデータを転送する機器です。<span class="term" data-term="ip">IPアドレス</span>を見てどこへ転送するかを判断する「<span class="term" data-term="routing">ルーティング</span>」を行います。スイッチがLAN内の通信を担うのに対し、ルーターはLAN同士やLANとインターネットをつなぐ役割を担います。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>スイッチが「建物内の内線電話交換機」とすれば、ルーターは「国際電話の交換局」です。国内（LAN内）の通話はスイッチが処理し、海外（インターネット）との通話はルーターが適切な経路を選んで中継します。</div>
    <table class="tbl"><tr><th>機能</th><th>スイッチ</th><th>ルーター</th></tr>
    <tr><td>使うアドレス</td><td><span class="term" data-term="mac">MACアドレス</span></td><td><span class="term" data-term="ip">IPアドレス</span></td></tr>
    <tr><td>接続範囲</td><td>同一ネットワーク内</td><td>異なるネットワーク間</td></tr>
    <tr><td>OSI層</td><td>第2層（データリンク層）</td><td>第3層（ネットワーク層）</td></tr></table>
    <p class="a-p">家庭用Wi-Fiルーターは「ルーター＋スイッチ＋アクセスポイント」の3機能が1台にまとまった複合機器です。<span class="term" data-term="gateway">デフォルトゲートウェイ</span>として、LAN内のすべての機器がインターネットへ出る出口になります。</p>
  `},
  {id:'dr-5',icon:'📡',title:'⑤ モデム（Modem）',lead:'自宅のネットワークとインターネットをつなぐ「玄関扉」です',html:`
    <p class="a-p"><span class="term" data-term="modem">モデム</span>は、<span class="term" data-term="isp">ISP</span>（インターネットプロバイダ）の回線と自宅のLANをつなぐ機器です。回線の種類によって呼び名や形が異なります。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>モデムは「翻訳者」です。インターネット側の言葉（光信号や電話回線の信号）を、家の中のコンピューターが理解できるデジタル信号に翻訳してくれます。</div>
    <table class="tbl"><tr><th>回線種別</th><th>機器の名前</th><th>特徴</th></tr>
    <tr><td>光回線（FTTH）</td><td>ONU（光回線終端装置）</td><td>現在の主流。高速・安定</td></tr>
    <tr><td>ADSL（旧来）</td><td>ADSLモデム</td><td>電話回線を利用。低速・廃止傾向</td></tr>
    <tr><td>ケーブルTV回線</td><td>ケーブルモデム</td><td>テレビ回線共用</td></tr></table>
    <div class="tip"><div class="tip-lbl">💡 家庭の構成</div>インターネット ↔ <strong>ONU（モデム）</strong> ↔ <strong>Wi-Fiルーター</strong> ↔ PC・スマホ<br>ONUとルーターが別の機器として提供されるケースと、一体型（ホームゲートウェイ）のケースがあります。</div>
  `},
  {id:'dr-6',icon:'📶',title:'⑥ アクセスポイント（AP）',lead:'有線LANを無線Wi-Fiに変換する「電波の出口」です',html:`
    <p class="a-p"><span class="term" data-term="ap">アクセスポイント</span>は、有線LANネットワークにWi-Fi（無線LAN）機能を追加する機器です。スマホやノートPCが電波で接続できるようになります。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>アクセスポイントは「ラジオ放送局」のようなもの。有線で届いたデータを電波に変換して周囲にまき散らし、Wi-Fi対応機器がどこからでも受信できるようにします。</div>
    <p class="a-p">接続するネットワークの名前は<span class="term" data-term="ssid">SSID</span>と呼ばれます。パスワード（WPA2/WPA3暗号化）と組み合わせることで、許可された機器だけが接続できるようになります。</p>
    <div class="tip"><div class="tip-lbl">💡 Wi-Fi規格の進化</div>
    <table class="tbl"><tr><th>規格名</th><th>最大速度</th><th>周波数</th></tr>
    <tr><td>Wi-Fi 5（802.11ac）</td><td>約6.9Gbps</td><td>5GHz</td></tr>
    <tr><td>Wi-Fi 6（802.11ax）</td><td>約9.6Gbps</td><td>2.4/5GHz</td></tr>
    <tr><td>Wi-Fi 6E</td><td>約9.6Gbps</td><td>2.4/5/6GHz</td></tr></table></div>
  `},
  {id:'dr-7',icon:'🛡️',title:'⑦ ファイアウォール機器',lead:'ネットワークへの不正アクセスを防ぐ「番人」です',html:`
    <p class="a-p"><span class="term" data-term="firewall">ファイアウォール</span>はソフトウェアとして実装されることも多いですが、企業ネットワークでは専用のハードウェア機器として設置されることもあります。インターネットと社内ネットワークの境界に置かれ、許可されていない通信を遮断します。</p>
    <div class="analogy"><div class="analogy-lbl">💡 わかりやすい例え</div>ファイアウォールはビルの「警備員」です。正当な用件（許可されたポートやIPからの通信）を持つ人だけを通し、不審者（不正アクセス）は入口でブロックします。</div>
    <div class="a-h3">UTM（統合脅威管理）</div>
    <p class="a-p">現代の企業向けネットワーク機器では、ファイアウォール・<span class="term" data-term="vpn">VPN</span>・ウイルス対策・不正侵入検知などの機能を1台にまとめた<strong>UTM（Unified Threat Management）</strong>が広く使われています。</p>
  `},
  {id:'dr-8',icon:'🏗️',title:'⑧ 機器の組み合わせ方',lead:'実際のネットワークは複数の機器を組み合わせて作られています',html:`
    <p class="a-p">ここまで学んだ機器が、実際の家庭・オフィス・データセンターではどう組み合わされているか見てみましょう。</p>
    <div class="a-h3">家庭のネットワーク構成</div>
    <div class="steps">
      <div class="step"><div class="step-n">🌍</div><div class="step-body"><div class="step-t">インターネット（ISP回線）</div><div class="step-d">光ファイバーやケーブルが家まで引き込まれている</div></div></div>
      <div class="step"><div class="step-n">📡</div><div class="step-body"><div class="step-t">ONU（モデム）</div><div class="step-d">光信号をデジタル信号に変換する</div></div></div>
      <div class="step"><div class="step-n">🌐</div><div class="step-body"><div class="step-t">Wi-Fiルーター（ルーター＋スイッチ＋AP）</div><div class="step-d">有線・無線でスマホ・PC・テレビなどをLANに接続。NAT機能でプライベートIPを変換してインターネットへ</div></div></div>
      <div class="step"><div class="step-n">💻</div><div class="step-body"><div class="step-t">端末（PC・スマホ・タブレット）</div><div class="step-d">NICを通じて有線または無線でルーターに接続</div></div></div>
    </div>
    <div class="a-h3">ネットワークの性能を決める指標</div>
    <table class="tbl"><tr><th>指標</th><th>意味</th><th>重要な用途</th></tr>
    <tr><td><span class="term" data-term="bandwidth">帯域幅（バンド幅）</span></td><td>一度に流せるデータ量</td><td>動画配信・ファイルDL</td></tr>
    <tr><td><span class="term" data-term="latency">レイテンシー（遅延）</span></td><td>データが往復する時間</td><td>オンラインゲーム・通話</td></tr></table>
    <div class="tip"><div class="tip-lbl">🎯 まとめ</div>
    NIC → スイッチ → ルーター → モデム → インターネット、という経路がデータの旅路です。各機器がOSIモデルの異なる層を担当して連携し、私たちの通信を支えています。</div>
  `},
];

/* ============================================================
   TERMS — 専門用語辞書（キーは記事HTMLの data-term 属性値）
   ============================================================ */
const TERMS = {
  network:    {w:'ネットワーク',    b:'複数のコンピューターが<strong>つながって情報をやり取り</strong>できる仕組みのこと。家庭内のWi-FiもネットワークのひとつでLAN（ローカルエリアネットワーク）と呼ばれる。'},
  lan:        {w:'LAN',             b:'<strong>Local Area Network</strong>の略。家や会社など限られた範囲内のネットワーク。Wi-Fiも有線LANもLANの一種。'},
  internet:   {w:'インターネット',  b:'世界中のLANが相互につながった巨大なネットワーク。ウェブ・メール・動画配信などあらゆるサービスが乗っている。'},
  ip:         {w:'IPアドレス',      b:'ネットワーク上の機器を識別する<strong>住所</strong>のこと。IPv4では「192.168.1.1」のように数字4つをドットでつなぐ。グローバルIP（インターネット用）とプライベートIP（LAN内部用）がある。'},
  privateip:  {w:'プライベートIP',  b:'LAN内でのみ使う内部用アドレス。外部のインターネットからは直接届かない。192.168.x.x や 10.x.x.x の範囲が使われる。'},
  publicip:   {w:'パブリックIP',    b:'インターネット上で世界に公開されているグローバルなアドレス。ISP（インターネットプロバイダ）から割り当てられる。'},
  nat:        {w:'NAT',             b:'<strong>Network Address Translation</strong>の略。プライベートIPをパブリックIPに変換する技術。家のルーターが自動でやっている。AWSでは「NAT Gateway」が担当する。'},
  packet:     {w:'パケット',        b:'ネットワーク上でデータを送るときに分割された<strong>小さなかたまり</strong>。宛先・送信元・順番などの情報を持つ。受信側でパケットを組み合わせて元のデータに復元する。'},
  router:     {w:'ルーター',        b:'パケットを宛先IPアドレスに基づいて<strong>適切な経路へ転送</strong>する機器。家庭ではWi-Fiルーターがこの役割を担う。AWSではルートテーブルが相当。'},
  routing:    {w:'ルーティング',    b:'パケットを目的地まで届けるために<strong>最適な経路を選ぶ</strong>仕組み。ルーターがルーティングテーブルを参照して次の転送先を決定する。'},
  dns:        {w:'DNS',             b:'<strong>Domain Name System</strong>の略。「example.com」のようなドメイン名をIPアドレスに変換する仕組み。インターネット版の電話帳。世界中に分散した複数のサーバーが協力して名前解決を行う。'},
  dnsresolver:{w:'DNSリゾルバー',   b:'端末からDNS問い合わせを受け取り、代わりに名前解決を行うサーバー。通常はISPや組織が提供する。Google（8.8.8.8）やCloudflare（1.1.1.1）の公開DNSリゾルバーも有名。フルサービスリゾルバーとも呼ばれる。'},
  rootdns:    {w:'ルートDNSサーバー', b:'DNSの頂点に立つサーバー。「.com」「.jp」などのTLDを管理するサーバーの在り処を知っている。世界に13系統（a〜m）が存在し、数百台のサーバーが分散稼働している。'},
  tld:        {w:'TLD（トップレベルドメイン）', b:'ドメイン名の最後の部分。「.com」「.jp」「.net」など。これを管理するTLDサーバーが、次の権威DNSサーバーの場所を教える。'},
  authns:     {w:'権威DNSサーバー',  b:'特定のドメイン（例：example.com）のIPアドレスを実際に知っているサーバー。DNSの最終回答者。ドメインを取得したとき、そのドメインのIPアドレスをここに登録する。'},
  dnscache:   {w:'DNSキャッシュ',   b:'一度解決したドメインとIPアドレスの対応をPCやリゾルバーが一時的に記憶しておく仕組み。同じドメインへの2回目以降のアクセスはキャッシュから即答できるため高速になる。TTLで有効期限が決まる。'},
  ttl:        {w:'TTL（Time To Live）', b:'DNSのキャッシュが有効な時間（秒）。TTL=3600なら1時間キャッシュが保持される。サーバー移転時はTTLを短く設定しておくと、IPアドレス変更が素早く世界に反映される。'},
  arecord:    {w:'Aレコード',        b:'DNSのレコード種別のひとつ。ドメイン名とIPv4アドレスを対応づける最も基本的なレコード。「example.com → 93.184.216.34」のように登録する。'},
  port:       {w:'ポート番号',       b:'同じIPアドレスを持つコンピューター上で動く<strong>複数のアプリを区別するための番号</strong>（0〜65535）。IPアドレスが「建物の住所」なら、ポート番号は「部屋番号」。HTTPは80番、HTTPSは443番、SSHは22番など用途ごとに標準的な番号が決まっている。'},
  domain:     {w:'ドメイン名',      b:'「example.com」のような人間が読みやすいWebサイトのアドレス。DNSがこれをIPアドレスに変換してくれる。'},
  tcp:        {w:'TCP',             b:'<strong>Transmission Control Protocol</strong>の略。データを<strong>確実に届ける</strong>通信プロトコル。3ウェイハンドシェイクで接続を確立し、届いたかどうか確認しながら通信する。'},
  udp:        {w:'UDP',             b:'<strong>User Datagram Protocol</strong>の略。確認なしで<strong>速くデータを送る</strong>プロトコル。一部欠けても問題ない動画・音声・ゲームに向いている。'},
  protocol:   {w:'プロトコル',      b:'コンピューター同士が通信するときの<strong>共通ルール・取り決め</strong>のこと。HTTP・TCP・IPなどがある。異なるメーカーの機器でも同じプロトコルを話せば通信できる。'},
  http:       {w:'HTTP / HTTPS',    b:'Webページをやり取りするプロトコル。<strong>HTTP</strong>は暗号化なし（ポート80）、<strong>HTTPS</strong>はTLSで暗号化（ポート443）。ブラウザの🔒マークはHTTPSの印。'},
  ssl:        {w:'SSL / TLS',       b:'通信を<strong>暗号化</strong>するプロトコル。SSLは古くて脆弱なため現在はTLS 1.3が推奨。HTTPSのSがSecure（安全）を意味し、TLSがその安全性を担保している。'},
  firewall:   {w:'ファイアウォール', b:'事前に設定したルールに従い通信を<strong>許可・拒否</strong>するセキュリティの仕組み。不正なアクセスをブロックする門番。AWSではセキュリティグループが相当する。'},
  vpn:        {w:'VPN',             b:'<strong>Virtual Private Network</strong>の略。インターネット上に暗号化された<strong>プライベートなトンネル</strong>を作る技術。テレワークで会社ネットワークに安全に接続する際などに使われる。'},
  osi:        {w:'OSIモデル',       b:'ネットワーク通信を<strong>7つの層</strong>に分けた国際標準の参照モデル。物理層・データリンク層・ネットワーク層・トランスポート層・セッション層・プレゼンテーション層・アプリケーション層からなる。'},
  // AWS terms
  cloud:      {w:'クラウド',        b:'インターネット経由で<strong>他社のコンピューター・ストレージ・ネットワーク</strong>を使えるサービスのこと。使った分だけ料金を払う従量課金制が一般的。'},
  onpremise:  {w:'オンプレミス',    b:'自社でサーバー・ネットワーク機器を購入し、自社のデータセンターや社内に設置して運用する形態。初期費用が大きく管理の手間もかかる。'},
  region:     {w:'リージョン',      b:'AWSのデータセンター群を地理的に区切った単位。日本には「東京（ap-northeast-1）」と「大阪（ap-northeast-3）」がある。データをどの国・地域に保存するか選べる。'},
  az:         {w:'AZ（アベイラビリティゾーン）', b:'リージョン内にある独立したデータセンター群。電源・冷却・ネットワークが独立しているため、1つのAZが障害を起こしても他のAZは稼働し続ける。高可用性の基本。'},
  ec2:        {w:'Amazon EC2',      b:'<strong>Elastic Compute Cloud</strong>の略。AWSが提供する仮想サーバーサービス。LinuxやWindowsのサーバーをクラウド上に数分で作成でき、使い終われば削除して課金を止められる。'},
  ami:        {w:'AMI（Amazon Machine Image）', b:'EC2インスタンスを起動するための<strong>テンプレート</strong>。OS・ミドルウェア・アプリケーションの設定がパッケージ化されている。AWSが提供する公式AMI（Amazon Linux・Ubuntu等）のほか、自分でカスタムAMIを作成してチーム内で共有することもできる。'},
  s3:         {w:'Amazon S3',       b:'<strong>Simple Storage Service</strong>の略。AWSのオブジェクトストレージ。容量は実質無制限で耐久性は99.999999999%（イレブンナイン）。ファイル・画像・動画・バックアップの保存先として広く使われる。'},
  vpc:        {w:'Amazon VPC',      b:'<strong>Virtual Private Cloud</strong>の略。AWS上に作る仮想プライベートネットワーク。IPアドレス範囲・サブネット・ルートテーブル・ファイアウォールを自由に設計できる。'},
  subnet:     {w:'サブネット',      b:'VPCのIPアドレス空間を小さく<strong>分割した区画</strong>のこと。インターネットに直接つながる「パブリックサブネット」と、外部から隔離された「プライベートサブネット」がある。'},
  igw:        {w:'インターネットゲートウェイ（IGW）', b:'VPCとインターネットをつなぐ<strong>出入り口</strong>。パブリックサブネットのルートテーブルにIGWへのルートを追加することでインターネット通信が可能になる。'},
  sg:         {w:'セキュリティグループ', b:'EC2などのAWSリソースへの通信を<strong>許可・拒否</strong>するファイアウォール。ステートフル（行きを許可すると帰りも自動許可）で動作する。許可ルールのみ設定可能。'},
  rds:        {w:'Amazon RDS',      b:'<strong>Relational Database Service</strong>の略。MySQL・PostgreSQL・Auroraなどのリレーショナルデータベースをマネージドで提供。バックアップ・パッチ適用・フェイルオーバーをAWSが代行する。'},
  dynamodb:   {w:'DynamoDB',        b:'AWSのフルマネージドNoSQLデータベース。キー・バリュー型でミリ秒以下の低レイテンシー。自動スケーリングでトラフィックに応じて容量が自動調整される。'},
  lambda:     {w:'AWS Lambda',      b:'サーバーレスのコード実行サービス。サーバーを用意・管理せず、イベント（S3アップロード・APIリクエスト等）が発生したときだけコードが動く。実行時間×リクエスト数での従量課金。'},
  iam:        {w:'IAM',             b:'<strong>Identity and Access Management</strong>の略。「誰が・何に・何をできるか」をコントロールするAWSのアクセス管理サービス。ユーザー・グループ・ロール・ポリシーで権限を細かく定義する。'},
  serverless: {w:'サーバーレス',    b:'サーバーの管理・運用を<strong>意識せずにアプリを動かせる</strong>仕組み。物理サーバーやOSの管理はクラウド側が担当。AWS LambdaやDynamoDBがその代表例。コードやデータにだけ集中できる。'},
  managed:    {w:'マネージドサービス', b:'OSのパッチ適用・バックアップ・フェイルオーバーなどの<strong>運用作業をAWSが代わりに行う</strong>サービスのこと。RDS・ElastiCache・ECSなどが該当。自社での管理負担を大きく減らせる。'},
  failover:   {w:'フェイルオーバー', b:'プライマリ（主系）のサーバーやDBに障害が起きたとき、<strong>自動的にスタンバイ（待機系）へ切り替える</strong>仕組み。RDSのマルチAZはこのフェイルオーバーを自動で行う。'},
  cdn:        {w:'CDN',             b:'<strong>Content Delivery Network</strong>の略。世界中の拠点（エッジロケーション）にコンテンツをキャッシュして配信するネットワーク。ユーザーに近い場所からデータを届けることで高速化と負荷分散を実現。AWSではCloudFrontが相当。'},
  isp:        {w:'ISP',             b:'<strong>Internet Service Provider</strong>の略。インターネット接続サービスを提供する事業者のこと。NTT・ソフトバンク・auなどがISPにあたる。家庭や企業はISPと契約することでインターネットに接続できる。'},
  nic:        {w:'NIC',             b:'<strong>Network Interface Card</strong>の略。コンピューターをネットワークに接続するための拡張カード（チップ）。有線LANポートや無線LANチップがこれにあたる。各NICには世界で唯一のMACアドレスが割り当てられている。'},
  mac:        {w:'MACアドレス',     b:'NICに出荷時から焼き付けられた<strong>物理的な識別番号</strong>（48bit）。「00:1A:2B:3C:4D:5E」のような16進数で表される。同一ネットワーク内でデータを届けるために使われ、IPアドレスとは別の仕組み。'},
  hub:        {w:'ハブ（Hub）',     b:'複数のLANケーブルを接続してネットワークを拡張する機器。受け取ったデータを<strong>全ポートに無差別に転送</strong>する（リピーターハブ）。現在はほぼスイッチに置き換えられている。'},
  switch:     {w:'スイッチ（Switch）', b:'複数の機器をつなぐネットワーク機器。ハブと違い、<strong>MACアドレスを学習して宛先ポートにだけ</strong>データを転送する。無駄な通信が減り効率的。家庭のWi-Fiルーターにもスイッチ機能が内蔵されている。'},
  modem:      {w:'モデム（Modem）', b:'自宅のLANとISPのネットワークを接続する機器。アナログ信号とデジタル信号を相互変換する。光回線では「ONU（光回線終端装置）」がモデムの役割を担う。'},
  ap:         {w:'アクセスポイント（AP）', b:'有線LANネットワークに無線LAN（Wi-Fi）機能を追加する機器。スマホやPCが無線で接続できる出入り口。家庭用Wi-Fiルーターにも内蔵されている。'},
  ssid:       {w:'SSID',            b:'Wi-Fiのネットワーク名のこと。スマホで「Wi-Fiに接続」するときに一覧表示される「Buffalo-A-XXXX」などの文字列がSSID。同じSSIDとパスワードで同じネットワークに接続できる。'},
  bandwidth:  {w:'帯域幅（バンド幅）', b:'ネットワークが一度に転送できるデータ量の上限。水道管の太さに例えられる。単位はbps（ビット毎秒）。「100Mbps」なら1秒間に最大100メガビットのデータを転送できる。'},
  latency:    {w:'レイテンシー（遅延）', b:'データを送ってから返ってくるまでの<strong>時間的な遅れ</strong>。「ping値」とも呼ばれる。単位はms（ミリ秒）。動画は帯域幅が重要、ゲームはレイテンシーが重要というように用途によって求められる性能が異なる。'},
  gateway:    {w:'デフォルトゲートウェイ', b:'LAN内の機器が<strong>外部ネットワーク（インターネット）に出るときの出口</strong>となる機器のIPアドレス。通常は家庭のルーターがデフォルトゲートウェイになる。宛先IPがLAN外の場合、パケットはまずここへ送られる。'},
};
