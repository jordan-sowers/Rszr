export default function(context) {
	var doc = context.document;
	var selection = context.selection;

	if (selection.count() == 0) {
		doc.showMessage('Please select something.');
	} else {
		for (var i = 0; i < selection.count(); i++) {
			//checks to see if the layer is a Symbol

			if (selection[i].class() == 'MSSymbolInstance') {
				var layer = selection[i];

				//get the dimensions of the original symbol

				var symbolFrame = layer.symbolMaster().frame();

				var symbolWidth = symbolFrame.width();
				var symbolHeight = symbolFrame.height();

				// set dimensions to symbol

				layer.frame().height = symbolHeight;
				layer.frame().width = symbolWidth;

				doc.showMessage('Changed to Original Position and Size: ' + symbolWidth + ' x ' + symbolHeight + 'px');
			} else {
				doc.showMessage('Please select a Symbol Layer.');
			}
		}
	}
}
