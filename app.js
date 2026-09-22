const questions = [
  ["DFDで用いられる図形要素だけの組みはどれか。", ["関連、実体、データストア", "関連、データストア、データフロー", "源泉と吸収、実体、プロセス", "源泉と吸収、データフロー、プロセス"], "エ", "DFDは、外部実体（源泉と吸収）、データフロー、プロセス、データストアで構成されます。"],
  ["オブジェクト指向設計における開放・閉鎖原則の説明はどれか。", ["クラスにもたせる役割は一つだけにする。", "クライアントごとに必要なインタフェースを分ける。", "上位モジュールは下位モジュールに依存しない。", "機能の追加や変更が可能で、その影響を他のモジュールに及ぼさない。"], "エ", "開放・閉鎖原則は「拡張に対して開き、変更に対して閉じる」設計です。既存モジュールを変更せず機能を追加できる選択肢が該当します。"],
  ["複数のWebサイトに一度ログインすれば全てを利用できる仕組みを実現するOSSはどれか。", ["BIND", "Keycloak", "Logstash", "OpenSSL"], "イ", "Keycloakは、OpenID ConnectやSAMLに対応した認証・認可基盤で、シングルサインオンを実現できます。"],
  ["入力データから中間キーと値を生成し、同じキーの値を加工する2段階の並列処理モデルはどれか。", ["2相コミット", "KVS", "MapReduce", "マルチスレッド"], "ウ", "Map処理でキーと値を生成し、Reduce処理でキーごとに集約・加工します。"],
  ["Observerパターンを利用して実現できることはどれか。", ["状態変化時に依存する全オブジェクトへ自動通知する。", "オブジェクトをラップして機能を動的に拡張する。", "クラスのインスタンスが一つだけであることを保証する。", "異なるコンテナを同一インタフェースでアクセスする。"], "ア", "ObserverはSubjectの状態変化を複数のObserverへ通知する、出版・購読型のパターンです。"],
  ["ソースプログラムを分析して、プログラム中のエラーの有無などを調べるテストツールはどれか。", ["静的解析ツール", "テストカバレッジ分析ツール", "テストベッド", "メトリクス計測ツール"], "ア", "静的解析はプログラムを実行せず、ソースコードの構文・規約違反や潜在的な問題を分析します。"],
  ["プログラムPをテストケースの集合であるテストセットTでテストし、テスト結果が全て想定結果と一致することを確認した。\n\nそのテストセットTに不具合を検出できる十分な能力があるかどうかを評価するために、次の手順でテストを行った。このテストを何と呼ぶか。\n\n〔手順〕\n\n　① プログラムPのステートメントの1か所に、例えば (a＋b＞1) を (a＋b＞0) にするというような、軽微な変更を行ったプログラムP₁、P₂、P₃、…、Pₘを作成する。このm個のプログラムの変更内容は、全て異なっている。\n\n　② テストセットTを用いて全てのプログラムP₁、P₂、P₃、…、Pₘをテストする。\n\n　③ P₁からPₘまでのm個のプログラムのうち、プログラムPと異なるテスト結果となったプログラムの総数をNとし、次式によって、テストセットTの有効性の指標Eを算出する。\n\n　　　　　　　　　N\n　　　　　　E ＝ ───\n　　　　　　　　　m", ["探索的テスト", "ドメイン分析テスト", "ミューテーションテスト", "ユースケーステスト"], "ウ", "ミューテーションテストは、意図的に変異（ミュータント）を作り、テストがそれを検出できるかを評価します。"],
  ["プログラムの構造的な複雑度を測る尺度としてMcCabeが提唱したサイクロマティック複雑度がある。制御の流れが次のグラフで表されるプログラムのサイクロマティック複雑度は幾らか。ここで、エッジの個数をe、ノードの個数をnとし、サイクロマティック複雑度はe－n＋2で求めるものとする。", ["3", "4", "5", "7"], "イ", "サイクロマティック複雑度は独立した実行経路の数を表す尺度です。図ではe＝7、n＝5なので、e－n＋2＝4です。"],
  ["引数として渡した変数の値が、サブルーチン実行後に変更されないことが保証される受渡し方法はどれか。", ["値呼出し", "結果呼出し", "参照呼出し", "名前呼出し"], "ア", "値呼出しでは値のコピーを渡すため、サブルーチン内の変更が呼出し側の変数に影響しません。"],
  ["カークパトリックモデルのレベル2（Learning）に対応する活動はどれか。", ["受講者アンケートで教育プログラムを改善する。", "行動計画を作成させ新システムの活用状況を確認する。", "行動による組織業績の変化を分析しROIを算出する。", "理解度確認テストを実施し、結果をフィードバックする。"], "エ", "レベル2は学習（知識・技能の習得）を測定します。アンケートはレベル1、行動はレベル3、成果やROIはレベル4です。"],
  ["ユースケース駆動開発の利点はどれか。", ["反復開発で新しい要求や目標の変化に対応しやすい。", "反復開発で高リスク部分に初期段階で対処しやすい。", "初期にアーキテクチャを決定するので再利用しやすい。", "要件単位で設計からテストまで行い進捗を把握できる。"], "エ", "ユースケースをひとまとまりの要件として分析・設計・実装・テストするため、要件ごとの進捗を追跡しやすくなります。"],
  ["構造化インタビューの長所と短所はどれか。", ["自由な質問で深い洞察を得るが、準備不足で聞き漏らす。", "回答を深掘りできるが、インタビュアーの技量に左右される。", "臨機応変に変更できるが、複数人で内容がずれる。", "複数回答を比較しやすいが、深い洞察を引き出しにくい。"], "エ", "質問項目と順序をあらかじめ統一するため回答を比較しやすい一方、個別回答の深掘りには不向きです。"],
  ["機能単位と利用者・外部システムとの相互作用、内部と外部の境界を明示する図はどれか。", ["アクティビティ図", "オブジェクト図", "クラス図", "ユースケース図"], "エ", "ユースケース図は、アクターとシステムのユースケースとの関係を表し、システム境界を明示します。"],
  ["ラボ契約の特徴はどれか。", ["依頼元が担当者を指名し直接指揮命令する。", "一定のスキル・人数の要員確保を求め、一定以上の発注を約束する。", "将来利益に応じて報酬を分配し発注額を抑える。", "最低発注工数を下回れば実稼働工数で請求する。"], "イ", "ラボ契約は、発注側が一定期間・一定量の開発リソースを確保する契約で、受託側がチームを編成します。"],
  ["協調フィルタリングを用いたレコメンデーションの例はどれか。", ["類似顧客が購入した商品を顧客に勧める。", "カテゴリ別の売れ筋ランキングを提示する。", "年齢・性別でセグメント化して提示する。", "購入商品の関連商品を提示する。"], "ア", "協調フィルタリングは利用者間の行動の類似性を使います。商品間の関連性を使うのは関連分析です。"],
  ["オープンリゾルバを悪用した攻撃はどれか。", ["偽装ICMPを多数の宛先へ送り大量応答を発生させる。", "hostsファイルを書き換え偽サイトへ誘導する。", "送信元IPを偽装したDNS問合せを多数のDNSサーバへ送り大量応答を発生させる。", "オープンなメールサーバを踏み台に大量送信する。"], "ウ", "オープンリゾルバは誰でも利用できるDNSサーバです。送信元を被害者に偽装したDNS増幅攻撃の踏み台に悪用されます。"],
  ["ある企業でのリスク分析結果は次のとおりであった。情報漏えい対策のうち、事象Cの年間発生確率が最も低くなるものはどれか。\n\nここで、対策前の事象Xの年間発生確率をQXとし、事象Xへの対策によって事象Xの発生を防止できる確率をdXとするとき、事象Xへの対策をしたときの事象Xの年間発生確率（PX）は、QX（1－dX）で計算する。また、事象A又は事象Bが発生することによって事象Cが発生するとき、事象Cが発生する確率（PC）は、1－（1－PA）（1－PB）で計算する。\n\n〔リスク分析結果〕\n\n　・対策前のマルウェア感染（事象A）の年間発生確率（QA）：40％\n　・対策前の外部ネットワークからの侵入（事象B）の年間発生確率（QB）：10％\n　・情報漏えい（事象C）は、マルウェア感染又は外部ネットワークからの侵入の発生によって、発生する。", ["dA＝40％のマルウェア対策ソフトとdB＝60％のIPSを導入する。", "dA＝50％のマルウェア対策ソフトとdB＝50％のIPSを導入する。", "dA＝75％のマルウェア対策ソフトを導入する。", "dB＝75％のIPSを導入する。"], "エ", "マルウェア感染と外部侵入のどちらからも漏えいが起きるため、各経路を抑える効果を確率式で比較します。公式解答はエです。"],
  ["暗号化と利用者認証の機能をもち、遠隔コンピュータへ安全にログインするプロトコルはどれか。", ["L2TP", "LDAP", "RADIUS", "SSH"], "エ", "SSHは通信を暗号化し、公開鍵認証などで安全なリモートログインを提供します。"],
  ["サブミッションポート（587）を導入する目的はどれか。", ["DNSサーバにSPFレコードを問い合わせる。", "DNS登録の公開鍵でデジタル署名を検証する。", "POP before SMTPで送信者を認証する。", "SMTP-AUTHで送信者を認証する。"], "エ", "587番ポートはメール投稿用で、SMTP-AUTHによる認証済みユーザーの送信に使われます。"],
  ["キャッシュメモリのセットアソシアティブ方式の説明はどれか。", ["全てのタグを検索する。", "キャッシュと主記憶の両方へ書き込む。", "主記憶ブロックを単一または複数の配置可能ロケーションに対応付ける。", "仮想アドレスから物理アドレスのメモリをアクセスする。"], "ウ", "セットアソシアティブ方式は、ブロックを配置できる候補を複数に限定します。全てを検索するのはフルアソシアティブ方式です。"],
  ["コンテナ型仮想化におけるオーケストレーションの説明はどれか。", ["アプリと実行環境をまとめて一つのOSで動かす。", "仮想サーバを実行状態のまま別物理サーバへ移動する。", "制御プログラムなしに設定条件で自律動作する。", "制御プログラムのリクエストでサービスを実行し結果を返す。"], "エ", "オーケストレーションは、複数のコンテナやサービスの配置・起動・順序・状態を制御する仕組みです。"],
  ["キャッシュサーバを利用した検索処理の平均応答時間は、キャッシュサーバでヒットした場合には0.2秒、ヒットしない場合には2.2秒である。\n\n現在の平均検索応答時間は1.0秒である。3年後のキャッシュサーバのヒット率は、検索量の増加によって現状の半分になると予測されている。3年後の平均検索応答時間は何秒か。\n\nここで、その他のオーバーヘッドは考慮しない。", ["1.1秒", "1.3秒", "1.6秒", "1.9秒"], "ウ", "現在の平均からヒット率を求め、3年後はその半分として、ヒット時と非ヒット時の時間を加重平均します。"],
  ["コードの値からデータの対象物を連想できるコード体系はどれか。", ["シーケンスコード", "デシマルコード", "ニモニックコード", "ブロックコード"], "ウ", "ニモニックコードは、対象の名称や意味を連想できる文字・記号をコードに用います。"],
  ["トランザクションの隔離性水準を高めたときの変化はどれか。", ["不整合データが増え、処理数も増える。", "不整合データが増え、処理数は減る。", "不整合データが減り、処理数は増える。", "不整合データが減り、処理数も減る。"], "エ", "隔離性を高めるほど同時実行時の不整合は抑えられますが、ロック待ちなどでスループットは低下します。"],
  ["レイヤー2スイッチと同等の機能をもち、同じプロトコル階層で動作する装置はどれか。", ["ゲートウェイ", "ブリッジ", "ルータ", "リピータ"], "イ", "ブリッジはデータリンク層（レイヤー2）でMACアドレスを使ってフレームを中継します。スイッチングハブは多ポートブリッジです。"]
];

