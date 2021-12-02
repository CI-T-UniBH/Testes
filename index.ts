import { Builder, Key, WebDriver, until, By, WebElement } from 'selenium-webdriver';

class DesafioQACIT {
    /* Navegador utilizado pelo Selenium */
    private readonly SELENIUM_BROWSER: string = 'chrome';
    /* URL remota do servidor Selenium */
    private readonly SELENIUM_REMOTE_URL: string = 'http://localhost:4444/';
    /* Driver do Selenium */
    private driver: WebDriver | undefined = undefined;

    constructor() {
        console.log('[DESAFIO CI&T - QA] Testes de Automação');

        this.buildDriver()
            .then(async () => await this.startTests())
            .catch(err => console.error('Não foi possível iniciar o driver do Selenium.\n', err));
    }

    /**
     * buildDriver
     * 
     * Inicializa o driver selenium
     */
    private async buildDriver(): Promise<void> {
        console.log('\nInicializando driver do Selenium...');

        this.driver = await new Builder()
            .forBrowser(this.SELENIUM_BROWSER)
            .usingServer(this.SELENIUM_REMOTE_URL)
            .build();
            
        console.log('Driver do Selenium inicializado com sucesso.');
    }

    /**
     * startTests
     * 
     * Inicia a execução dos casos de teste
     */
    private async startTests(): Promise<void> {
        try {    
            console.log('\nIniciando casos de testes...');

            await this.startFirstCase();
            await this.startSecondCase();
            await this.startThirdCase();
            
            console.log('\nTestes finalizados com sucesso.');
        }
        catch (err) {
            console.error('\nTestes interrompidos com erro(s).\n', err);
        } 
        finally {
            await this.driver!.quit();
        }
    }

    /**
     * browseBaseURL
     * 
     * Redireciona para o site a ser testado
     */
    private async browseBaseURL(): Promise<void> {
        await this.driver!.get('https://opentdb.com');
    }
    
    /**
     * awaitPageRedirects
     * 
     * Aguarda determinada página carregar
     */
     private async awaitPageRedirects(url: string, delay: number = 5000): Promise<void> {
        await this.driver!.wait(until.urlIs(url), delay);
    }

    /**
     * startFirstCase
     * 
     * Inicia o primeiro caso de testes
     */
    private async startFirstCase(): Promise<void> {
        console.group('\n[1º caso] Busca no Banco de Questões');

        console.log('Abrindo página inicial');
        await this.browseBaseURL();

        console.log('Pressionando botão de busca');
        await (await this.driver!.findElement(By.partialLinkText('BROWSE'))).click();
        
        console.log('Aguardando redirecionamento');
        await this.awaitPageRedirects('https://opentdb.com/browse.php', 10000);
        
        console.log('Inserindo o termo desejado "Science: Computers" no campo de busca');
        await (await this.driver!.findElement(By.id('query'))).sendKeys('Science: Computers');

        console.log('Pressionando botão de filtro');
        await (await this.driver!.findElement(By.css('#query ~ button'))).click();

        console.log('Aguardando resultados');
        await this.awaitPageRedirects('https://opentdb.com/browse.php?query=Science%3A+Computers&type=Question#');

        console.log('Buscando mensagem de erro "No questions found."');
        const alertMessage: string = await (await this.driver!.findElement(By.css('.container > .alert.alert-danger'))).getText();
        
        console.groupEnd();

        if (alertMessage === 'No questions found.') {
            console.log('[SUCESSO] Teste validado com êxito.');
        }
        else {
            console.log('[ERRO] Teste não atendeu à expectativa.');
        }
    }

    /**
     * startSecondCase
     * 
     * Inicia o segundo caso de testes
     */
     private async startSecondCase(): Promise<void> {
        console.group('\n[2º caso] Busca no Banco de Categorias');

        console.log('Abrindo página inicial');
        await this.browseBaseURL();

        console.log('Pressionando botão de busca');
        await (await this.driver!.findElement(By.partialLinkText('BROWSE'))).click();
        
        console.log('Aguardando redirecionamento');
        await this.awaitPageRedirects('https://opentdb.com/browse.php', 10000);
        
        console.log('Inserindo o termo desejado "Science: Computers" no campo de busca');
        await (await this.driver!.findElement(By.id('query'))).sendKeys('Science: Computers');

        console.log('Alterando tipo de filtragem padrão de "Question" para "Category"');
        await (await this.driver!.findElement(By.id('type'))).sendKeys(Key.ENTER, Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ENTER);

        console.log('Pressionando botão de filtro');
        await (await this.driver!.findElement(By.css('#query ~ button'))).click();

        console.log('Aguardando resultados');
        await this.awaitPageRedirects('https://opentdb.com/browse.php?query=Science%3A+Computers&type=Category#');

        console.log('Verificando quantidade de questões encontradas (esperado 25 resultados)');
        const table: WebElement = await this.driver!.findElement(By.css('.container > h2 ~ .table'));
        const rowsCount: number = await (await table.findElements(By.css('tbody > tr'))).length ;
        
        console.log('Verificando se o controle de paginação está visível');
        const paginationVisible: boolean = await (await this.driver!.findElement(By.css('.pagination'))).isDisplayed();
        
        console.groupEnd();

        if (rowsCount === 25 && paginationVisible) {
            console.log('[SUCESSO] Teste validado com êxito.');
        }
        else {
            console.log('[ERRO] Teste não atendeu à expectativa.');
        }
    }

    /**
     * startThirdCase
     * 
     * Inicia o terceiro caso de testes
     */
     private async startThirdCase(): Promise<void> {
        console.group('\n[3º caso] Login com Credenciais Inválidas');

        console.log('Abrindo página inicial');
        await this.browseBaseURL();

        console.log('Pressionando botão de login');
        await (await this.driver!.findElement(By.partialLinkText('LOGIN'))).click();
        
        console.log('Aguardando redirecionamento');
        await this.awaitPageRedirects('https://opentdb.com/login.php', 10000);

        console.log('Inserindo o nome de usuário inexistente "UsuarioTeste" no campo de nome');
        await (await this.driver!.findElement(By.id('username'))).sendKeys('UsuarioTeste');
        
        console.log('Inserindo senha inexistente "SenhaTeste" no campo de senha');
        await (await this.driver!.findElement(By.id('password'))).sendKeys('SenhaTeste');
        
        console.log('Enviando o formulário de login');
        await (await this.driver!.findElement(By.className('form-signin'))).submit();

        console.log('Buscando mensagem de erro "ERROR! Logging In Failed."');
        const alertElement: WebElement = await (await this.driver!.wait(until.elementLocated(By.css('.container > .alert.alert-danger')), 5000));
        
        console.groupEnd();

        if (await alertElement.getText() === 'ERROR! Logging In Failed.') {
            console.log('[SUCESSO] Teste validado com êxito.');
        }
        else {
            console.log('[ERRO] Teste não atendeu à expectativa.');
        }
    }
}

export default new DesafioQACIT();