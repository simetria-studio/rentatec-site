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
            Termos de Uso
          </h1>
          <p class="mt-6 text-xl text-gray-500">
            Regras e condições para utilização dos nossos serviços
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
              Bem-vindo aos Termos de Uso da Rentatec ("nós", "nosso" ou "empresa"). Estes Termos estabelecem as regras e diretrizes para a utilização do nosso site e serviços. Ao acessar ou utilizar nossos serviços, você concorda em cumprir e estar vinculado a estes Termos de Uso.
            </p>
            <p class="mb-4 text-gray-700">
              Se você não concordar com qualquer parte destes Termos, solicitamos que não utilize nossos serviços. Recomendamos que você leia este documento cuidadosamente antes de começar a usar nossa plataforma.
            </p>
          </div>
          
          <!-- Aceitação dos Termos -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Aceitação dos Termos</h2>
            <p class="mb-4 text-gray-700">
              Ao utilizar nosso site e serviços, você confirma que:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">Leu, entendeu e concorda em cumprir estes Termos de Uso;</li>
              <li class="mb-2">Tem capacidade legal para aceitar estes Termos;</li>
              <li class="mb-2">Concorda com nossa Política de Privacidade, que explica como coletamos e usamos suas informações.</li>
            </ul>
          </div>
          
          <!-- Elegibilidade de Usuário -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Elegibilidade de Usuário</h2>
            <p class="mb-4 text-gray-700">
              Para utilizar nossos serviços, você deve:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">Ter pelo menos 18 anos de idade ou a maioridade legal em sua jurisdição;</li>
              <li class="mb-2">Ter capacidade legal para celebrar contratos vinculativos;</li>
              <li class="mb-2">Não estar proibido de utilizar nossos serviços sob as leis aplicáveis.</li>
            </ul>
            <p class="text-gray-700">
              Se você estiver utilizando nossos serviços em nome de uma empresa ou organização, você declara e garante que tem autoridade para vincular essa entidade a estes Termos.
            </p>
          </div>
          
          <!-- Contas de Usuário -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Contas de Usuário</h2>
            <p class="mb-4 text-gray-700">
              Alguns de nossos serviços podem exigir que você crie uma conta. Ao criar uma conta, você concorda em:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">Fornecer informações precisas, atuais e completas;</li>
              <li class="mb-2">Manter a confidencialidade de sua senha e restringir o acesso à sua conta;</li>
              <li class="mb-2">Ser responsável por todas as atividades que ocorrem em sua conta;</li>
              <li class="mb-2">Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.</li>
            </ul>
            <p class="text-gray-700">
              Reservamo-nos o direito de suspender ou encerrar contas que violem estes Termos ou que permaneçam inativas por um período prolongado.
            </p>
          </div>
          
          <!-- Direitos de Propriedade Intelectual -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Direitos de Propriedade Intelectual</h2>
            <p class="mb-4 text-gray-700">
              Todo o conteúdo, design, gráficos, interfaces, códigos e software utilizados em nosso site e serviços são de propriedade da Rentatec ou de nossos licenciadores e são protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
            </p>
            <p class="mb-4 text-gray-700">
              Concedemos a você uma licença limitada, não exclusiva e não transferível para acessar e utilizar nossos serviços para fins pessoais ou comerciais legítimos, sujeita a estes Termos.
            </p>
            <p class="mb-4 text-gray-700">
              Você não pode:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">Reproduzir, distribuir, modificar ou criar trabalhos derivados de nosso conteúdo;</li>
              <li class="mb-2">Utilizar nossos serviços ou conteúdo para finalidades comerciais sem nossa autorização prévia;</li>
              <li class="mb-2">Remover quaisquer avisos de direitos autorais ou propriedade;</li>
              <li class="mb-2">Utilizar técnicas de engenharia reversa, descompilação ou desmontagem de qualquer parte de nossos serviços.</li>
            </ul>
          </div>
          
          <!-- Atividades Proibidas -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Atividades Proibidas</h2>
            <p class="mb-4 text-gray-700">
              Ao utilizar nossos serviços, você concorda em não:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">Violar leis, regulamentos ou direitos de terceiros;</li>
              <li class="mb-2">Enviar, fazer upload ou distribuir conteúdo ilegal, ofensivo, difamatório, obsceno ou prejudicial;</li>
              <li class="mb-2">Utilizar nossos serviços para transmitir malware, vírus ou outros códigos maliciosos;</li>
              <li class="mb-2">Interferir ou comprometer a integridade ou segurança de nossos sistemas;</li>
              <li class="mb-2">Coletar ou extrair dados de usuários sem seu consentimento;</li>
              <li class="mb-2">Utilizar nossos serviços para fins de spam, phishing ou fraude;</li>
              <li class="mb-2">Tentar acessar áreas não autorizadas de nossos serviços;</li>
              <li class="mb-2">Utilizar nossos serviços de forma que possa sobrecarregar ou prejudicar nossos sistemas.</li>
            </ul>
          </div>
          
          <!-- Limitação de Responsabilidade -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Limitação de Responsabilidade</h2>
            <p class="mb-4 text-gray-700">
              Na extensão máxima permitida por lei:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">Nossos serviços são fornecidos "como estão" e "conforme disponíveis", sem garantias de qualquer tipo;</li>
              <li class="mb-2">Não garantimos que nossos serviços serão ininterruptos, pontuais, seguros ou livres de erros;</li>
              <li class="mb-2">Não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, consequenciais, especiais ou punitivos resultantes do uso ou incapacidade de usar nossos serviços;</li>
              <li class="mb-2">Nossa responsabilidade total, se houver, pelo uso de nossos serviços não excederá o valor pago por você pelos serviços nos 12 meses anteriores.</li>
            </ul>
          </div>
          
          <!-- Indenização -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Indenização</h2>
            <p class="mb-4 text-gray-700">
              Você concorda em indenizar, defender e isentar a Rentatec, seus diretores, funcionários, agentes e parceiros de qualquer reclamação, responsabilidade, dano, perda e despesa (incluindo honorários advocatícios razoáveis) decorrentes de:
            </p>
            <ul class="mb-4 ml-6 list-disc text-gray-700">
              <li class="mb-2">Sua violação destes Termos de Uso;</li>
              <li class="mb-2">Seu uso indevido de nossos serviços;</li>
              <li class="mb-2">Violação de direitos de terceiros.</li>
            </ul>
          </div>
          
          <!-- Rescisão -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Rescisão</h2>
            <p class="mb-4 text-gray-700">
              Podemos, a nosso critério, suspender ou encerrar seu acesso aos nossos serviços a qualquer momento, por qualquer motivo, incluindo, mas não se limitando a, violação destes Termos.
            </p>
            <p class="mb-4 text-gray-700">
              Você pode interromper o uso de nossos serviços a qualquer momento. Após a rescisão, as disposições destes Termos que, por sua natureza, devem sobreviver à rescisão, permanecerão em vigor.
            </p>
          </div>
          
          <!-- Lei Aplicável -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Lei Aplicável</h2>
            <p class="mb-4 text-gray-700">
              Estes Termos serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa decorrente ou relacionada a estes Termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
            </p>
          </div>
          
          <!-- Alterações nos Termos -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Alterações nos Termos</h2>
            <p class="mb-4 text-gray-700">
              Reservamo-nos o direito de modificar estes Termos a qualquer momento. Notificaremos você sobre alterações significativas através de um aviso em nosso site ou por e-mail.
            </p>
            <p class="mb-4 text-gray-700">
              Seu uso continuado de nossos serviços após tais alterações constitui aceitação dos novos Termos. Se você não concordar com os novos Termos, deve parar de usar nossos serviços.
            </p>
          </div>
          
          <!-- Contato -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Contato</h2>
            <p class="mb-4 text-gray-700">
              Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco através do e-mail: <a href="mailto:contato@rentatec.com" class="text-blue-600 hover:underline">contato@rentatec.com</a>
            </p>
          </div>
          
          <!-- Disposições Gerais -->
          <div class="mb-12">
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">Disposições Gerais</h2>
            <p class="mb-4 text-gray-700">
              Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito. Nossa falha em exercer ou fazer cumprir qualquer direito ou disposição destes Termos não constituirá uma renúncia a tal direito ou disposição.
            </p>
            <p class="text-gray-700">
              Estes Termos constituem o acordo completo entre você e a Rentatec em relação aos nossos serviços e substituem quaisquer acordos anteriores.
            </p>
          </div>
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