const incorrectExplanations = [
  ["関連実体はDFDの要素ではなく、ER図で使われます。", "関連はER図の要素であり、DFDには含まれません。", "DFDの「実体」は標準的な要素名ではなく、外部実体・データストアなどを使います。"],
  ["単一責任原則の説明です。", "インタフェース分離の原則の説明です。", "依存性逆転の原則の説明です。"],
  ["BINDはDNSサーバソフトウェアです。", "正解です。", "Logstashはログ収集・変換ツールです。", "OpenSSLは暗号化通信などの暗号ライブラリです。"],
  ["2相コミットは分散トランザクションのコミット手順です。", "KVSはキーと値を保存するデータモデルです。", "正解です。", "マルチスレッドは処理を並行実行する実装方式で、MapReduceの2段階モデルではありません。"],
  ["正解です。", "Decoratorパターンの説明です。", "Singletonパターンの説明です。", "Iteratorパターンの説明です。"],
  ["正解です。", "実行したテストの網羅率を測るツールです。", "テスト対象を動作させるための環境・器を指します。", "規模や複雑度などの測定値を収集するツールです。"],
  ["特定の手順や観点に限定せず、探索しながら行うテストです。", "入力領域をドメインごとに分析するテストです。", "正解です。", "ユースケースに基づいて利用者の操作を検証するテストです。"],
  ["e－n＋2の計算結果は3ではありません。", "正解です。e＝7、n＝5なので、7－5＋2＝4です。", "e－n＋2の計算結果は5ではありません。", "図のエッジ数とノード数から算出される値ではありません。"],
  ["正解です。", "結果呼出しは、処理結果を呼出し側へ返す方式です。", "参照呼出しでは同じ記憶場所を参照するため、値が変更される可能性があります。", "名前呼出しは実引数を必要時に評価する方式で、変更されない保証を意味しません。"],
  ["教育への反応を測るレベル1です。", "学習後の行動変化を測るレベル3です。", "組織への成果を測るレベル4です。", "正解です。"],
  ["要求変更への柔軟性は反復型開発全般の利点で、ユースケース駆動開発固有の説明ではありません。", "リスクの早期対処はリスク駆動開発の説明です。", "アーキテクチャ中心開発の説明です。", "正解です。"],
  ["これは非構造化インタビューの特徴です。", "これは半構造化インタビューの特徴です。", "これは半構造化インタビューの特徴です。", "正解です。"],
  ["アクティビティ図は処理の流れや業務フローを表します。", "オブジェクト図は特定時点のオブジェクトと関係を表します。", "クラス図はクラスの構造と静的な関係を表します。", "正解です。"],
  ["これは準委任契約における指揮命令の説明で、ラボ契約の特徴ではありません。", "正解です。", "成果報酬型契約の説明です。", "実績精算型の説明で、ラボ契約の一定量確保とは異なります。"],
  ["正解です。", "売れ筋ランキングは人気度による推薦です。", "人口統計情報によるルールベースのセグメント推薦です。", "商品間の関連性を使うアイテムベースの推薦です。"],
  ["これはICMPを使う反射型攻撃です。", "hostsファイル改ざんによる誘導攻撃です。", "正解です。", "オープンなメールサーバを悪用するスパム中継です。"],
  ["公式解答では、組合せ全体で算出した確率が最小になりません。", "公式解答では、組合せ全体で算出した確率が最小になりません。", "マルウェア感染だけを抑え、外部侵入の経路が残ります。", "正解です。IPSで外部侵入を抑える組合せが最小になります。"],
  ["L2TPはVPN接続用のトンネリングプロトコルです。", "LDAPはディレクトリサービスへのアクセスプロトコルです。", "RADIUSは認証・認可・アカウンティングのプロトコルです。", "正解です。"],
  ["SPFは送信元ドメインの認証情報であり、587番ポートの目的ではありません。", "DNSSECの公開鍵検証に関する説明です。", "POP before SMTPは旧来の認証方式です。", "正解です。"],
  ["全タグを検索するのはフルアソシアティブ方式です。", "キャッシュと主記憶の両方へ書くのはライトスルー方式です。", "正解です。", "仮想アドレスと物理アドレスの変換に関する説明です。"],
  ["これはコンテナ型仮想化そのものの説明です。", "これは仮想マシンのライブマイグレーションです。", "これは自律型の処理の説明で、オーケストレーションではありません。", "正解です。"],
  ["非ヒット時の時間だけでは平均値を求められません。", "ヒット率を加味した計算結果ではありません。", "正解です。", "公式条件を加重平均すると5.2秒ではありません。"],
  ["シーケンスコードは発生順に連番を付けるだけで、対象を連想できません。", "デシマルコードは10進数で分類するコードです。", "正解です。", "ブロックコードは分類単位に範囲を割り当てるコードです。"],
  ["隔離性を高めると不整合データは増えません。", "不整合が増えるという前半が誤りです。", "処理性能は通常低下するため、増えるという後半が誤りです。", "正解です。"],
  ["ゲートウェイは異なるプロトコル間を接続する装置です。", "正解です。", "ルータはネットワーク層（レイヤー3）でパケットを中継します。", "リピータは信号を増幅・再生する物理層の装置です。"]
];

