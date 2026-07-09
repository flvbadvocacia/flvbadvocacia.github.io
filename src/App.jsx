
const LOGO = '/logo-flvb.png'

const APP_URL = 'https://app.flvbadvocacia.com.br'
const WHATSAPP = 'https://wa.me/552139235233'
const INSTAGRAM = 'https://www.instagram.com/flvbadvocacia/'
const THREADS = 'https://www.threads.net/@flvbadvocacia'

const AREAS = [
  {
    titulo: 'Justiça Militar da União',
    texto:
      'Defesa em processos perante a Justiça Militar da União: crimes militares, conselhos de justiça, inquéritos policiais militares e sindicâncias.',
  },
  {
    titulo: 'Processos administrativos disciplinares',
    texto:
      'Acompanhamento de transgressões disciplinares, conselhos de disciplina e de justificação, com atuação desde a defesa prévia até os recursos.',
  },
  {
    titulo: 'Direitos e remuneração do militar',
    texto:
      'Revisão de soldo, adicionais, gratificações, licenciamento, reintegração, promoções e demais direitos das carreiras militares.',
  },
  {
    titulo: 'Reforma, reserva e pensão militar',
    texto:
      'Orientação e ações sobre reforma por incapacidade, transferência para a reserva e pensões devidas a dependentes de militares.',
  },
  {
    titulo: 'Saúde e incapacidade',
    texto:
      'Atuação em casos de inspeção de saúde, incapacidade definitiva, restrições ao serviço e direitos decorrentes de acidentes em serviço.',
  },
  {
    titulo: 'Ações contra a União',
    texto:
      'Ações judiciais na Justiça Federal para garantir direitos negados administrativamente, com cálculo atualizado dos valores devidos.',
  },
]

function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4 0-.5.1-.7l.5-.6c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 3 4.6 4.2.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  )
}

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconThreads(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M12 21c-4.6 0-7.5-3.2-7.5-9S7.4 3 12 3c3.8 0 6.3 2 7.1 5.3l-2.2.6C16.4 6.5 14.7 5.2 12 5.2c-3.4 0-5.2 2.4-5.2 6.8s1.8 6.8 5.2 6.8c2.6 0 4.3-1.3 4.3-3.2 0-1.3-.8-2.2-2.2-2.6-.1 1.9-1.3 3.2-3.1 3.2-1.8 0-3-1-3-2.6 0-1.7 1.5-2.8 3.8-2.8.5 0 1 0 1.5.1-.2-1.2-.9-1.8-2.1-1.8-1 0-1.7.3-2.2 1l-1.8-1c.9-1.3 2.3-2 4-2 2.7 0 4.2 1.5 4.4 4.2 2 .6 3.2 2 3.2 4.1 0 3-2.7 5.6-6.8 5.6Zm-.3-8.4c-1.2 0-1.9.4-1.9 1s.5.9 1.2.9c1 0 1.6-.6 1.7-1.8-.3-.1-.7-.1-1-.1Z" />
    </svg>
  )
}

function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5" />
    </svg>
  )
}

