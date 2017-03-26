/**
 * Created by Andrew on 3/26/2017.
 */
class SpawnView {
    constructor(model, app) {
        this.model = model;
        this.app = app;

        let hitArea = new PIXI.Graphics();
        hitArea.lineStyle(0);
        hitArea.beginFill(0xFFFF0B, 0);
        hitArea.drawRect(0, 0, app_width, app_height);
        hitArea.endFill();
        hitArea.boundsPadding = 0;
        this.hitAreaSprite = new PIXI.Sprite(hitArea.generateCanvasTexture());
        this.hitAreaSprite.interactive = true;
        this.hitAreaSprite.name = 'hitArea';
        this.app.stage.addChild(this.hitAreaSprite);

        this.gravityMinBtn = document.getElementById('gravityMin');
        this.gravityMaxBtn = document.getElementById('gravityMax');
        this.shapeSpeedMinBtn = document.getElementById('shapeSpeedMin');
        this.shapeSpeedMaxBtn = document.getElementById('shapeSpeedMax');

        this.shapeCountInp = document.getElementById('shapeCount');
        this.shapeAreaInp = document.getElementById('area');
        this.gravityInp = document.getElementById('gravity');
        this.shapeSpeedInp = document.getElementById('shapeSpeed');
    }
    
    tick() {
        this.model.shapes.forEach((item)=>{
            item.y += this.model.gravity;
        })

    }

    addShape (shape) {
        this.app.stage.addChild(shape)
    }


}

exports = SpawnView