const keyToIndex = { "ア": 0, "イ": 1, "ウ": 2, "エ": 3 };
const examSets = [
  ["2025r07h", "令和7年度（2025年度）春期", "exam-pdfs/2025r07h_sa_am2_qs.pdf", true],
  ["2024r06h", "令和6年度（2024年度）春期", "exam-pdfs/2024r06h_sa_am2_qs.pdf", false],
  ["2023r05h", "令和5年度（2023年度）春期", "exam-pdfs/2023r05h_sa_am2_qs.pdf", false],
  ["2022r04h", "令和4年度（2022年度）春期", "exam-pdfs/2022r04h_sa_am2_qs.pdf", false],
  ["2021r03h", "令和3年度（2021年度）春期", "exam-pdfs/2021r03h_sa_am2_qs.pdf", false],
  ["2020r02", "令和2年度（2020年度）", null, false],
  ["2019h31a", "平成31年度（2019年度）春期", "exam-pdfs/2019r01a_sa_am2_qs.pdf", false],
  ["2018h30a", "平成30年度（2018年度）秋期", "exam-pdfs/2018h30a_sa_am2_qs.pdf", false],
  ["2017h29a", "平成29年度（2017年度）秋期", "exam-pdfs/2017h29a_sa_am2_qs.pdf", false],
  ["2016h28a", "平成28年度（2016年度）秋期", "exam-pdfs/2016h28a_sa_am2_qs.pdf", false],
  ["2015h27a", "平成27年度（2015年度）秋期", "exam-pdfs/2015h27a_sa_am2_qs.pdf", false],
  ["2014h26a", "平成26年度（2014年度）秋期", "exam-pdfs/2014h26a_sa_am2_qs.pdf", false],
  ["2013h25a", "平成25年度（2013年度）秋期", "exam-pdfs/2013h25a_sa_am2_qs.pdf", false],
  ["2012h24a", "平成24年度（2012年度）秋期", "exam-pdfs/2012h24a_sa_am2_qs.pdf", false],
  ["2011h23a", "平成23年度（2011年度）秋期", "exam-pdfs/2011h23a_sa_am2_qs.pdf", false],
  ["2010h22a", "平成22年度（2010年度）秋期", "exam-pdfs/2010h22a_sa_am2_qs.pdf", false],
  ["2009h21a", "平成21年度（2009年度）秋期", "exam-pdfs/2009h21a_sa_am2_qs.pdf", false]
];
let current = 0;
let selectedExam = examSets[0];
const answers = Array(questions.length).fill(null);

