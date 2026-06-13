import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransportbrApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransportbrApi';

        displayName = 'Apisetu Gov Transportbr API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransportbr/apisetu-gov-transportbr.svg', dark: 'file:../nodes/ApisetuGovTransportbr/apisetu-gov-transportbr.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transportbr/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transportbr/v3',
                        description: 'The base URL of your Apisetu Gov Transportbr API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
