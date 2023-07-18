//Constante que contiene una cadena codificada en base64  
//utilizada para mostrar una imagen predeterminada en productos.
export const imageDefaulProdut = "iVBORw0KGgoAAAANSUhEUgAAAJAAAADICAYAAAAHm2giAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AUFDhYJSnTuGQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAANE0lEQVR42u2dWXPiRhRGP4lNiFUgMIixB8eVquQl//9/pPKSzIxjapAw+74KKU+tAiNsy4ANzndebUAlHbrv7Xu7kVzXdUHIG5F5CwgFIhSIUCBCgQihQIQCEQpEKBAhFIhQIEKBCAUihAIRCkQoEKFAhFAgQoEIBSIUiFAgQigQoUCEAhEKRAgFIhSIUCBCgQihQIQCEQpEKBAhFIhQIEKBCAUiFIgQCkQoEKFAhAIRQoEIBSIUiFAgQigQoUCEAhEKRAgFIhSIUCBCgQihQIQCEQpEKBChQIRQIEKBCAUiFIgQCkQoEKFAhAIRQoH+H7iui+l0CsdxKBAJxnw+x8PDA/78809YlgXXdU/6eWHe8s/Ber1Gs9lEvV5Ht9uF67qQZRn5fB6KopzscyX31IpewHB/9JsqSe92/Y7joN/vwzRNNBoNrNfrrev49ddfUa1WT3ZN4f+zOOPxGL1eD/P5/CjxgizLSCQSyOVyiMfjJ7/+yWQC0zRhWRbm87nv/5imiXw+j3Q6TYGOefMty8K///6L8Xh81FFIlmVomobb21vk8/mTXP9yuYRlWbAsC4PB4Nn/HY/HME0TyWQSsixToGMwGo3w8PCA0Wh0kiml0+lAlmUkk0nEYrGjxjmtVgumaaLdbr9afMuyUCgUTiL0/04gx3FgmiaGw+FJP6fdbqPRaODm5ubg+MN1XS/OeXx8xGq1CjQi5nI5RCIRTmGvDX6fe2DdbheNRuNdrk/EH8lk8s3vMZvNYJomTNPEbDYL9HpN02AYBq6urijQ5k0dDocYDAawbXvn74qiIJfL+aautm3DNE0sFot3udbhcAjLsnB3dxc4/litVmg0GjBNE/1+P9BrVVWFYRgwDAOKopw0KwxfmjydTgd///333vhFkiSUSiX89ttviEajW69tNptoNpvves2WZSGfzyOXy716im232zBNE61WK1B2GIlEUCqVYBgGMpnMuywnXJxArVbr2eBXiCIemriJy+USpmlurZO8B7PZDJZlIRaLIRQKAQBisdjOwxUjq1jPWS6XgdadCoUCDMNAoVA4Sba197MvZSHRcRz0ej38888/W6mrJEmQJGnnm6ooivfAxAOaTqcfcu2SJCEejyMWi/nGJEIy0zQxmUwCvXcmk4FhGCiVSlsj7ntxESPQfD5HrVbbil8kSUI+n0c+n0c0GsV4PEar1cJ4PPZecy5IkoR0Og3DMJDP570RwrZtPD4+wjRN9Hq9QOtR8Xgc5XIZhmFAVdV3Xf2+KIEWiwW+f/+Oer2+dYNvbm5QrVa31ll0Xce3b9/Q6/UO+sxoNIp4PA5VVaEoCiKRCCRJguu6WC6XmM1mmE6nmM/nL6bUfpmQ4zjodrswTRPNZjPQtBoOh3F1dQXDMKBp2oeJcxECua6Lnz9/7siTSqVwfX29k2lpmoZKpYLhcBg41gmFQshkMtB1HZqmQVVVhMNh3wfkOA5WqxWm0ym63S7a7TZGo9HWNOqXCYnyiSg/BMkGxYhrGAaKxeLW9EyB9iBu9tOhPZVK+daaJEmCpmmIxWKvjnfEgymXy9B13RttXpItFApBURRPWrFCPJ1OfTOhxWLhxTlBV8BTqRQMw0C5XD7qyvanFsh1XXS7Xd/Fs+cecJAhXVEUXF9fwzAM38woSIB8fX0NXdexXC6RTqe9OEe0WZimiU6nEyjOicViXpyTTCY/fLq6uBFoMpn43vDxeIzlcum7WDgYDF6VAmcyGVSrVVxdXR3lwUiSBFVVoaqq9wXo9Xpe+cFv0fO5Ea5YLMIwDORyuXdNyz/VCLQvQB0Oh/j58yeq1epWLCCmvJcelqZpuLu7e7a46LouXNfFer2G4zhwXReSJHnT177RTiwXiPJDkGxQTMEi6A6Hzz9JvshamOu6uL+/x2w2Qz6fRywWw2g0QrPZfDEDS6VS+OWXX/bK47ou5vM5+v0++v0+RqMRVquV1+EXjUaRy+VQqVQQjUa3JFoul1754aU2i6ckEomtoFtcS9BpmQIFWFgUq7ayLGO9Xr8YX0QiEVSr1b3yiEC30WjsZFWbAbeqqlvBtuM4XhDdarUCxTnRaNQLutPptPee8/kcrVYL2WwWqVSKAp1SpNfWiyqVCkqlku83ut/v4+HhAY+Pj74CpNNplMtllMtlb+RxXReDwcATOWibhSg/6Lq+tbgogu5+v48//viDAp0D6XQalUrFNyDtdDr4/v277/QnMqFKpYJEIuGJs9lmEbREks1mvfLD5uLiZtC9Xq99SzQU6AMQFfpEIuEbkP/48WNHnlAohKurK5TL5a1MaLVabZUfgqCqqpeWx+NxT8aXepsp0AejqioKhcLO1GXbNmq1Grrd7t5MKBQKeSNBp9Pxyg9vabMol8vIZrNbi4si6D51hyQFOgBRmniabbVara3uxGQy6Y0QYmFxs83CsqzAbRa6rqNSqUDXdS/9f2tvMwX6AMQuiaejz3q99mKNaDTqBchPMyFRfhBV/teSyWS2gm4h7eYeriCLixTog4hEIr5lgMlkguFwiKurK1QqlZ02C7HLM2ibhaIoXtC92WYhRrK//vorcM8PBfpggZ42WolV5ru7OxSLRa/q7pcJvfpGbrRZZLPZnWxPNL4FSfUp0JkI9LT1QTR4iWq5aLOo1+tHa7MQpY+n1xIOhwPFURTogxFZlF9sJDIhscszaCbk12YhpipJkpBKpbY+W5blsy6MUqA9QbSfQKdos9jsba5UKr4ryOdc16JAPplQsVjc+tYfkgnta7OwbXtnD5dfJT1I2YUCfSCKoniVbZEJbbZZWJYVaJfnvjaLfb3NolvxKbZtf4rU/dMKtK/hXLRZWJYVeJenaLMol8teG63ruhiNRt4o9jTojsVivjslFosFBTpH9mVCm20W7XY7cPlBxDl+i4uWZe3tbdY0bWcEEtK998ZGCvTGTGgwGHgP+thtFuIIuX3i+e2aWK/XgUc/CnRC/DIh0U147DaLfr+Per3+qsXFUqnk27A2Ho8DdylSoBOt6/hlQoe0WcTjcS/oPqTNQtM0fPnyZWf0EYXb9zoVhAIFzITe2mYRDoe9dtLNNgtxhFyQNot0Oo3b21vfswhFv/Zn5CIEeikTemubhTjNYrP8IIqoQdosdF3H169foev6zt/W6/WbqvkU6AhEo1Hc3NzszYTe8mDEIQebbRaC1WqF4XCI4XD4KnlUVUWpVPIq709xXddbYPysnK1Asizj69evUBQlcCbkh2izMAzD6232E1Zs+Wm32+j3+5jNZt6OD0mSEA6HkUgkoGkadF1/9vTTbreLWq326SrwFzMCiW/1IW0WordZLC6Kh+04ju+DD4VCyOVy0DQNtm1juVxu7QsT7SH7irSCXq+HHz9+XGyr6qcQ6JCGc0mSkMvlvMXFzaC73W5jPB5D1/Wdivnm6yORSODDKV3XRbvdxv39/cHHzFCgA3hLJiRIJpNenLO5y/PpEXKtVgs3NzdHOy5ltVrBsizUarWjdR2ee/X+7AQ6pOFc9DYbhrE1suw7Qq7f72MymaDf73uveUu/znq9Rq/Xg2VZgafYl+LAc98ffzZXd0ibhSzL3uJi0CPkVqsVarUaWq0WCoUCdF1HOp1+8Zwgx3GwXC4xGAzQarXQbreP3mkYi8VO+ks7RxkhP/qQzVMcpn3oEXKqqiKVSiGZTEJRFITDYciy7J1MNpvNMB6PMRqNvCztFHz58gW///47j3d5LmY45mHahxwhJ7Bt21sLEqObeICiGf89msJEUfbcW2A/RKBDD9MW+602m+IPOULupWv9iC5CsaWaWdiT6Wpzl2fQNovN8oMsy3BdF7Zte0F30N7mcyWfz+P6+vpsDtI8C4EOOUw7m82iXC57h2mLaWTzF2w+S6dfNpvF7e3tm3+g5dMJdOzDtEVvs9jDdWmnWTxHoVBAtVq9iKnr5AIdmgn5tVlsvu9nkieRSHhF2VP/VObZp/HvcZj2er3GcDhEu91Gr9fDbDaDbdsXE/+IBULx+6qiKHuJe8aOKpDjON5vWgTNhESbRalUevVh2iKIXiwWWK1WF7PnKhQKIRKJeL/gc8mbDY86hdm2jW63G0ge8Qs2z7VZPDdivaXgSc5UIHESV6/XezEr2tdmQf7HAkmShGKxiG63i3q9vvd//NosCAXyMijDMNDpdHayJL82C3LZnKSY6jgOvn37hvv7ewD72ywIR6C9aaphGOj1et5BB5ttFoQj0KtS7PF47P3iH6FAb5KI09Xn5qRzCuWhQIRQIEKBCAUiFIgQCkQoEKFAhAIRQoEIBSIUiFAgQoEIoUCEAhEKRCgQIRSIUCBCgQgFIoQCEQpEKBChQIRQIEKBCAUiFIhQIEIoEKFAhAIRCkQIBSIUiFAgQoEIoUCEAhEKRCgQIRSIUCBCgQgFIhSIEApEKBChQIQCEUKBCAUiFIhQIEIoEKFAhAIRCkQIBSIUiFAgQoEIAf4D+jdWcY5tG6AAAAAASUVORK5CYII="