const card = document.querySelector("#questionCard");
const score = document.querySelector("#score");
const progressText = document.querySelector("#progressText");
const statusText = document.querySelector("#statusText");
const progressBar = document.querySelector("#progressBar");
const dots = document.querySelector("#dots");
const yearSelect = document.querySelector("#yearSelect");
const examLabel = document.querySelector("#examLabel");
const sourcePdf = document.querySelector("#sourcePdf");
const sourceLink = document.querySelector("#sourceLink");
const sourceFallback = document.querySelector("#sourceFallback");

yearSelect.innerHTML = examSets.map(([id, label, pdf, ready]) =>
  `<option value="${id}" ${ready ? "" : "data-pending"}>${label}${ready ? "" : "（問題ページ準備中）"}</option>`
).join("");

function updateSource() {
  const [, label, pdf, ready] = selectedExam;
  examLabel.textContent = label;
  if (pdf) {
    sourcePdf.data = pdf;
    sourceLink.href = pdf;
    sourceFallback.href = pdf;
    sourceLink.hidden = false;
  } else {
    sourcePdf.removeAttribute("data");
    sourceLink.hidden = true;
    sourceFallback.removeAttribute("href");
  }
  document.title = `システムアーキテクト試験 ${label} | 一問一答`;
  return ready;
}

