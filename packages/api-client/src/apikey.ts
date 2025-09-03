function getApiKeyFromScript(): string | '' {
    const scripts = document.getElementsByTagName('script');
    const script = scripts[scripts.length - 1];
    if (script) {
        const params = new URLSearchParams(script.src.split('?')[1]);
        return params.get('apikey') || '';
    }
    return '';
}

const apikey = (window as any).LN_API_KEY || getApiKeyFromScript() || '';


export default apikey;