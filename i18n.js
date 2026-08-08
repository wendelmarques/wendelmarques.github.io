const translations = {
  pt: {
    // Nav
    'nav.experience': 'experiência',
    'nav.research': 'pesquisa',
    'nav.volunteering': 'voluntariado',
    'nav.projects': 'projetos',
    'nav.hackathons': 'hackathons',
    'nav.blog': 'blog',

    // Accessibility
    'lang.select': 'Selecione o idioma',

    // Blog page
    'blog.tagline': '// textos & reflexões',
    'blog.desc': 'Artigos sobre engenharia de machine learning, inteligência artificial aplicada, modelos de linguagem e vivências em comunidades de tecnologia.',

    // Intro
    'hero.desc': 'sou bacharelando em <span style="background: #ee5843; color: #ffffff !important; padding: 2px 6px; border-radius: 4px; font-weight: 500;">ciência da computação</span> pela ufg, atualmente aprofundando conhecimentos em <span style="background: #ee5843; color: #ffffff !important; padding: 2px 6px; border-radius: 4px; font-weight: 500;">engenharia de machine learning</span>. líder de comunidade, organizador voluntário de eventos de tecnologia e, nas horas vagas, fotógrafo de rua 📸',
    'hero.cta': 'para oportunidades de trabalho ou dúvidas gerais, entre em contato comigo pelo <a href="https://www.linkedin.com/in/wendelmarques/" target="_blank" rel="noopener noreferrer" class="link-email">linkedin</a> ou envie um e-mail para wendelmjs@proton.me<span class="cursor-blink" style="background: #a1a1a1;"></span>',

    // Section Titles
    'sec.experience': '// EXPERIÊNCIA',
    'sec.featured_repo': '// REPOSITÓRIO EM DESTAQUE',
    'sec.projects': '// PROJETOS',
    'sec.contributions': '// CONTRIBUIÇÕES CIENTÍFICAS',
    'sec.published_article': '// ARTIGO PUBLICADO',
    'sec.research_programs': '// PROGRAMAS DE PESQUISA & PD&I',
    'sec.volunteering': '// VOLUNTARIADO & COMUNIDADE',
    'sec.competitions': '// COMPETIÇÕES & HACKATHONS',

    // Buttons
    'btn.pdf': 'currículo em pdf',
    'btn.github': 'acessar GitHub',
    'btn.back_blog': '← voltar para o blog',

    // Experience Dates & Roles
    'exp.date.present': 'atual',
    'exp.1.role': 'comunidade de startups',
    'exp.gdg.role': 'gerente de comunidade',
    'exp.gdg.title': 'gdg goiânia (voluntariado)',
    'exp.2.role': 'tutoria em gen ai',
    'exp.3.role': 'ciência de dados',
    'exp.4.role': 'pd&i em visão computacional',
    'exp.5.role': 'engenharia de dados',
    'exp.6.role': 'Suporte em TI',
    'exp.7.role': 'jovem aprendiz',

    // Featured Repo
    'repo.tag': 'Public Repo',
    'repo.desc': '💻 📓 Guia prático de estudos (nível iniciante ao avançado) sobre Inteligência Artificial. Organiza trilhas de aprendizagem, canais, livros e roadmaps sobre Data Science, Machine Learning e Deep Learning (majoritariamente gratuitos e em PT-BR).',
    'repo.stars': 'estrelas',
    'repo.forks': 'forks',
    'repo.watch': 'watching',

    // Projects
    'proj.1.title': 'Sistema de Inteligência Jurídica & Automação',
    'proj.1.desc': 'Fluxo agêntico para análise de sentenças judiciais em escala. Automatiza a extração de dados não estruturados, executa cálculos financeiros de condenações e consolida os resultados em dashboards e planilhas para a diretoria.',
    'proj.2.title': 'Classificação de Imagens com Texto Manuscrito',
    'proj.2.desc': 'No CEIA/UFG, atuou na validação de dados de entrada com visão computacional, incluindo anotação de mais de 30 mil imagens para datasets de treinamento. Resultado: um mecanismo capaz de classificar imagens contendo textos manuscritos.',
    'proj.1.stack.agentic': 'Fluxos Agênticos',
    'proj.1.stack.extraction': 'Extração de Dados',

    // Scientific Contributions
    'contrib.art1.title': 'Ontologia aplicada à redução de ruído em base de dados de tweets sobre mercado financeiro',
    'contrib.art1.desc': 'Limpeza e estruturação de dados não estruturados de redes sociais para viabilizar análises e tomada de decisão automatizada.',
    'contrib.art1.yt': 'Apresentação no YouTube',
    
    'contrib.p1.title': 'pd&i - Centro de Excelência em ia/ufg',
    'contrib.p1.desc': 'pesquisa aplicada em algoritmos inteligentes para plataformas educacionais, com foco em visão computacional.',

    'contrib.p2.title': 'Programa de Iniciação à Pesquisa/UFG',
    'contrib.p2.desc': 'Período dedicado à experimentação metodológica e ao aprofundamento nos fundamentos teóricos de machine learning e ontologias.',

    // Volunteering Banner Stats & Accordions
    'vol.hero': 'Acredito que tecnologia se constrói em comunidade — e que ela só é relevante quando é plural!',
    'vol.stat1.lbl': 'Conferências organizadas desde 2022',
    'vol.stat2.lbl': 'meetups organizados',
    'vol.stat3.lbl': 'Pessoas impactadas presencialmente',
    'vol.stat4.lbl': 'estudantes alcançados por plataforma educacional',

    // Volunteering accordion — Google Developer Groups
    'vol.gdg.status.ongoing': 'em andamento',
    'vol.gdg.devfest2025.desc': 'Organizador. 350+ participantes, 35 palestrantes em 7 trilhas simultâneas, incluindo trilha de mentorias e espaços para criança.',
    'vol.gdg.bwai2025.desc': 'Organizador. Evento mão na massa para aprendizado em IA generativa. Participaram cerca de 30 pessoas.',
    'vol.gdg.devfest2024.desc': 'Organizador. 800+ participantes, 39 palestrantes em seis trilhas simultâneas.',
    'vol.gdg.bwai2024.desc': 'Organizador. Evento mão na massa para aprendizado em IA generativa. Participaram cerca de 25 pessoas.',
    'vol.gdg.devfest2023.desc': 'Organizador. ~900 participantes, 40 palestras.',

    // Volunteering accordion — Women Techmakers
    'vol.wtm.iwd2025.desc': 'Organizador. ~250 participantes, palco 100% feminino, 30+ atividades, ~20 voluntários.',
    'vol.wtm.iwd2024.desc': 'Organizador. 100% palestrantes mulheres, 250+ participantes, 20+ palestras.',
    'vol.wtm.iwd2023.desc': 'Organizador. 100% palestrantes mulheres, 400+ participantes, 20+ palestras.',

    // Volunteering accordion — Google DSC UFG
    'vol.gdsc.lead.title': 'Lead, Co-fundador e Organizador',
    'vol.gdsc.lead.desc': 'Gestão da comunidade, organização de eventos e projetos de impacto social.',
    'vol.gdsc.literacy.title': 'Atividades de letramento em computação em escolas municipais',
    'vol.gdsc.literacy.desc': 'Organizador • apresentamos conteúdos sobre visão computacional e machine learning',
    'vol.gdsc.mit_black.title': 'Mulheres in Tech: mulheres negras na tecnologia (2022)',
    'vol.gdsc.mit_black.desc': 'Organizador • <a href="https://www.youtube.com/live/vJtCmHxU7t4?si=rXRASFPpRwvPhyWm&t=5371" target="_blank" class="doi-link" style="color: #f9594a; text-decoration: underline;">live nos canais da UFG e INF<svg class="link-arrow" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></a> com 4h de conteúdo',
    'vol.gdsc.mit_presencial.title': 'Mulheres In Tech - Presencial (2022)',
    'vol.gdsc.mit_presencial.desc': 'Organizador • primeiro evento como líder de comunidade, foram cerca de 20 palestras ministradas por mulheres',

    // Volunteering accordion — sbc/ufg
    'vol.sbc.sbcas.desc': 'Membro do comitê organizador.',
    'vol.sbc.adas.desc': 'Fotógrafo • evento de tecnologia com palestrantes mulheres',
    'vol.sbc.semana.desc': 'Apoio • evento de recepção de calouros(as) dos cursos de tecnologia do INF/UFG',
    'vol.sbc.erad.desc': 'Apoio em salas.',

    // Volunteering accordion — Outras iniciativas
    'vol.other.title': 'Outras iniciativas',
    'vol.other.vestgeek.desc': 'Idealizador e criador de conteúdo (2015–2022). Projeto voluntário de apoio a vestibulandos, com mais de 3 milhões de visualizações e 80 mil seguidores nas redes sociais.',

    // Volunteering accordion — palestras
    'vol.talks.title': 'palestras',
    'vol.talks.cajueiro.desc': 'Ministrei uma aula sobre inteligência artificial.',
    'vol.preview.alt': 'Prévia do evento',

    // Competitions & Hackathons
    'comp.usp.badge': 'selecionado para imersão presencial de 1 semana',
    'comp.usp.desc': 'Envolveu o desenvolvimento de solução com IA GEN, visão computacional, similaridade vetorial e RAG para construção de solução de impacto social.',
    'comp.startupschool.desc': 'Programa de 4 meses: desenvolvimento e validação prática de modelo de negócio com IA integrada.',
    'comp.zerotohero.desc': 'Maratona de 3 dias: construção de um MVP funcional do zero, apresentado a uma banca de especialistas.',
    'comp.akcitcamp.title': 'AKCIT Camp — Desenvolvendo Agentes de IA',
    'comp.akcitcamp.desc': 'Bootcamp de 4 semanas de orquestração multiagente (LangChain, CrewAI, LangGraph) com hackathon de 2 dias. Desenvolveu uma solução multiagêntica aplicada à educação.',
    'comp.ideathon.title': 'Ideathon Governo de Goiás — Autocuidado para 60+',
    'comp.ideathon.desc': 'Maratona de ideias na Campus Party para desenvolvimento de solução voltada às pessoas 60+. Foram duas maratonas, em cada uma pessoas 60+ participaram das equipes.',
    'comp.nasa.desc': 'Maratona de 2 dias para desenvolvimento de solução de dados com bases abertas da NASA.',

    // Footer
    'footer.location': 'wwwendel marques • baseado no brasil',
    'footer.inspired': 'inspirado em'
  },
  en: {
    // Nav
    'nav.experience': 'experience',
    'nav.research': 'research',
    'nav.volunteering': 'volunteering',
    'nav.projects': 'projects',
    'nav.hackathons': 'hackathons',
    'nav.blog': 'blog',

    // Accessibility
    'lang.select': 'Select language',

    // Blog page
    'blog.tagline': '// writings & reflections',
    'blog.desc': 'Articles about machine learning engineering, applied artificial intelligence, language models, and experiences in tech communities.',

    // Intro
    'hero.desc': 'I am a B.Sc. candidate in <span style="background: #ee5843; color: #ffffff !important; padding: 2px 6px; border-radius: 4px; font-weight: 500;">Computer Science</span> at UFG, currently specializing in <span style="background: #ee5843; color: #ffffff !important; padding: 2px 6px; border-radius: 4px; font-weight: 500;">Machine Learning Engineering</span>. Community leader, volunteer tech event organizer, and street photographer in my spare time 📸',
    'hero.cta': 'for career opportunities or general inquiries, get in touch via <a href="https://www.linkedin.com/in/wendelmarques/" target="_blank" rel="noopener noreferrer" class="link-email">linkedin</a> or send an email to wendelmjs@proton.me<span class="cursor-blink" style="background: #a1a1a1;"></span>',

    // Section Titles
    'sec.experience': '// EXPERIENCE',
    'sec.featured_repo': '// FEATURED REPOSITORY',
    'sec.projects': '// PROJECTS',
    'sec.contributions': '// SCIENTIFIC CONTRIBUTIONS',
    'sec.published_article': '// PUBLISHED ARTICLE',
    'sec.research_programs': '// RESEARCH PROGRAMS & R&D',
    'sec.volunteering': '// VOLUNTEERING & COMMUNITY',
    'sec.competitions': '// COMPETITIONS & HACKATHONS',

    // Buttons
    'btn.pdf': 'full resume (pdf)',
    'btn.github': 'view GitHub',
    'btn.back_blog': '← back to blog',

    // Experience Dates & Roles
    'exp.date.present': 'present',
    'exp.1.role': 'startup community',
    'exp.gdg.role': 'community manager',
    'exp.2.role': 'gen ai tutoring',
    'exp.3.role': 'data science',
    'exp.4.role': 'computer vision r&d',
    'exp.5.role': 'data engineering',
    'exp.6.role': 'IT Support',
    'exp.7.role': 'apprentice',
    'exp.gdg.title': 'gdg goiânia (volunteer)',

    // Featured Repo
    'repo.tag': 'Public Repo',
    'repo.desc': '💻 📓 Practical study guide (beginner to advanced) on Artificial Intelligence. Organizes learning paths, channels, books, and roadmaps for Data Science, Machine Learning, and Deep Learning.',
    'repo.stars': 'stars',
    'repo.forks': 'forks',
    'repo.watch': 'watching',
    'repo.title': 'study materials on data science and machine learning',

    // Projects
    'proj.1.title': 'Legal Intelligence & Automation System',
    'proj.1.desc': 'Agentic workflow for large-scale legal judgment analysis. Automates unstructured data extraction, calculates court penalty finances, and consolidates insights into executive dashboards.',
    'proj.2.title': 'Handwritten Text Image Classification',
    'proj.2.desc': 'At CEIA/UFG, worked on computer vision input data validation, including annotating over 30,000 images for training datasets. Result: an engine capable of classifying handwritten text images.',
    'proj.1.stack.agentic': 'Agentic Workflows',
    'proj.1.stack.extraction': 'Data Extraction',

    // Scientific Contributions
    'contrib.art1.title': 'Ontology applied to noise reduction in financial market Twitter datasets',
    'contrib.art1.desc': 'Cleaning and structuring unstructured social media data to enable automated analytics and decision-making.',
    'contrib.art1.yt': 'YouTube Presentation',

    'contrib.p1.title': 'r&d - Center of Excellence in AI/UFG',
    'contrib.p1.desc': 'applied research in intelligent algorithms for educational platforms, focusing on computer vision.',

    'contrib.p2.title': 'Undergraduate Research Program/UFG',
    'contrib.p2.desc': 'Period dedicated to methodological experimentation and deepening theoretical foundations of machine learning and ontologies.',

    // Volunteering Banner Stats & Accordions
    'vol.hero': 'I believe technology is built in community — and it is only relevant when it is inclusive and plural!',
    'vol.stat1.lbl': 'Conferences organized since 2022',
    'vol.stat2.lbl': 'meetups organized',
    'vol.stat3.lbl': 'People impacted in-person',
    'vol.stat4.lbl': 'students reached via educational platform',

    // Volunteering accordion — Google Developer Groups
    'vol.gdg.status.ongoing': 'ongoing',
    'vol.gdg.devfest2025.desc': 'Organizer. 350+ attendees, 35 speakers across 7 simultaneous tracks, including a mentorship track and a kids space.',
    'vol.gdg.bwai2025.desc': 'Organizer. Hands-on event for learning generative AI. About 30 people attended.',
    'vol.gdg.devfest2024.desc': 'Organizer. 800+ attendees, 39 speakers across six simultaneous tracks.',
    'vol.gdg.bwai2024.desc': 'Organizer. Hands-on event for learning generative AI. About 25 people attended.',
    'vol.gdg.devfest2023.desc': 'Organizer. ~900 attendees, 40 talks.',

    // Volunteering accordion — Women Techmakers
    'vol.wtm.iwd2025.desc': 'Organizer. ~250 attendees, 100% female lineup, 30+ activities, ~20 volunteers.',
    'vol.wtm.iwd2024.desc': 'Organizer. 100% female speakers, 250+ attendees, 20+ talks.',
    'vol.wtm.iwd2023.desc': 'Organizer. 100% female speakers, 400+ attendees, 20+ talks.',

    // Volunteering accordion — Google DSC UFG
    'vol.gdsc.lead.title': 'Lead, Co-founder & Organizer',
    'vol.gdsc.lead.desc': 'Community management, event organization, and social impact projects.',
    'vol.gdsc.literacy.title': 'Computing literacy activities in public schools',
    'vol.gdsc.literacy.desc': 'Organizer • presented content on computer vision and machine learning',
    'vol.gdsc.mit_black.title': 'Women in Tech: Black women in tech (2022)',
    'vol.gdsc.mit_black.desc': 'Organizer • <a href="https://www.youtube.com/live/vJtCmHxU7t4?si=rXRASFPpRwvPhyWm&t=5371" target="_blank" class="doi-link" style="color: #f9594a; text-decoration: underline;">live stream on UFG and INF channels<svg class="link-arrow" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></a> with 4h of content',
    'vol.gdsc.mit_presencial.title': 'Women In Tech - In Person (2022)',
    'vol.gdsc.mit_presencial.desc': 'Organizer • first event as a community leader, about 20 talks delivered by women',

    // Volunteering accordion — sbc/ufg
    'vol.sbc.sbcas.desc': 'Organizing committee member.',
    'vol.sbc.adas.desc': 'Photographer • tech event with female speakers',
    'vol.sbc.semana.desc': 'Support • welcome event for incoming students of INF/UFG tech programs',
    'vol.sbc.erad.desc': 'Room support.',

    // Volunteering accordion — Other initiatives
    'vol.other.title': 'Other initiatives',
    'vol.other.vestgeek.desc': 'Founder and content creator (2015–2022). Volunteer project supporting college entrance exam candidates, with over 3 million views and 80,000 followers on social media.',

    // Volunteering accordion — talks
    'vol.talks.title': 'talks',
    'vol.talks.cajueiro.desc': 'Taught a class on artificial intelligence.',
    'vol.preview.alt': 'Event preview',

    // Competitions & Hackathons
    'comp.usp.badge': 'selected for a 1-week in-person immersion',
    'comp.usp.desc': 'Involved developing a solution with generative AI, computer vision, vector similarity, and RAG to build a social-impact solution.',
    'comp.startupschool.desc': '4-month program: developing and validating a business model in practice with integrated AI.',
    'comp.zerotohero.desc': '3-day marathon: building a functional MVP from scratch, presented to a panel of experts.',
    'comp.akcitcamp.title': 'AKCIT Camp — Building AI Agents',
    'comp.akcitcamp.desc': '4-week multi-agent orchestration bootcamp (LangChain, CrewAI, LangGraph) with a 2-day hackathon. Built a multi-agent solution applied to education.',
    'comp.ideathon.title': 'Goiás State Government Ideathon — Self-care for 60+',
    'comp.ideathon.desc': 'Idea marathon at Campus Party to develop a solution for people aged 60+. There were two marathons, each with people aged 60+ on the teams.',
    'comp.nasa.desc': '2-day marathon to develop a data solution using NASA open data.',

    // Footer
    'footer.location': 'wwwendel marques • based in brazil',
    'footer.inspired': 'inspired by'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('site_lang') || 'pt';
  setLanguage(currentLang);

  // Check if navlinks requires horizontal scrolling on narrow screens
  function checkNavOverflow() {
    const navlinks = document.querySelector('.navlinks');
    if (navlinks) {
      if (navlinks.scrollWidth > navlinks.clientWidth) {
        navlinks.classList.add('nav-scrolling-active');
      } else {
        navlinks.classList.remove('nav-scrolling-active');
      }
    }
  }

  checkNavOverflow();
  window.addEventListener('resize', checkNavOverflow);

  // Setup event listeners for dropdown buttons with position: fixed viewport portal strategy
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  const langOptions = document.querySelectorAll('.lang-option');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('show-mobile');
    });

    document.addEventListener('click', () => {
      navLinks.classList.remove('show-mobile');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show-mobile');
      });
    });
  }

  if (langBtn && langMenu) {
    function positionDropdown() {
      const rect = langBtn.getBoundingClientRect();
      langMenu.style.position = 'fixed';
      langMenu.style.top = (rect.bottom + 6) + 'px';
      langMenu.style.right = (window.innerWidth - rect.right) + 'px';
      langMenu.style.left = 'auto';
      langMenu.style.zIndex = '99999999';
    }

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isShowing = langMenu.classList.contains('show');
      if (!isShowing) {
        positionDropdown();
        langMenu.classList.add('show');
      } else {
        langMenu.classList.remove('show');
      }
    });

    document.addEventListener('click', () => {
      langMenu.classList.remove('show');
    });

    window.addEventListener('resize', () => {
      if (langMenu.classList.contains('show')) {
        positionDropdown();
      }
    });

    window.addEventListener('scroll', () => {
      if (langMenu.classList.contains('show')) {
        positionDropdown();
      }
    }, { passive: true });

    langOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = opt.dataset.lang;
        setLanguage(selectedLang);
        langMenu.classList.remove('show');
      });
    });
  }
});

function setLanguage(lang) {
  localStorage.setItem('site_lang', lang);
  const dict = translations[lang] || translations.pt;

  // Update dropdown UI active class
  document.querySelectorAll('.lang-option').forEach(opt => {
    if (opt.dataset.lang === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Apply translations to all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Apply translations to attributes (e.g. aria-label, alt, title)
  // Format: data-i18n-attr="aria-label:lang.select,title:lang.select"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const pairs = el.getAttribute('data-i18n-attr').split(',');
    pairs.forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (attr && dict[key]) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });
}