function render() {
  if (!selectedExam[3]) {
    updateSource();
    progressText.textContent = "準備中";
    statusText.textContent = "PDF参照のみ";
    progressBar.style.width = "0%";
    card.innerHTML = `<div class="question-number">${selectedExam[1]}</div><div class="pending-message"><h2>この年度の一問一答は準備中です</h2><p>右側の問題冊子PDFで問題を確認できます。問題文・解答・解説の整備が完了すると、1問ずつ解答できるようになります。</p></div>`;
    document.querySelector("#prevButton").disabled = true;
    document.querySelector("#nextButton").disabled = true;
    dots.innerHTML = "";
    score.textContent = "0";
    return;
  }
  updateSource();
  const [text, choices, correct, explanation] = questions[current];
  const choiceExplanations = incorrectExplanations[current];
  const submitted = answers[current] !== null;
  const selected = submitted ? answers[current].selected : null;
  const isCorrect = submitted && selected === keyToIndex[correct];
  progressText.textContent = `問${current + 1} / ${questions.length}`;
  statusText.textContent = submitted ? (isCorrect ? "正解" : "不正解") : "未回答";
  progressBar.style.width = `${((current + 1) / questions.length) * 100}%`;
  card.innerHTML = `
    <div class="question-number">QUESTION ${String(current + 1).padStart(2, "0")}</div>
    <div class="text-question">
      <div class="original-label">問${current + 1}</div>
      <div class="question-text">${text}</div>
      ${current === 7 ? '<img class="diagram" src="exam-pages/diagram-q08.jpg" alt="問8の制御フローグラフ">' : ""}
    </div>
    <p class="answer-instruction">上の原本にある選択肢から、答えを一つ選んでください。</p>
    <div class="choices">${choices.map((choice, i) => `
      <label class="choice ${submitted ? "disabled" : ""} ${submitted && i === keyToIndex[correct] ? "correct" : ""} ${submitted && i === selected && i !== keyToIndex[correct] ? "incorrect" : ""}">
        <input type="radio" name="answer" value="${i}" ${selected === i ? "checked" : ""} ${submitted ? "disabled" : ""}>
        <span class="letter">${["ア", "イ", "ウ", "エ"][i]}</span><span>${choice}</span>
      </label>`).join("")}</div>
    <div class="submit-row"><button class="primary" id="submitButton" ${submitted ? "disabled" : ""}>この問題を提出</button>${submitted ? `<span>${isCorrect ? "正解です。" : `不正解。正解は「${correct}」です。`}</span>` : ""}</div>
    ${submitted ? `<div class="feedback ${isCorrect ? "correct" : "incorrect"}"><strong>${isCorrect ? "正解" : "解説"}</strong><div class="explanation">${explanation}</div><div class="choice-explanations"><strong>選択肢ごとの判定</strong>${choices.map((choice, i) => `<div class="choice-explanation ${i === keyToIndex[correct] ? "right" : ""}"><b>${["ア", "イ", "ウ", "エ"][i]}：${i === keyToIndex[correct] ? "正解" : "不正解"}</b> ${choiceExplanations[i]}</div>`).join("")}</div></div>` : ""}
  `;
  if (!submitted) document.querySelector("#submitButton").addEventListener("click", submit);
  renderDots();
  document.querySelector("#prevButton").disabled = current === 0;
  document.querySelector("#nextButton").disabled = current === questions.length - 1;
}

function submit() {
  const picked = document.querySelector("input[name=answer]:checked");
  if (!picked) {
    document.querySelector(".submit-row").insertAdjacentHTML("beforeend", '<span class="error">選択肢を選んでください。</span>');
    return;
  }
  answers[current] = { selected: Number(picked.value) };
  render();
}

function renderDots() {
  dots.innerHTML = questions.map((_, i) => `<button class="dot ${i === current ? "active" : ""} ${answers[i] ? "done" : ""}" aria-label="問${i + 1}" data-index="${i}">${i + 1}</button>`).join("");
  dots.querySelectorAll(".dot").forEach(button => button.addEventListener("click", () => { current = Number(button.dataset.index); render(); }));
  score.textContent = answers.filter((answer, i) => answer && answer.selected === keyToIndex[questions[i][2]]).length;
}

document.querySelector("#prevButton").addEventListener("click", () => { if (current > 0) { current--; render(); } });
document.querySelector("#nextButton").addEventListener("click", () => { if (current < questions.length - 1) { current++; render(); } });
yearSelect.addEventListener("change", () => {
  selectedExam = examSets.find(([id]) => id === yearSelect.value) || examSets[0];
  current = 0;
  answers.fill(null);
  render();
});
render();
