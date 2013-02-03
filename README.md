assets
======

A Meteor-based asset tracking system for the home user. Works great with a barcode reader.

why
===

I decided that since I have a lot of "stuff" (ie. servers, old computer pieces, displays, laptops, hard disks, thin clients, etc..) that it would be nifty to create an asset tracking system with barcodes. Meteor was the obvious choice because of it's rapid-development cycle. 

how
===

The app was built in a matter of 20 minutes. A simple collection was created and a simple UI was created. 

barcodes
========

If you have barcode labels to stick on items, that's awesome! Scanning these into the "id" field of an asset record will allow you to search the collection by scanning the tag into the search box. I generated a bunch (~60 or so) barcodes using Apple's Numbers spreadsheet program with a barcode font installed. These are mere sequential numbers (000-060). I scotch-tape the tags onto objects. Eventually I'll buy some label paper and it'll be supes easy to stick on. 

I scan the tags with an iPhone app that connects to my Mac over wifi with VNC. When the tag is scanned, it "types" the id into the selected text box and hits enter.

I have a USB reader too, but it's tethered and not so great at scanning.
