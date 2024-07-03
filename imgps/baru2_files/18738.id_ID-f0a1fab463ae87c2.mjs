"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[18738],{718738:(e,a,o)=>{o.d(a,{C0:()=>i,LAW_CONFIGURATION:()=>_,ZP:()=>c,ZU:()=>n});var l=o(883119),t=o(140017),s=o(996523),r=o(785893);let i=["DMCA","Trademark","GDPR"],n=new Date(2024,0,1),_={test:{LAW:"test",DECIDER_KEY:"legal_webapp_takedown_form_test",COUNTRY_CODES:["US"],API:"/v3/legal/takedowns/test/",COMPLAINTS_OFFICE:!0,TRUSTED_FLAGGER:!1,RESTRICT_MULTIPLE_LAWS:!1,ALLOW_ANON_SUBMISSION:!1},netzdg:{LAW:"netzdg",DECIDER_KEY:"legal_webapp_takedown_form_netzdg",COUNTRY_CODES:["DE"],API:"/v3/legal/takedowns/netzdg/",COMPLAINTS_OFFICE:!0,RESTRICT_MULTIPLE_LAWS:!1,ALLOW_ANON_SUBMISSION:!1,TRUSTED_FLAGGER:!1},turkey:{LAW:"turkey",DECIDER_KEY:"legal_webapp_takedown_form_turkey",COUNTRY_CODES:["TR"],API:"/v3/legal/takedowns/turkey/",COMPLAINTS_OFFICE:!1,RESTRICT_MULTIPLE_LAWS:!0,ALLOW_ANON_SUBMISSION:!1,TRUSTED_FLAGGER:!1},koplg:{LAW:"koplg",DECIDER_KEY:"legal_webapp_takedown_form_koplg",COUNTRY_CODES:["AT"],API:"/v3/legal/takedowns/koplg/",COMPLAINTS_OFFICE:!0,RESTRICT_MULTIPLE_LAWS:!1,ALLOW_ANON_SUBMISSION:!1,TRUSTED_FLAGGER:!1},loi_fr:{LAW:"loi_fr",DECIDER_KEY:"legal_webapp_takedown_form_fr",COUNTRY_CODES:["FR"],API:"/v3/legal/takedowns/fr_dsa/",COMPLAINTS_OFFICE:!1,RESTRICT_MULTIPLE_LAWS:!0,ALLOW_ANON_SUBMISSION:!1,TRUSTED_FLAGGER:!1},dsa:{LAW:"dsa",DECIDER_KEY:"legal_webapp_takedown_form_dsa",EXPERIMENT_KEY:"legal_web_dsa_form",COUNTRY_CODES:["AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","EU"],API:"/v3/legal/takedowns/dsa/",COMPLAINTS_OFFICE:!1,RESTRICT_MULTIPLE_LAWS:!0,ALLOW_ANON_SUBMISSION:!0,TRUSTED_FLAGGER:!0},india:{LAW:"india",DECIDER_KEY:"legal_webapp_takedown_form_india",COUNTRY_CODES:["IN"],API:"/v3/legal/takedowns/india/",COMPLAINTS_OFFICE:!1,RESTRICT_MULTIPLE_LAWS:!0,ALLOW_ANON_SUBMISSION:!0,TRUSTED_FLAGGER:!1}};function c(e,a){let o=(0,t.ZP)(),i={test:{header:"Test Header",subHeader:"Test SubHeader",laws:[{name:"Test Law A",label:"Test Law A"},{name:"Test Law B",label:"Test Law B"}]},netzdg:{header:o.bt("Formulir Keluhan NetzDG", "NetzDG Complaint Form", "Takedown.NetzDG.FormTitle", undefined, true),subHeader:o.bt("Gunakan formulir ini untuk mengidentifikasi konten yang melanggar undang-undang Jerman yang tunduk pada Netzwerkdurchsetzungsgesetz (NetzDG). Isi informasi di bawah ini dengan sedetail mungkin agar kami dapat mengevaluasi keluhan Anda.", "Use this form to identify content that violates German laws that are subject to the Netzwerkdurchsetzungsgesetz (NetzDG). Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.", "Takedown.NetzDG.FormDescription", undefined, true),laws:[{name:"Dissemination of propaganda material of unconstitutional organizations (Section 86 StGB)",label:o.bt("Penyebarluasan materi propaganda organisasi inkonstitusional (Pasal 86 StGB)", "Dissemination of propaganda material of unconstitutional organizations (Section 86 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Using symbols of unconstitutional organizations (Section 86a StGB)",label:o.bt("Menggunakan simbol organisasi inkonstitusional (Pasal 86a StGB)", "Using symbols of unconstitutional organizations (Section 86a StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Preparation of a serious violent offense endangering the state (Section 89a StGB)",label:o.bt("Persiapan pelanggaran berat dengan kekerasan yang membahayakan negara (Pasal 89a StGB)", "Preparation of a serious violent offense endangering the state (Section 89a StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Encouraging the commission of a serious violent offense endangering the state (Section 91 StGB)",label:o.bt("Mendorong dilakukannya pelanggaran berat dengan kekerasan yang membahayakan negara (Pasal 91 StGB)", "Encouraging the commission of a serious violent offense endangering the state (Section 91 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Treasonous forgery (Section 100a StGB)",label:o.bt("Pemalsuan pengkhianatan (Pasal 100a StGB)", "Treasonous forgery (Section 100a StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Public incitement to crime (Section 111 StGB)",label:o.bt("Hasutan publik untuk melakukan kejahatan (Pasal 111 StGB)", "Public incitement to crime (Section 111 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Breach of the public peace by threatening to commit offenses (Section 126 StGB)",label:o.bt("Pelanggaran terhadap ketenteraman masyarakat dengan mengancam akan melakukan pelanggaran (Pasal 126 StGB)", "Breach of the public peace by threatening to commit offenses (Section 126 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Forming criminal organizations (Section 129 StGB)",label:o.bt("Membentuk organisasi kriminal (Pasal 129 StGB)", "Forming criminal organizations (Section 129 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Forming terrorist organizations (Section 129a StGB)",label:o.bt("Membentuk organisasi teroris (Pasal 129a StGB)", "Forming terrorist organizations (Section 129a StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Criminal and terrorist organizations abroad; extended confiscation and deprivation (Section 129b StGB)",label:o.bt("Organisasi kriminal dan teroris di luar negeri; penyitaan dan perampasan yang diperpanjang (Pasal 129b StGB)", "Criminal and terrorist organizations abroad; extended confiscation and deprivation (Section 129b StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Incitement to hatred (Section 130 StGB)",label:o.bt("Hasutan kebencian (Pasal 130 StGB)", "Incitement to hatred (Section 130 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Dissemination of depictions of violence (Section 131 StGB)",label:o.bt("Penyebarluasan penggambaran kekerasan (Pasal 131 StGB)", "Dissemination of depictions of violence (Section 131 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Rewarding and approving of criminal offenses (Section 140 StGB)",label:o.bt("Menghargai dan menyetujui tindak pidana (Pasal 140 StGB)", "Rewarding and approving of criminal offenses (Section 140 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Insulting denominations, religious communities and ideological associations (Paragraph 166 StGB)",label:o.bt("Denominasi yang menghina, komunitas agama, dan asosiasi ideologi (Paragraf 166 StGB)", "Insulting denominations, religious communities and ideological associations (Paragraph 166 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Making available child pornography by broadcasting, media services, or telecommunication services (Section 184b/184d StGB)",label:o.bt("Menyediakan pornografi anak melalui penyiaran, layanan media, atau layanan telekomunikasi (Pasal 184b/184d StGB)", "Making available child pornography by broadcasting, media services, or telecommunication services (Section 184b/184d StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Insult (Section 185 StGB)",label:o.bt("Penghinaan (Pasal 185 StGB)", "Insult (Section 185 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Defamation (Section 186 StGB)",label:o.bt("Pencemaran nama baik (Pasal 186 StGB)", "Defamation (Section 186 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Intentional Defamation (Section 187 StGB)",label:o.bt("Pencemaran Nama Baik yang Disengaja (Pasal 187 StGB)", "Intentional Defamation (Section 187 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Denigration of the memory of the deceased (Paragraph 189 StGB)",label:o.bt("Denigrasi memori orang yang meninggal (Paragraf 189 StGB)", "Denigration of the memory of the deceased (Paragraph 189 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Violation of intimate privacy by taking photographs (Section 201a StGB)",label:o.bt("Pelanggaran privasi pribadi dengan mengambil foto (Pasal 201a StGB)", "Violation of intimate privacy by taking photographs (Section 201a StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Threatening the commission of a felony (Section 241 StGB)",label:o.bt("Mengancam akan melakukan kejahatan (Pasal 241 StGB)", "Threatening the commission of a felony (Section 241 StGB)", "Takedown.NetzDG.Law", undefined, true)},{name:"Forgery of data intended to provide proof (Section 269 StGB)",label:o.bt("Pemalsuan data yang dimaksudkan untuk memberikan bukti (Pasal 269 StGB)", "Forgery of data intended to provide proof (Section 269 StGB)", "Takedown.NetzDG.Law", undefined, true)}]},turkey:{header:(0,r.jsx)(l.xu,{"data-test-id":"turkish-law-complaint-header",children:o.bt("Formulir Keluhan Hukum Internet Turki", "Turkish Internet Law Complaint Form", "Takedown.Turkey.FormSubHeader", undefined, true)}),subHeader:o.bt("Gunakan formulir ini untuk mengidentifikasi konten yang melanggar undang-undang Turki yang tunduk pada Hukum Internet Turki. Harap isi informasi di bawah ini dengan sedetail mungkin agar kami dapat mengevaluasi keluhan Anda.", "Use this form to identify content that violates Turkish laws that are subject to the Turkish Internet Law. Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.", "Takedown.Turkey.FormSubheader", undefined, true),laws:[{label:o.bt("Pelanggaran hak pribadi", "Personal rights violation", "Takedown.Turkey.Law.Personal", undefined, true),name:"Personal rights violation"},{label:o.bt("Pelanggaran hak privasi", "Privacy rights violation", "Takedown.Turkey.Law.Privacy", undefined, true),name:"Privacy rights violation"}]},koplg:{header:(0,r.jsx)(l.xu,{"data-test-id":"koplg-header",children:o.bt("Formulir KoPl-G Austria", "Austria KoPl-G Form", "AustriaKoPl-G.FormTitle", undefined, true)}),subHeader:o.bt("Gunakan formulir ini untuk mengidentifikasi konten yang melanggar undang-undang Austria yang tunduk pada Kommunikationsplattformen-Gesetz (KoPl-G). Isi informasi di bawah ini dengan sedetail mungkin agar kami dapat mengevaluasi keluhan Anda.", "Use this form to identify content that violates Austrian laws that are subject to the Kommunikationsplattformen-Gesetz (KoPl-G). Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.", "AustriaKoPl-G.FormDescription", undefined, true),laws:[{label:"N\xf6tigung",name:"N\xf6tigung"},{label:"Gef\xe4hrliche Drohung",name:"Gef\xe4hrliche Drohung"},{label:"Beharrliche Verfolgung",name:"Beharrliche Verfolgung"},{label:"Fortdauernde Bel\xe4stigung im Wege einer Telekommunikation",name:"Fortdauernde Bel\xe4stigung im Wege einer Telekommunikation"},{label:"Vorwurf einer schon abgetanen gerichtlich strafbaren Handlung",name:"Vorwurf einer schon abgetanen gerichtlich strafbaren Handlung"},{label:"Beleidigung",name:"Beleidigung"},{label:"Unbefugte Bildaufnahmen",name:"Unbefugte Bildaufnahmen"},{label:"Erpressung",name:"Erpressung"},{label:"Herabw\xfcrdigung religi\xf6ser Lehren",name:"Herabw\xfcrdigung religi\xf6ser Lehren"},{label:"Pornographische Darstellungen Minderj\xe4hriger",name:"Pornographische Darstellungen Minderj\xe4hriger"},{label:"Anbahnung von Sexualkontakten zu Unm\xfcndigen",name:"Anbahnung von Sexualkontakten zu Unm\xfcndigen"},{label:"Terroristische Vereinigung",name:"Terroristische Vereinigung"},{label:"Anleitung zur Begehung einer terroristischen Straftat",name:"Anleitung zur Begehung einer terroristischen Straftat"},{label:"Anleitung zu terroristischen Straftaten und Guthei\xdfung terroristischer Straftaten",name:"Anleitung zu terroristischen Straftaten und Guthei\xdfung terroristischer Straftaten"},{label:"Verhetzung",name:"Verhetzung"},{label:"Nazionalsozialistische Propaganga",name:"Nazionalsozialistische Propaganga"}]},loi_fr:{header:o.bt("Rancangan undang-undang yang mengonfirmasi penghormatan terhadap prinsip-prinsip Formulir Republik", "Bill confirming respect for the principles of the Republic Form", "French_DSA.FormTitle", undefined, true),subHeader:o.bt("Gunakan formulir ini untuk mengidentifikasi konten yang melanggar undang-undang Prancis yang tunduk pada rancangan undang-undang yang menegaskan penghormatan terhadap prinsip-prinsip Republik. Harap isi informasi di bawah ini dengan sedetail mungkin agar kami dapat mengevaluasi keluhan Anda.", "Use this form to identify content that violates French laws that are subject to the bill confirming respect for the principles of the Republic. Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.", "French_DSA.FormDescription", undefined, true),laws:[{name:"Apology of/sympathy to crimes",label:o.bt("Permintaan maaf/simpati atas kejahatan", "Apology of/sympathy to crimes", "French_DSA.Law", undefined, true)},{name:"Provocation to discrimination, hatred or violence on the ground of origin, ethnic group, nation, race or religion, or sex, sexual orientation or gender identity or their disability",label:o.bt("Provokasi terhadap diskriminasi, kebencian, atau kekerasan atas dasar negara asal, kelompok etnis, bangsa, ras atau agama, atau jenis kelamin, orientasi seksual, atau identitas jenis kelamin, atau disabilitas", "Provocation to discrimination, hatred or violence on the ground of origin, ethnic group, nation, race or religion, or sex, sexual orientation or gender identity or their disability", "French_DSA.Law", undefined, true)},{name:"Challenging the existence of crimes against humanity, denial, minimization or trivialization of crimes of genocide, crimes of enslavement or war crimes",label:o.bt("Menentang adanya kejahatan terhadap kemanusiaan, penyangkalan, meremehkan atau menyepelekan kejahatan genosida, kejahatan perbudakan, atau kejahatan perang", "Challenging the existence of crimes against humanity, denial, minimization or trivialization of crimes of genocide, crimes of enslavement or war crimes", "French_DSA.Law", undefined, true)},{name:"Sexual harassment",label:o.bt("Pelecehan seksual", "Sexual harassment", "French_DSA.Law", undefined, true)},{name:"Child pornography",label:o.bt("Pornografi anak", "Child pornography", "French_DSA.Law", undefined, true)},{name:"Human trafficking",label:o.bt("Perdagangan manusia", "Human trafficking", "French_DSA.Law", undefined, true)},{name:"Procuring/pimping",label:o.bt("Pengadaan prostitusi/muncikari", "Procuring/pimping", "French_DSA.Law", undefined, true)},{name:"Direct provocation or public apology for acts of terrorism",label:o.bt("Provokasi langsung atau permintaan maaf publik atas tindakan terorisme", "Direct provocation or public apology for acts of terrorism", "French_DSA.Law", undefined, true)},{name:"Insult based on origin, ethnic group, nation, race or religion",label:o.bt("Penghinaan berdasarkan asal, suku, bangsa, ras, atau agama", "Insult based on origin, ethnic group, nation, race or religion", "French_DSA.Law", undefined, true)},{name:"Insult based on gender, sexual orientation, gender identify or disability",label:o.bt("Penghinaan berdasarkan jenis kelamin, orientasi seksual, identifikasi jenis kelamin, atau disabilitas", "Insult based on gender, sexual orientation, gender identify or disability", "French_DSA.Law", undefined, true)}]},dsa:{header:o.bt("Formulir Pelaporan Konten Ilegal Uni Eropa", "European Union Illegal Content Reporting Form", "DSA.FormTitle", undefined, true),subHeader:o.bt("Gunakan formulir ini untuk melaporkan konten yang Anda yakini ilegal di Uni Eropa. Isi formulir sedetail mungkin agar kami dapat mengevaluasi laporan Anda dengan efisien.", "Use this form to report content you believe to be illegal in the European Union. Please fill out the form with as much detail as possible to allow us to efficiently evaluate your report.", "DSA.FormDescription", undefined, true),laws:[{name:"Promoting or condoning terrorist acts",label:o.bt("Mempromosikan atau mendukung tindakan teroris", "Promoting or condoning terrorist acts", "DSA.Law", undefined, true),subtext:o.bt("Mis., Hasutan atau permintaan maaf atas tindakan teroris", "E.g., Incitement to or apology of terrorist acts", "DSA.Law", undefined, true)},{name:"Threatening commission of or condoning serious criminal offense",label:o.bt("Mengancam komisi atau melakukan tindak pidana serius", "Threatening commission of or condoning serious criminal offense", "DSA.Law", undefined, true),subtext:o.bt("Mis., Ancaman untuk melakukan tindak pidana serius terhadap individu atau mengecam individu", "E.g., Threats to commit serious criminal offense against individuals or their condemnation", "DSA.Law", undefined, true)},{name:"Child sexual abuse material (CSAM)",label:o.bt("Materi pelecehan seksual anak (CSAM)", "Child sexual abuse material (CSAM)", "DSA.Law", undefined, true),subtext:o.bt("Mis., Penyebarluasan atau pengadaan konten pornografi anak", "E.g., Dissemination or procurement of child pornographic content", "DSA.Law", undefined, true)},{name:"Hate speech, hateful acts and discrimination",label:o.bt("Ujaran kebencian, tindakan kebencian, dan diskriminasi", "Hate speech, hateful acts and discrimination", "DSA.Law", undefined, true),subtext:o.bt("Mis., Hasutan untuk melakukan aksi kebencian, kekerasan, atau diskriminasi terhadap kelompok yang dilindungi dan rentan", "E.g., Incitement to hatred, violence or discrimination against protected and vulnerable groups", "DSA.Law", undefined, true)},{name:"Graphic Violence",label:o.bt("Kekerasan Eksplisit", "Graphic Violence", "DSA.Law", undefined, true),subtext:o.bt("Mis., Luka yang berdarah-darah/eksplisit dan mutilasi, pemukulan, darah berlebihan, mayat", "E.g., Gore/graphic wounds and mutilation, beatings, excessive blood, corpses", "DSA.Law", undefined, true)},{name:"Denying or condoning crimes against humanity",label:o.bt("Menyangkal atau menentang kejahatan terhadap kemanusiaan", "Denying or condoning crimes against humanity", "DSA.Law", undefined, true),subtext:o.bt("Mis., Penyangkalan genosida, kejahatan perang, dan kejahatan lainnya terhadap kemanusiaan", "E.g., Denial of genocides, war crimes and other crimes against humanity", "DSA.Law", undefined, true)},{name:"Illegal goods and services",label:o.bt("Produk dan layanan ilegal", "Illegal goods and services", "DSA.Law", undefined, true),subtext:o.bt("Mis., Penjualan obat-obatan terlarang, hewan hidup, atau penawaran layanan ilegal", "E.g., Illegal sale of drugs, live animals or the illegal offer of services", "DSA.Law", undefined, true)},{name:"Harassment",label:o.bt("Perundungan", "Harassment", "DSA.Law", undefined, true),subtext:o.bt("Mis., Penguntit online atau pelecehan seksual", "E.g., Online stalking or sexual harassment", "DSA.Law", undefined, true)},{name:"Harmful to minors",label:o.bt("Berbahaya bagi anak di bawah umur", "Harmful to minors", "DSA.Law", undefined, true),subtext:o.bt("Mis., Hasutan kepada anak di bawah umur untuk terlibat dalam tindakan yang membahayakan fisik atau dengan sengaja membahayakan diri mereka sendiri", "E.g., Incitement of minors to engage in actions which put them in physical danger or to intentionally harm themselves", "DSA.Law", undefined, true)},{name:"Nudity or pornography",label:o.bt("Ketelanjangan atau pornografi", "Nudity or pornography", "DSA.Law", undefined, true),subtext:o.bt("Mis., Penyebarluasan konten pornografi", "E.g., Dissemination of pornographic content", "DSA.Law", undefined, true)},{name:"Disinformation",label:o.bt("Informasi yang Keliru", "Disinformation", "DSA.Law", undefined, true),subtext:o.bt("Mis., Disinformasi yang dilakukan oleh individu atau kelompok orang secara sengaja", "E.g., Deliberate disinformation of individuals or groups of people", "DSA.Law", undefined, true)},{name:"Affront to personal honor",label:o.bt("Penghormatan pribadi", "Affront to personal honor", "DSA.Law", undefined, true),subtext:o.bt("Mis., Penghinaan atau pencemaran nama baik", "E.g., Insults or defamation", "DSA.Law", undefined, true)},{name:"Violation of privacy",label:o.bt("Pelanggaran privasi", "Violation of privacy", "DSA.Law", undefined, true),subtext:o.bt("Mis., Berbagi gambar pribadi yang bersifat non-konsensual", "E.g., Non-consensual sharing of private images", "DSA.Law", undefined, true)},{name:"DMCA",label:o.bt("Pelanggaran hak cipta", "Copyright infringement", "DSA.Law", undefined, true),subtext:(0,r.jsxs)(l.xv,{color:"warning",inline:!0,size:"100",children:[" ",o.bt("Isi ", "Fill out the ", "Dsa.Law.DMCA", undefined, true),(0,r.jsxs)(l.rU,{display:"inline",href:"https://www.pinterest.com/about/copyright/dmca-pin/",underline:"always",children:[" ",o.bt("Copyright Complaint form here", "Copyright Complaint form here", "DSA.Law", undefined, false)]})]})},{name:"Trademark",label:o.bt("Pelanggaran merek dagang", "Trademark infringement", "DSA.Law", undefined, true),subtext:(0,r.jsxs)(l.xv,{color:"warning",inline:!0,size:"100",children:[" ",o.bt("Isi ", "Fill out the ", "Dsa.Law.Trademark", undefined, true),(0,r.jsxs)(l.rU,{display:"inline",href:"https://www.pinterest.com/about/trademark/",underline:"always",children:[" ",o.bt("formulir Keluhan Merek Dagang di sini", "Trademark Complaint form here", "DSA.Law", undefined, true)]})]})},{name:"GDPR",label:o.bt("Berisi data pribadi saya", "Contains my personal data", "DSA.Law", undefined, true),subtext:(0,r.jsxs)(l.xv,{color:"warning",inline:!0,size:"100",children:[" ",o.bt("Anda dapat menghapus data dengan membuka pengaturan atau menghubungi ", "You can delete your data by going to your settings or by contacting ", "Dsa.Law.GDPR", undefined, true),(0,r.jsxs)(l.rU,{display:"inline",href:"mailto:privacy-support@pinterest.com",underline:"always",children:[" ",o.bt("privacy-support@pinterest.com", "privacy-support@pinterest.com", "DSA.Law", undefined, true)]})]})},{name:"Other illegal behavior",label:o.bt("Perilaku ilegal lainnya", "Other illegal behavior", "DSA.Law", undefined, true),subtext:o.bt("Laporkan perilaku yang tidak cocok dengan kategori di atas di sini", "Report behavior that does not match the above categories here", "DSA.Law", undefined, true)}]},india:{header:o.bt("Formulir Keluhan India", "India Grievance Form", "India.FormTitle", undefined, true),subHeader:o.bt("Gunakan formulir ini untuk mengirimkan keluhan atau komplain terkait konten di layanan Pinterest atau kepatuhan terhadap Aturan TI India 2021.", "Use this form to submit grievances or complaints regarding content on Pinterest’s services or compliance with the India IT Rules, 2021.", "India.FormDescription", undefined, true),laws:[{name:"Adult Content",label:o.bt("Konten Dewasa", "Adult Content", "India.Law", undefined, true),subtext:o.bt("mis. ketelanjangan, tindakan atau perilaku seksual, dll.", "e.g. nudity, sexual acts or conduct, etc.", "India.Law", undefined, true)},{name:"Impersonation",label:o.bt("Penyamaran", "Impersonation", "India.Law", undefined, true)},{name:"DMCA",label:o.bt("Pelanggaran Hak Cipta", "Copyright Infringement", "India.Law", undefined, true),subtext:(0,r.jsxs)(l.xv,{color:"warning",inline:!0,size:"100",children:[" ",o.bt("Isi ", "Fill out the ", "Dsa.Law.DMCA", undefined, true),(0,r.jsxs)(l.rU,{display:"inline",href:"https://www.pinterest.com/about/copyright/dmca-pin/",underline:"always",children:[" ",o.bt("Copyright Complaint form here", "Copyright Complaint form here", "DSA.Law", undefined, false)]})]})},{name:"Trademark",label:o.bt("Pelanggaran Merek Dagang", "Trademark Infringement", "India.Law", undefined, true),subtext:(0,r.jsxs)(l.xv,{color:"warning",inline:!0,size:"100",children:[" ",o.bt("Isi ", "Fill out the ", "Dsa.Law.Trademark", undefined, true),(0,r.jsxs)(l.rU,{display:"inline",href:"https://www.pinterest.com/about/trademark/",underline:"always",children:[" ",o.bt("formulir Keluhan Merek Dagang di sini", "Trademark Complaint form here", "DSA.Law", undefined, true)]})]})},{name:"Other illegal behavior",label:o.bt("Lainnya", "Other", "India.Law", undefined, true),subtext:o.bt("mis. melanggar Hukum India, dll", "e.g. violates Indian Law, etc", "India.Law", undefined, true)}]}},n={header:o.bt("Informasi Pengaduan", "Complaint Information", "AustriaKoPl-G.ComplaintInformation.Header", undefined, true),reportedUrl:o.bt("Identifikasi URL konten", "Identify the URL of the content", "AustriaKoPl-G.ContentUrlField", undefined, true),dsaReportedUrl:o.bt("Apa URL konten yang ingin Anda laporkan?", "What is the URL of the content you want to report?", "Dsa.ContentUrlField", undefined, true),reportedUrlHelperText:o.bt("Berikan URL lengkap dari konten yang Anda keluhkan. Satu URL per formulir.", "Please provide the full URL of the content you are complaining about. 1 URL per form.", "AustriaKoPl-G.ComplaintInformation.ContentUrl.HelperText", undefined, true),contentPortionHeader:o.bt("Bagian mana dari konten yang Anda laporkan?", "What portion(s) of the content are you reporting?", "AustriaKoPl-G.ContentReporting.Header", undefined, true),dsaContentPortionHeader:o.bt("Bagian mana dari konten ini yang Anda laporkan?", "What portion of the content are you reporting?", "DSA.ContentReporting.Header", undefined, true),lawsViolatedLabel:o.bt("Undang-undang mana yang menurut Anda dilanggar oleh konten tersebut?", "Which law(s) do you believe the content violates?", "AustriaKoPl-G.ContentReporting.Header", undefined, true),dsaLawsViolatedLabel:o.bt("Menurut Anda, mengapa konten ini ilegal berdasarkan hukum setempat?", "Why do you think this content is illegal under local law?", "DSA.ContentReporting.Header", undefined, true),dsaLawsViolatedSubtext:o.bt("Harap pertimbangkan dengan cermat opsi yang Anda pilih, sehingga kami dapat menangani laporan Anda seefisien mungkin.", "Please carefully consider the option you select, so we can address your report as efficiently as possible.", "DSA.ContentReporting.Subtext", undefined, true),otherLabel:o.bt("Masukkan bagian lain dari konten", "Enter other portion of content", "AustriaKoPl-G.ContentPortion.OtherValue", undefined, true),dsaOtherLabel:o.bt("Jelaskan bagian lain dari konten yang Anda laporkan", "Please describe what other portion of the content you are reporting", "DSA.ContentPortion.OtherValue", undefined, true),additionalInformationLabel:o.bt("Informasi tambahan tentang ketidaksahan konten (Opsional)", "Additional information on illegality of content (Optional)", "AustriaKoPl-G.ContentReporting.Header", undefined, true),additionalInformationPlaceholder:o.bt("batas 250 karakter...", "250 character limit...", "AustriaKoPl-G.ContentReporting.Header", undefined, true),dsaAdditionalInformationLabel:o.bt("Berikan informasi tambahan tentang mengapa menurut Anda konten tersebut ilegal. Anda dapat mengutip atau menautkan ke undang-undang yang relevan, jika diinginkan. (Opsional)", "Please provide additional information about why you think the content is illegal. You may cite or link to relevant statutes, if you like. (Optional)", "DSA.ContentReporting.Header", undefined, true),dsaAdditionalInformationPlaceholder:o.bt("Berikan detail tambahan di sini", "Provide additional details here", "DSA.ContentReporting.Placeholder", undefined, true),countryHeader:o.bt("Berdasarkan undang-undang negara apa Anda yakin konten ini ilegal?", "Under what country’s laws do you believe this content is illegal?", "DSA.Country.Header", undefined, true),otherViolationLabel:o.bt("Laporkan perilaku yang tidak cocok dengan kategori di atas, di sini", "Report behavior that does not match the above categories here", "DSA.OtherViolation.Field", undefined, true),attachmentLabel:o.bt("Jika Anda memiliki dokumen tambahan yang dapat membantu kami memahami laporan Anda (mis., perintah pengadilan), Anda dapat melampirkannya di sini. Harap unggah PDF saja, dengan ukuran file maksimum 5 MB.", "If you have additional documents that could help us understand your report (e.g., court order), you can attach it here. Please upload PDFs only, with a maximum file size of 5 MB.", "DSA.OtherViolation.Field", undefined, true),moduleCollapseLabel:o.bt("Ciutkan modul", "Collapse the module", "DSA.CollapseModule", undefined, true),moduleExpandLabel:o.bt("Luaskan modul", "Expand the module", "DSA.ExpandModule", undefined, true),noCountryResultText:o.bt("Tidak ada negara yang ditemukan", "No countries found", "DSA.NoCountries", undefined, true),clearButtonLabel:o.bt("Hapus kolom pencarian", "Clear search field", "DSA.ClearInput", undefined, true),invalidUrlText:o.bt("URL tidak valid", "Invalid URL", "DSA.Invalid Url", undefined, true),selectedLawErrorText:o.bt("Harap isi formulir yang sesuai untuk keluhan ini", "Please fill out the appropriate form for this complaint", "DSA.InvalidLaw", undefined, true),multiselectPlaceholder:o.bt("Pilih opsi", "Select an option", "DSA.Multiselect.Placeholder", undefined, true),dateSelectPlaceholder:o.bt("Pilih tanggal", "Select a date", "DSA.DateSelect.Placeholder", undefined, true)},c={contactHeader:o.bt("Informasi Kontak", "Contact Information", "TakedownsContactInformation.OwnerInformationHeading", undefined, true),companyCheckbox:o.bt("Apakah Anda mewakili kantor pengaduan? (Ya)", "Do you represent a complaints office? (Yes)", "TakedownsContactInformation.ComplaintsOfficeValidation", undefined, true),company:o.bt("Kantor pengaduan", "Complaints office", "TakedownsContactInformation.ComplaintsOfficeNameField", undefined, true),trustedFlaggerCheckbox:o.bt("Pemberi tanda tepercaya? (Ya)", "Trusted flagger? (Yes)", "TakedownsContactInformation.TrustedFlagger", undefined, true),trustedFlaggerSubtext:o.bt("Pelapor Tepercaya sebagaimana ditetapkan oleh Koordinator Layanan Digital Negara Anggota tempat pemohon berada, sejalan dengan Pasal 22 Digital Services Act.", "Trusted Flagger as designated by the Digital Services Coordinator of the Member State in which the applicant is established, in line with Article 22 of the Digital Services Act.", "TakedownsContactInformation.TrustedFlaggerSubtext", undefined, true),trustedFlaggerDate:o.bt("Tanggal penetapan status Pemberi Tanda Tepercaya", "Date of Trusted Flagger status designation", "TakedownsContactInformation.TrustedFlaggerDate", undefined, true),trustedFlaggerCountry:o.bt("Negara penetapan status Pemberi Tanda Tepercaya", "Country of Trusted Flagger status designation", "TakedownsContactInformation.TrustedFlaggerDate", undefined, true),anonSubmissionCheckbox:o.bt("Apakah Anda ingin tetap anonim? (Ya)", "Do you wish to remain anonymous? (Yes)", "TakedownsContactInformation.AnonSubmission", undefined, true),anonSubmissionSubtext:o.bt("Jika kotak ini dicentang, Anda tidak akan menerima komunikasi tambahan apa pun tentang laporan Anda, termasuk hasil akhir laporan.", "If you select this box, you will not receive any additional communications about your report, including the final outcome of your report.", "TakedownsContactInformation.AnonSubmissionSubtext", undefined, true),name:o.bt("Nama Pelapor", "Name of Reporter", "TakedownsContactInformation.NameField", undefined, true),email:o.bt("Alamat Email", "Email Address", "TakedownsContactInformation.EmailField", undefined, true),phone:o.bt("Nomor Telepon", "Phone Number", "TakedownsContactInformation.PhoneField", undefined, true),address:o.bt("Alamat Lengkap", "Full Address", "TakedownsContactInformation.AddressField", undefined, true)},h={termsHeading:o.bt("Dengan mencentang kotak berikut, saya memastikan bahwa:", "By checking the following boxes, I confirm:", "TakedownsForm.LabelForCheckboxes", undefined, true),isAccurate:o.bt("Informasi di dalam permohonan ini adalah benar adanya.", "The information in this application is accurate.", "TakedownsContactInformation.isAccurateBoolean", undefined, true),consequences:o.bt("Saya memahami bahwa jika saya menggunakan formulir ini untuk mengirimkan keluhan penipuan atau penyalahgunaan, saya mungkin akan dikenakan tuntutan tanggung jawab oleh Pinterest atau pihak ketiga lainnya.", "I understand that if I use this form to submit fraudulent or abusive complaints, I might be subject to claims of liability by Pinterest or other third parties.", "temp", undefined, true),possibleSuspension:o.bt("Saya memahami bahwa sering mengirimkan laporan yang menipu atau menyalahgunakan dapat menyebabkan Pinterest menangguhkan pemrosesan laporan saya.", "I understand that frequently submitting reports that are fraudulent or abusive may lead Pinterest to suspend the processing of my reports.", "TakedownsContactInformation.possibleSuspension", undefined, true),terms:(0,r.jsx)(l.xv,{children:o.bt("Saya memiliki keyakinan dengan iktikad baik bahwa konten tersebut melanggar undang-undang yang diidentifikasi.", "I have a good faith belief that the content violates the law(s) identified.", "TakedownsContactInformation.termsBoolean", undefined, true)}),dsaIsAccurate:o.bt("Saya yakin dengan iktikad baik bahwa informasi dan dugaan yang terkandung dalam laporan ini akurat dan lengkap.", "I have a good faith belief that the information and allegations contained in this report are accurate and complete.", "TakedownsContactInformation.DSA.termsBoolean", undefined, true),submitText:o.bt("Kirim", "Submit", "TakedownsForm.SubmitApplication", undefined, true),cancelText:o.bt("Batal", "Cancel", "TakedownsForm.CancelApplication", undefined, true),errorCallout:o.bt("Harap mengisi semua bidang yang wajib diisi sebelum mengirimkan permohonan", "Please fill out all required fields before submitting the application", "CCP.AppValidationCallout", undefined, true)},d={pin_image:o.bt("Pin Gambar/Video", "Pin Image / Video", "TakedownsForm.ContentPortion.Image", undefined, true),pin_description:o.bt("Deskripsi Pin", "Pin Description", "TakedownsForm.ContentPortion.Description", undefined, true),pin_notes:o.bt("Komentar/Catatan Pin", "Pin Comments / Notes", "TakedownsForm.ContentPortion.Notes", undefined, true),profile_image:o.bt("Gambar Profil", "Profile Image", "TakedownsForm.ContentPortion.Image", undefined, true),profile_name:o.bt("Nama Profil", "Profile Name", "TakedownsForm.ContentPortion.Name", undefined, true),profile_description:o.bt("Deskripsi Profil", "Profile Description", "TakedownsForm.ContentPortion.Description", undefined, true),board_name:o.bt("Nama Papan", "Board Name", "TakedownsForm.ContentPortion.Name", undefined, true),board_description:o.bt("Deskripsi Papan", "Board Description", "TakedownsForm.ContentPortion.Description", undefined, true),other:o.bt("Lainnya ...", "Other...", "TakedownsForm.ContentPortion.Other", undefined, true)},m=(0,s.Z)({takedown:i[e],contactInformation:c,complaints:n,terms:h,reportedPortion:d},a);return{configuration:_[e],translations:m}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/18738.id_ID-f0a1fab463ae87c2.mjs.map