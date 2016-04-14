import { mapEvents } from 'sigh-core/lib/stream'

export default function(op, opts = {}) {
  return mapEvents(op.stream, event => {
    if (event.type !== 'add' && event.type !== 'change') {
      return event
    }

    if (opts.fileType && event.fileType !== opts.fileType) {
      return event
    }

    event.data = event.data.replace(opts.search, opts.replacement);
    return event
  })
}
