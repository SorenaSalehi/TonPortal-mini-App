import {createHmac} from 'crypto'


export const validateInitData = (InitData)=> {
    const urlParams = new URLSearchParams(InitData);
  
    const hash = urlParams.get('hash');
    urlParams.delete('hash');
    urlParams.sort();
  
    let dataCheckString = '';
    for (const [key, value] of urlParams.entries()) {
        dataCheckString += `${key}=${value}\n`;
    }
    dataCheckString = dataCheckString.slice(0, -1);
    const secret = createHmac('sha256', 'WebAppData').update(process.env.BOT_TOKEN ?? '');
    const calculatedHash = createHmac('sha256', secret.digest()).update(dataCheckString).digest('hex');
  
    return calculatedHash === hash;
  } 