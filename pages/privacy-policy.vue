<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br rounded-full filter blur-3xl animate-pulse from-blue-100/30 to-purple-100/30"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr rounded-full filter blur-3xl animate-pulse from-indigo-100/30 to-blue-100/30"></div>
      </div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <span class="inline-block px-4 py-1 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">Documentos Legais</span>
          <h1 class="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 sm:text-5xl md:text-6xl">
            Política de Privacidade
          </h1>
          <p class="mt-6 text-xl text-gray-500">
            Como protegemos e utilizamos suas informações
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="relative py-16">
      <div class="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div class="p-8 bg-white rounded-3xl shadow-soft">
          <!-- Última atualização -->
          <div class="mb-8 text-sm text-gray-500">
            Última atualização: {{ new Date().toLocaleDateString('pt-BR', {year: 'numeric', month: 'long', day: 'numeric'}) }}
          </div>
          
          <!-- Introdução -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Introdução</h2>
            <p class="mb-4 text-gray-700">
              A Rentatec ("nós", "nosso" ou "empresa") valoriza a sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações pessoais que você nos fornece ao utilizar nosso site e serviços.
            </p>
            <p class="mb-4 text-gray-700">
              Ao utilizar nossos serviços, você concorda com a coleta e uso das informações de acordo com esta política. Recomendamos que você leia este documento cuidadosamente para entender nossas práticas em relação aos seus dados pessoais.
            </p>
          </div>
          
          <!-- Informações que coletamos -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Informações que Coletamos</h2>
            <p class="mb-4 text-gray-700">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">
                <span class="font-medium text-gray-900">Informações Pessoais:</span> Nome, endereço de e-mail, número de telefone, endereço postal, informações da empresa e cargo.
              </li>
              <li class="mb-2">
                <span class="font-medium text-gray-900">Informações de Uso:</span> Detalhes sobre como você utiliza nosso site e serviços, incluindo dados de acesso, páginas visitadas, tempo gasto no site e ações realizadas.
              </li>
              <li class="mb-2">
                <span class="font-medium text-gray-900">Informações do Dispositivo:</span> Endereço IP, tipo de navegador, provedor de serviços de internet, sistema operacional e outras tecnologias nos dispositivos que você usa para acessar nosso site.
              </li>
              <li class="mb-2">
                <span class="font-medium text-gray-900">Cookies e Tecnologias Similares:</span> Utilizamos cookies e outras tecnologias de rastreamento para melhorar sua experiência em nosso site, analisar como os usuários navegam e personalizar conteúdo.
              </li>
            </ul>
          </div>
          
          <!-- Como usamos suas informações -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Como Usamos Suas Informações</h2>
            <p class="mb-4 text-gray-700">
              Utilizamos as informações coletadas para:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">Fornecer, operar e manter nossos serviços;</li>
              <li class="mb-2">Melhorar, personalizar e expandir nossos serviços;</li>
              <li class="mb-2">Entender e analisar como você usa nossos serviços;</li>
              <li class="mb-2">Desenvolver novos produtos, serviços e funcionalidades;</li>
              <li class="mb-2">Comunicar com você, diretamente ou através de nossos parceiros, para fornecer atualizações, suporte ao cliente e informações relacionadas aos serviços;</li>
              <li class="mb-2">Enviar e-mails de marketing e conteúdo promocional;</li>
              <li class="mb-2">Detectar, prevenir e resolver problemas técnicos;</li>
              <li class="mb-2">Cumprir obrigações legais.</li>
            </ul>
          </div>
          
          <!-- Compartilhamento de informações -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Compartilhamento de Informações</h2>
            <p class="mb-4 text-gray-700">
              Podemos compartilhar suas informações nas seguintes situações:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">
                <span class="font-medium text-gray-900">Parceiros de Negócios:</span> Podemos compartilhar informações com empresas com as quais trabalhamos para fornecer produtos ou serviços.
              </li>
              <li class="mb-2">
                <span class="font-medium text-gray-900">Prestadores de Serviços:</span> Trabalhamos com empresas terceirizadas que nos ajudam a operar, fornecer, melhorar e desenvolver nossos serviços.
              </li>
              <li class="mb-2">
                <span class="font-medium text-gray-900">Requisitos Legais:</span> Podemos divulgar suas informações quando acreditarmos, de boa fé, que a divulgação é necessária para cumprir uma obrigação legal, proteger nossos direitos, proteger sua segurança ou a segurança de outros.
              </li>
              <li class="mb-2">
                <span class="font-medium text-gray-900">Transferências de Negócios:</span> Em caso de fusão, aquisição ou venda de ativos, suas informações pessoais podem ser transferidas como parte desse processo.
              </li>
            </ul>
            <p class="text-gray-700">
              Não vendemos, alugamos ou negociamos suas informações pessoais com terceiros para fins de marketing sem o seu consentimento explícito.
            </p>
          </div>
          
          <!-- Segurança de dados -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Segurança dos Dados</h2>
            <p class="mb-4 text-gray-700">
              A segurança das suas informações é importante para nós. Implementamos medidas técnicas, administrativas e físicas para proteger suas informações pessoais contra acesso não autorizado, perda, uso indevido ou alteração.
            </p>
            <p class="mb-4 text-gray-700">
              No entanto, é importante lembrar que nenhum método de transmissão pela internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
            </p>
          </div>
          
          <!-- Direitos dos usuários -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Seus Direitos</h2>
            <p class="mb-4 text-gray-700">
              Dependendo da sua localização, você pode ter os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">Direito de acesso às suas informações pessoais;</li>
              <li class="mb-2">Direito de retificação de informações imprecisas;</li>
              <li class="mb-2">Direito de exclusão de suas informações pessoais;</li>
              <li class="mb-2">Direito de restringir o processamento de suas informações;</li>
              <li class="mb-2">Direito à portabilidade dos dados;</li>
              <li class="mb-2">Direito de objeção ao processamento;</li>
              <li class="mb-2">Direito de não estar sujeito a decisões automatizadas, incluindo criação de perfil.</li>
            </ul>
            <p class="text-gray-700">
              Para exercer esses direitos, entre em contato conosco através das informações fornecidas na seção "Contato" abaixo.
            </p>
          </div>
          
          <!-- Retenção de dados -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Retenção de Dados</h2>
            <p class="mb-4 text-gray-700">
              Retemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
            </p>
          </div>
          
          <!-- Política de cookies -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Cookies e Tecnologias Similares</h2>
            <p class="mb-4 text-gray-700">
              Nosso site utiliza cookies e tecnologias similares para melhorar sua experiência de navegação, analisar o uso do site e auxiliar em nossos esforços de marketing.
            </p>
            <p class="mb-4 text-gray-700">
              Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado. No entanto, alguns recursos do site podem não funcionar corretamente se a capacidade de aceitar cookies estiver desativada.
            </p>
          </div>
          
          <!-- Privacidade infantil -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Privacidade Infantil</h2>
            <p class="mb-4 text-gray-700">
              Nossos serviços não são direcionados a pessoas menores de 18 anos. Não coletamos intencionalmente informações pessoais de crianças. Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco para que possamos tomar as medidas necessárias.
            </p>
          </div>
          
          <!-- Alterações na política -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Alterações nesta Política de Privacidade</h2>
            <p class="mb-4 text-gray-700">
              Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações. As alterações entram em vigor imediatamente após serem publicadas nesta página.
            </p>
            <p class="mb-4 text-gray-700">
              Quando fizermos alterações significativas nesta política, notificaremos você através de um aviso em nosso site ou por e-mail.
            </p>
          </div>
          
          <!-- Contato -->
       
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
// Sem necessidade de lógica adicional para esta página estática
</script>

<style>
.shadow-soft {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}
</style> 