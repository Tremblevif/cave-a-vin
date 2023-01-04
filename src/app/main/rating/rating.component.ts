import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cra-rating',
  templateUrl: './rating.component.html',
  styles: [
    `
      .glyphicon {
        font-size: x-large;
        font-weight: bolder;
      }
      .glyphicon-star:after {
        content: '✮';
      }
      .glyphicon-star-empty:after {
        content: '✩';
      }
    `,
  ],
})
export class RatingComponent {
  private static readonly LENGTH = 5;
  private _note!: number;
  public rating = new Array(RatingComponent.LENGTH).fill(false);

  @Output()
  public noteChange = new EventEmitter<number>();
  @Input()
  public set note(value: number) {
    this._note = value;
    this.rating = [
      ...new Array(value).fill(true),
      ...new Array(RatingComponent.LENGTH - value).fill(false),
    ];
  }
  public get note(): number {
    return this._note;
  }

  public onClick(note: number): void {
    this.note = note === 1 && this.note === 1 ? 0 : note;
    this.noteChange.emit(this.note);
  }
}
