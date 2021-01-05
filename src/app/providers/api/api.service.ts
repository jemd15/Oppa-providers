import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageList } from 'src/app/models/message-list';
import { Service } from 'src/app/models/service';
import { User } from 'src/app/models/user';

import * as faker from 'faker/locale/es_MX'
import * as timeago from 'timeago.js';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  login(email: string, password: string): Observable<User> {
    return of({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.exampleEmail(),
      birthdate: faker.date.past(20),
      avatar: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`,
      role: 'apoderado',
      credit: parseInt(faker.finance.amount()) * 100,
      accountType: 'companion',
      token: faker.random.alphaNumeric(18),
      location: {
        street: 'Av. Recoleta #2121',
        other: 'Dpto. 605B',
        district: 'Recoleta',
        region: 'Metropolitana de Santiago'
      }
    })
  }

  getServices(): Observable<Service[]> {
    return of([
      { id: parseInt(faker.random.uuid()), type: `Servicio a Domicilio`,        name: `peluquería`,       description: faker.lorem.paragraph(), price: parseInt(`9990`),  img: `../../../../assets/images/pexels-nick-demou-1319460.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio de acompañamiento`,  name: `realizar trámite`, description: faker.lorem.paragraph(), price: parseInt(`9990`),  img: `../../../../assets/images/1789259.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio a Domicilio`,        name: `podología`,        description: faker.lorem.paragraph(), price: parseInt(`14990`), img: `../../../../assets/images/pexels-stephanie-allen-4085445.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio de acompañamiento`,  name: `cobro`,            description: faker.lorem.paragraph(), price: parseInt(`14990`), img: `../../../../assets/images/pexels-eduardo-soares-5497951.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio a Domicilio`,        name: `inyecciones`,      description: faker.lorem.paragraph(), price: parseInt(`11990`), img: `../../../../assets/images/pexels-gustavo-fring-3985166.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio de acompañamiento`,  name: `paseo`,            description: faker.lorem.paragraph(), price: parseInt(`11990`), img: `../../../../assets/images/pexels-kaboompics-com-6054.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio a Domicilio`,        name: `kinesiólogo`,      description: faker.lorem.paragraph(), price: parseInt(`9990`),  img: `../../../../assets/images/g-terapi-ile-agrilara-son-H1347048-11.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio de acompañamiento`,  name: `salud`,            description: faker.lorem.paragraph(), price: parseInt(`9990`),  img: `../../../../assets/images/pexels-pixabay-40568.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio a Domicilio`,        name: `cuidado`,          description: faker.lorem.paragraph(), price: parseInt(`11990`), img: `../../../../assets/images/pexels-andrea-piacquadio-3768131.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio de acompañamiento`,  name: `pagos`,            description: faker.lorem.paragraph(), price: parseInt(`11990`), img: `../../../../assets/images/resize_1590967555.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio a Domicilio`,        name: `curaciones`,       description: faker.lorem.paragraph(), price: parseInt(`14990`), img: `../../../../assets/images/pexels-cottonbro-5721555.jpg` },
      { id: parseInt(faker.random.uuid()), type: `Servicio de acompañamiento`,  name: `compras`,          description: faker.lorem.paragraph(), price: parseInt(`14990`), img: `../../../../assets/images/pexels-gustavo-fring-4173326.jpg` }
    ]).pipe(delay(5000));
  }

  getProvidedServices(): Observable<any[]> {
    return of([
      {
        workable: ['L','M','X','J','V','S','D'],
        times: [faker.time.recent(), faker.time.recent()],
        service: {
          name: `peluquería`,
          img_url: `../../../../assets/images/pexels-nick-demou-1319460.jpg`,
          price: 9990,
        },
        location: {
          districts: ['Recoleta', 'Conchalí', 'Independencia']
        }
      },
      {
        workable: ['L','M','X','J','V'],
        times: [faker.time.recent(), faker.time.recent()],
        service: {
          name: `realizar trámite`,
          img_url: `../../../../assets/images/1789259.jpg`,
          price: 9990,
        },
        location: {
          regions: ['Metropolitana de Santiago']
        }
      },
      {
        workable: ['L','M','X','D'],
        times: [faker.time.recent(), faker.time.recent()],
        service: {
          name: `cuidado`,
          img_url: `../../../../assets/images/pexels-andrea-piacquadio-3768131.jpg`,
          price: 11990,
        },
        location: {
          districts: ['Recoleta', 'Conchalí', 'Independencia']
        }
      },
      {
        workable: ['S','D'],
        times: [faker.time.recent(), faker.time.recent()],
        service: {
          name: `compras`,
          img_url: `../../../../assets/images/pexels-gustavo-fring-4173326.jpg`,
          price: 14990,
        },
        location: {
          regions: ['Magallanes']
        }
      }
    ]).pipe(delay(5000));
  }

  getHistoryOfServices(): Observable<any[]> {
    return of([
      {
        elder: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          img_url: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`
        },
        datetime: faker.date.future(),
        start: faker.date.future(),
        end: faker.date.future(),
        service: {
          name: `peluquería`,
          img_url: `../../../../assets/images/pexels-nick-demou-1319460.jpg`,
          price: 9990,
        },
        state: 'cancelado'
      },
      {
        elder: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          img_url: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`
        },
        datetime: faker.date.future(),
        start: faker.date.future(),
        end: faker.date.future(),
        service: {
          name: `peluquería`,
          img_url: `../../../../assets/images/pexels-nick-demou-1319460.jpg`,
          price: 9990,
        },
        state: 'En curso'
      },
      {
        elder: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          img_url: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`
        },
        datetime: faker.date.future(),
        start: faker.date.future(),
        end: faker.date.future(),
        service: {
          name: `peluquería`,
          img_url: `../../../../assets/images/pexels-nick-demou-1319460.jpg`,
          price: 9990,
        },
        state: 'Terminado'
      },
      {
        elder: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          img_url: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`
        },
        datetime: faker.date.future(),
        start: faker.date.future(),
        end: faker.date.future(),
        service: {
          name: `peluquería`,
          img_url: `../../../../assets/images/pexels-nick-demou-1319460.jpg`,
          price: 9990,
        },
        state: 'Cancelado'
      },
    ]).pipe(delay(5000));
  }

  getMessages(): Observable<MessageList[]> {
    return of([
      { name: faker.name.findName(), img: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`, service: faker.name.jobTitle(), lastMsg: faker.lorem.sentence(), lastMsgAgo: timeago.format(faker.date.recent()) },
      { name: faker.name.findName(), img: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`, service: faker.name.jobTitle(), lastMsg: faker.lorem.sentence(), lastMsgAgo: timeago.format(faker.date.recent()) },
      { name: faker.name.findName(), img: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`, service: faker.name.jobTitle(), lastMsg: faker.lorem.sentence(), lastMsgAgo: timeago.format(faker.date.recent()) },
      { name: faker.name.findName(), img: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`, service: faker.name.jobTitle(), lastMsg: faker.lorem.sentence(), lastMsgAgo: timeago.format(faker.date.recent()) },
      { name: faker.name.findName(), img: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`, service: faker.name.jobTitle(), lastMsg: faker.lorem.sentence(), lastMsgAgo: timeago.format(faker.date.recent()) },
      { name: faker.name.findName(), img: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`, service: faker.name.jobTitle(), lastMsg: faker.lorem.sentence(), lastMsgAgo: timeago.format(faker.date.recent()) },
      { name: faker.name.findName(), img: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`, service: faker.name.jobTitle(), lastMsg: faker.lorem.sentence(), lastMsgAgo: timeago.format(faker.date.recent()) },
      { name: faker.name.findName(), img: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`, service: faker.name.jobTitle(), lastMsg: faker.lorem.sentence(), lastMsgAgo: timeago.format(faker.date.recent()) },
      { name: faker.name.findName(), img: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`, service: faker.name.jobTitle(), lastMsg: faker.lorem.sentence(), lastMsgAgo: timeago.format(faker.date.recent()) },
      { name: faker.name.findName(), img: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`, service: faker.name.jobTitle(), lastMsg: faker.lorem.sentence(), lastMsgAgo: timeago.format(faker.date.recent()) }
    ]).pipe(delay(5000));
  }

  getServicesHistory(): Observable<Service[]> {
    return of([
      {
        id: parseInt(faker.random.uuid()),
        date: faker.date.past().toISOString(),
        type: `Servicio a Domicilio`,
        name: `peluquería`,
        description: faker.lorem.paragraph(),
        price: parseInt(`9990`),
        img: `../../../../assets/images/pexels-nick-demou-1319460.jpg`,
        serverName: faker.name.findName(),
        serverImg: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`,
        serverRating: faker.random.number(5)
      },
      {
        id: parseInt(faker.random.uuid()),
        date: faker.date.past().toISOString(),
        type: `Servicio de acompañamiento`,
        name: `realizar trámite`,
        description: faker.lorem.paragraph(),
        price: parseInt(`9990`),
        img: `../../../../assets/images/1789259.jpg`,
        serverName: faker.name.findName(),
        serverImg: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`,
        serverRating: faker.random.number(5)
      },
      {
        id: parseInt(faker.random.uuid()),
        date: faker.date.past().toISOString(),
        type: `Servicio a Domicilio`,
        name: `podología`,
        description: faker.lorem.paragraph(),
        price: parseInt(`14990`),
        img: `../../../../assets/images/pexels-stephanie-allen-4085445.jpg`,
        serverName: faker.name.findName(),
        serverImg: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`,
        serverRating: faker.random.number(5)
      },
      {
        id: parseInt(faker.random.uuid()),
        date: faker.date.past().toISOString(),
        type: `Servicio de acompañamiento`,
        name: `cobro`,
        description: faker.lorem.paragraph(),
        price: parseInt(`14990`),
        img: `../../../../assets/images/pexels-eduardo-soares-5497951.jpg`,
        serverName: faker.name.findName(),
        serverImg: `https://loremflickr.com/320/240/selfie?lock=${faker.random.number()}`,
        serverRating: faker.random.number(5)
      },

    ]).pipe(delay(5000));
  }

  getPermitedServices(): Observable<Service[]> {
    return of([
      {
        id: parseInt(faker.random.uuid()),
        type: 'Servicio de acompañamiento',
        name: 'realizar trámite',
        description: faker.lorem.paragraph(),
        price: parseInt('9990'),
        img: '../../../../assets/images/1789259.jpg',
      },
      {
        id: parseInt(faker.random.uuid()),
        type: 'Servicio de acompañamiento',
        name: 'cobro',
        description: faker.lorem.paragraph(),
        price: parseInt('14990'),
        img: '../../../../assets/images/pexels-eduardo-soares-5497951.jpg',
      },
      {
        id: parseInt(faker.random.uuid()),
        type: 'Servicio a Domicilio',
        name: 'peluquería',
        description: faker.lorem.paragraph(),
        price: parseInt('9990'),
        img: '../../../../assets/images/pexels-nick-demou-1319460.jpg',
      }
    ])
  }

}

