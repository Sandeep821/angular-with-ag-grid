import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [AgGridModule.withComponents([])]
    }).compileComponents();
    
  }));


  

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ag-grid-with-angular6'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ag-grid-with-angular6');
  }));

  // ag-grid test
  describe('AgGrid', () => {
    it('should have expected column headers', () => {
      let component: AppComponent;
      let fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      const elm = fixture.nativeElement;
      const grid = elm.querySelector('ag-grid-angular');
      const headerCells = grid.querySelectorAll('.ag-header-cell-text');
      const headerTitles = Array.from(headerCells).map((cell: any) =>
          cell.textContent.trim()
      );
      expect(headerTitles).toEqual(['Make', 'Model', 'Price']);
      });
  
      it('first row should have expected data', () => {
        let component: AppComponent;
        let fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
  
        const elm = fixture.nativeElement;
        const grid = elm.querySelector('ag-grid-angular');
        const firstRowCells = grid.querySelectorAll(
            'div[row-id="0"] div.ag-cell-value'
        );
        const values = Array.from(firstRowCells).map((cell: any) =>
            cell.textContent.trim()
        );
        console.log('values', values);
        expect(values).toEqual(['Toyota', 'Celica', '35000']);
       });
     });
  

});