export default function App() {
  return (
    <>
      {/* ===== Cabeçalho ===== */}
      <header className="header">
        <a className="header__brand" href="#inicio">
          <img className="logo" src={LOGO} alt="" width="40" />
          <span className="header__name">
            Fernandes, Lopes e Villas Bôas
            <small>Advocacia Especializada</small>
          </span>
        </a>
        <nav className="header__nav" aria-label="Navegação principal">
          <a href="#sobre">O escritório</a>
          <a href="#areas">Áreas de atuação</a>
          <a href="#contato">Contato</a>
          <a className="header__cliente" href={`${APP_URL}/cliente`} title="Área do Cliente">
            <IconUser width="18" height="18" />
            <span>Área do Cliente</span>
          </a>
        </nav>
      </header>

      {/* ===== Herói ===== */}
      <section className="hero" id="inicio">
        <div className="hero__inner">
          <div className="hero__texto">
          <p className="eyebrow eyebrow--light">Direito Militar · Rio de Janeiro</p>
          <h1>
            Quem serviu ao Brasil merece uma defesa
            <em> à altura da farda.</em>
          </h1>
          <p className="hero__sub">
            Escritório fundado por três Oficiais de Serviços Jurídicos da Força Aérea
            Brasileira, dedicado exclusivamente a causas militares — do processo
            disciplinar à ação judicial contra a União.
          </p>
          <div className="hero__actions">
            <a className="btn btn--prata" href={WHATSAPP} target="_blank" rel="noreferrer">
              <IconWhatsApp width="18" height="18" /> Fale com uma advogada
            </a>
            <a className="btn btn--ghost" href="#areas">
              Conheça as áreas de atuação
            </a>
          </div>
          </div>
          <img className="hero__logo" src={LOGO} alt="Logotipo FLVB: escudo com espada e balança da justiça" />
        </div>
        <div className="hero__braid" aria-hidden="true" />
      </section>

      {/* ===== Sobre / citação ===== */}
      <section className="sobre" id="sobre">
        <p className="eyebrow">Da caserna para a advocacia</p>
        <blockquote className="sobre__quote">
          <img className="logo" src={LOGO} alt="Escudo do escritório: espada e balança da justiça" width="84" />
          <p>
            Após 8 anos servindo à Força Aérea Brasileira como Oficiais de Serviços
            Jurídicos, nasceu no coração das amigas de turma e irmãs de arma Paola
            Fernandes, Jéssica Villas Bôas e Monique Desirée, Especialistas em Direito
            Militar, o desejo de fundar um escritório especializado em causas
            militares, com o propósito de honrar e melhor auxiliar aqueles com quem
            ombrearam durante os anos na caserna, zelando pelo seu acesso integral à
            justiça e garantia dos seus direitos.
          </p>
        </blockquote>
        <div className="sobre__socias">
          <div><strong>Paola Fernandes</strong><span>Especialista em Direito Militar</span></div>
          <div><strong>Jéssica Villas Bôas</strong><span>Especialista em Direito Militar</span></div>
          <div><strong>Monique Desirée</strong><span>Especialista em Direito Militar</span></div>
        </div>
      </section>

      {/* ===== Áreas de atuação ===== */}
      <section className="areas" id="areas">
        <p className="eyebrow">Áreas de atuação</p>
        <h2>Onde podemos ajudar</h2>
        <div className="areas__grid">
          {AREAS.map((a) => (
            <article className="areas__card" key={a.titulo}>
              <h3>{a.titulo}</h3>
              <p>{a.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Como funciona ===== */}
      <section className="passos">
        <p className="eyebrow eyebrow--light">Como funciona</p>
        <h2>Três passos até a sua defesa</h2>
        <ol className="passos__list">
          <li>
            <strong>Primeiro contato</strong>
            <p>Envie sua situação pelo WhatsApp. Respondemos com orientação inicial e os documentos necessários.</p>
          </li>
          <li>
            <strong>Análise do caso</strong>
            <p>Estudamos o seu processo, a legislação militar aplicável e as chances reais de êxito, com transparência.</p>
          </li>
          <li>
            <strong>Acompanhamento contínuo</strong>
            <p>Você acompanha cada andamento do seu processo pela Área do Cliente, com acesso individual e seguro.</p>
          </li>
        </ol>
      </section>

      {/* ===== Contato / rodapé ===== */}
      <footer className="footer" id="contato">
        <div className="footer__top">
          <div className="footer__brand">
            <img className="logo" src={LOGO} alt="" width="64" />
            <p>
              Fernandes, Lopes e Villas Bôas
              <br />
              <small>Advocacia Especializada em Direito Militar</small>
            </p>
          </div>
          <div className="footer__col">
            <h4>Contato</h4>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <IconWhatsApp width="16" height="16" /> (21) 3923-5233
            </a>
            <a href={`${APP_URL}/cliente`}>
              <IconUser width="16" height="16" /> Área do Cliente
            </a>
          </div>
          <div className="footer__col">
            <h4>Redes sociais</h4>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              <IconInstagram width="16" height="16" /> Instagram
            </a>
            <a href={THREADS} target="_blank" rel="noreferrer">
              <IconThreads width="16" height="16" /> Threads
            </a>
          </div>
        </div>
        <p className="footer__legal">
          © {new Date().getFullYear()} Fernandes, Lopes e Villas Bôas — Advocacia Especializada.
        </p>
      </footer>

      {/* ===== WhatsApp flutuante ===== */}
      <a
        className="whats-float"
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
      >
        <IconWhatsApp width="28" height="28" />
      </a>
    </>
  )
}
