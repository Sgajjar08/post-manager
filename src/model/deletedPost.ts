export class RemovedPost {
    constructor(
      public id: string,
      public name?: string,
      public content?: string,
      public selected?: boolean,
      public dateTime?: Date
    ) {}
  }
  